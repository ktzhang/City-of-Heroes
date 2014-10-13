<?php
// Script that helps populate data in the city of heroes Teams
// database table. We're looking up EID's based on names, and
// populating that information in the Opps' table.

mysql_connect("airnature.corp.yahoo.com", "root", "");
mysql_select_db("city_of_heroes");
for ($j=1; $j <= 1000; $j++){
	$update1 = 'INSERT INTO Teams(TID, Manhours, TeamSize)
		VALUES('.$j.', 0, 0)';
	$teams_result = mysql_query($update1);
}


// Pull all the volunteers
$sql1 = 'SELECT EID, Hours
FROM Users
';

$result1 = mysql_query($sql1);
$num_rows = mysql_num_rows($result1);

while ($row = mysql_fetch_assoc($result1)) {
	$eid = $row['EID'];
	$hours = $row['Hours'];
	$teamno = rand(1, 1000);
	$select = 'SELECT Manhours, TeamSize FROM Teams WHERE TID='.$teamno.' ';
	$result = mysql_query($select);
	$team = mysql_fetch_assoc($result);
	$teamhrs = $team['Manhours'] + $hours;
	$teamsz = $team['TeamSize'] + 1;
	// update the opps database with the volunteer's employee id
	if($teamsz < 21){
		$update_sql = 'UPDATE Teams
		SET Manhours='.$teamhrs.', TeamSize='.$teamsz.', EID'.$teamsz.' = '.$eid.'
		WHERE TID = '. $teamno .'
		';
		mysql_query($update_sql);
		$update = 'UPDATE Users
                SET TID1 = '.$teamno.'
                WHERE EID = '.$eid.' ';
        	mysql_query($update);
	}
}
