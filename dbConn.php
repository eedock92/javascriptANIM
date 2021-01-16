<?php
$conn =    mysqli_connect('localhost', 'root', 'dnfendkfm123');
mysqli_select_db($conn, "shoes");
$result = mysqli_query($conn, 'SELECT * FROM sneakersview');
print_r($result);
$row = mysqli_fetch($result);
?>