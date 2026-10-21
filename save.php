<?php

$name = $_POST["name"];
$email = $_POST["email"];

$file = fopen("students.csv", "a");
fputcsv($file, [$name, $email]);
fclose($file);
echo "Student data saved successfully.";
?>