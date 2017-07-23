<?php
$data = file_get_contents("php://input");

$file = "quizList.json";
file_put_contents($file, $data);
?>