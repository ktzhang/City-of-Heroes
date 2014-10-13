<?php
// Script that helps populate team names in the city of heroes Teams
// database table.

mysql_connect("airnature.corp.yahoo.com", "root", "");
mysql_select_db("city_of_heroes");

$select = 'SELECT SName FROM Superheroes';
$result = mysql_query($select);
$index = 0;
$row = mysql_fetch_assoc($result);
$superhero = $row['SName'];

for($z = 1; $z <=1000; $z++){

	$index = $index + 1;
	if($index = 4){
		$index = 0;
		$row = mysql_fetch_assoc($result);
		$superhero = $row['SName'];
	}
	// iterate through the superheroes
	if($z % 4 = 0){$color = 'Purple';}
	if($z % 4 = 1){$color = 'Yellow';}
	if($z % 4 = 2){$color = 'Blue';}
	if($z % 4 = 3){$color = 'White';}
	
	$update1 = 'INSERT INTO Superheroes
	VALUES('.$color.' '.$superhero.')';
	$teams_result = mysql_query($update1);
}
