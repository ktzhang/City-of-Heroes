<?php
// Script that helps populate data in the city of heroes Opps'
// database table. We're looking up EID's based on names, and
// populating that information in the Opps' table.

mysql_connect("airnature.corp.yahoo.com", "root", "");
mysql_select_db("city_of_heroes");

// Pull all the volunteers
$myquery = 'SELECT Location FROM Opps
        ';


	    $query = mysql_query($myquery);

	    if ( ! $query ) {
	        echo mysql_error();
	        die;
	    }

	    $data = array();

	    for ($x = 0; $x < mysql_num_rows($query); $x++) {
	        $data[] = mysql_fetch_assoc($query);
	    }

	    echo json_encode($data);     

	    mysql_close($server);