<?php
if (array_key_exists('category', $_REQUEST)) {
    //$category = $_REQUEST['category'];
} else {
   // $category = null;
}


header("Content-type: application/json ;charset=utf-8");
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: GET, POST');
connect_db();


echo json_encode(fetchYLIData());

function connect_db() {

    mysql_connect("airnature.corp.yahoo.com", "root", "");
    mysql_select_db("city_of_heroes");
    mysql_query('SET NAMES utf8');
}

function fetchYLIData(){

  $userid = $_GET["id"];
  $sql = "SELECT * FROM  Opps";

$result = mysql_query($sql);
$data = array();
if (mysql_num_rows($result) > 0) {
        while ($prop = mysql_fetch_array($result, MYSQL_ASSOC)) {
            array_push($data, $prop);
        }
    }

$data2 = array();
$data2["items"]=$data;

   return $data;
}


?>
