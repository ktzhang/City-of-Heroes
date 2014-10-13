<?php
// Script that helps populate data in the city of heroes Users
// database table, randomizing Hours volunteered.

mysql_connect("airnature.corp.yahoo.com", "root", "");
mysql_select_db("city_of_heroes");

// Pull all the volunteers
$sql = 'SELECT EID
FROM Users
';

$result = mysql_query($sql);
$num_rows = mysql_num_rows($result);

while ($row = mysql_fetch_assoc($result)) {

    $eid = $row['EID'];
    
    // iterate through the yahoo employees
    // update the users database with random hours
    $update_sql = 'UPDATE Users
    SET Hours='.rand(0,10) .'
    WHERE EID ='.$eid;
    mysql_query($update_sql);
    
}
