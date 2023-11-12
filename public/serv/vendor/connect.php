<?php
$connect = mysqli_connect(keys()['host'], keys()['username'], keys()['pass'], keys()['nameBD']);
if(!$connect) {
    die('Error  connect');
}
?>