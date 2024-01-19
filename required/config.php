<?php
define('DB_SERVER', 'localhost');
define('DB_USERNAME', '32348450_adminpanel');
define('DB_PASSWORD', 'Misiu11234!');
define('DB_NAME', '32348450_adminpanel');
define('DB_NAME_NETFLIX', '32348450_netflix');


/* Attempt to connect to MySQL database */
$link = mysqli_connect(DB_SERVER, DB_USERNAME, DB_PASSWORD, DB_NAME);
$link_netflix = mysqli_connect(DB_SERVER, DB_NAME_NETFLIX, DB_PASSWORD, DB_NAME_NETFLIX);

	
// Check connection
if($link === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}
?>