<?php
$data = file_get_contents("php://input");

$file = "classList.json";
file_put_contents($file, $data);
?>