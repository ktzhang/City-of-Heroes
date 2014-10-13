<?php
// Script that helps populate data in the city of heroes Opps'
// database table. We're looking up EID's based on names, and
// populating that information in the Opps' table.

mysql_connect("airnature.corp.yahoo.com", "root", "");
mysql_select_db("city_of_heroes");

// Pull all the volunteers
$sql = 'SELECT OID, vol1, vol2, vol3, vol4, vol5, vol6, vol7, vol8, vol9, vol10, vol11, vol12, vol13, vol14, vol15,
last1, last2, last3, last4, last5, last6, last7, last8, last9, last10, last11, last12, last13, last14,
last15
FROM Opps
';

$result = mysql_query($sql);

while ($row = mysql_fetch_assoc($result)) {

    $oid = $row['OID'];

    // iterate through the 15 volunteer spots
    for ($i = 1; $i <= 15; $i++) {
        $first_name = $row["vol$i"];
        
        if ($first_name) {
            // Unfortunately the name is a single string, need to break it
            // up to first and last name, which is delimited by a single space
            $last_name = $row["last$i"];

            // find the employee id for the given volunteer name
            $sql2 = 'SELECT EID
FROM Users
WHERE First = "'. $first_name .'"
AND Last = "'. $last_name .'"';
            $result2 = mysql_query($sql2);
            $eid_row = mysql_fetch_assoc($result2);
            
            // update the opps database with the volunteer's employee id
            $update_sql = 'UPDATE Opps
SET EID'.$i.' = '. $eid_row['EID'] .'
WHERE OID = '. $oid .'
';
            mysql_query($update_sql);
        }
    }
}
