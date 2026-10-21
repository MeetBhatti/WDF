<?php

require_once __DIR__ . "/auth.php";

require_role("admin");

$adminName = htmlspecialchars(
    $_SESSION["student_name"] ?? "Admin",
    ENT_QUOTES,
    "UTF-8"
);

?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Student Hub Portal | Admin Dashboard</title>
</head>
<body>

    <h1>Student Hub Portal</h1>

    <h2>Admin Dashboard</h2>

    <p>Welcome, <?= $adminName ?>!</p>

    <p>You have successfully logged in as an admin.</p>

    <p>Student and event management features will be added
       in upcoming practicals.</p>

    <a href="logout.php">Logout</a>

</body>
</html>
