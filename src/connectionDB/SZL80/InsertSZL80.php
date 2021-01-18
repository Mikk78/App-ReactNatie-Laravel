<?php
include "../DBconfig.php";

$con = mysqli_connect($HostName, $HostUser, $HostPass, $DatabaseName);

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json, true);

// Populate SZL80 from JSON $obj array and store into $variable.
$S_ID = $obj['id'];
$S_Name = $obj['name'];
$Number_of_parts_in_carpentry = ['number_of_parts_in_carpentry'],
$Number_of_parts_in_stock = ['number_of_parts_in_stock']
$Number_of_parts_in_package = ['number_of_parts_in_package']
$Total = ['total']
$Sql_Query = "INSERT INTO szl80 (`id`, `name`, `size`, `number_of_parts_in_carpentry`, `number_of_parts_in_stock`, `number_of_parts_in_package`, `total`) 
values ('$S_ID', '$S_Name', '$Number_of_parts_in_carpentry','$Number_of_parts_in_stock','$Number_of_parts_in_package', $Total)";

if (mysqli_query($con, $Sql_Query)) {

// If the record inserted successfully then show the message.
    $MSG = 'Record Successfully Inserted Into MySQL Database.';

// Converting the message into JSON format.
    $json = json_encode($MSG);

// Echo the message.
    echo $json;

} else {

    echo 'Try Again';

}
mysqli_close($con);
