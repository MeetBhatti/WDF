<?php

require "db.php";

echo "<h2>StudentHub Database Connected Successfully!</h2>";

$sql = "SELECT * FROM students WHERE semester = ?";

$stmt = $conn->prepare($sql);

$semester = 3;

$stmt->execute([$semester]);

echo "<h3>Students:</h3>";

while ($row = $stmt->fetch(PDO::FETCH_ASSOC)) {

    echo "ID: " . $row["student_id"] . "<br>";
    echo "Name: " . $row["name"] . "<br>";
    echo "Email: " . $row["email"] . "<br>";
    echo "Course: " . $row["course"] . "<br>";
    echo "Semester: " . $row["semester"] . "<br>";

    echo "<hr>";
}

?>