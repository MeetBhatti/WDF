
<?php

require_once __DIR__ . "/auth.php";
require_once __DIR__ . "/db_mysqli.php";

// Decide which login option was opened from the homepage
$loginMode = strtolower($_GET["mode"] ?? "student");

if (!in_array($loginMode, ["student", "admin"], true)) {
    $loginMode = "student";
}

$pageTitle = ($loginMode === "admin")
    ? "Admin Login"
    : "Student Login";

$message = "";

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["name"] ?? "");
    $password = $_POST["password"] ?? "";

    if ($name === "" || $password === "") {

        $message = "Please enter your name and password.";

    } else {

        try {
            $stmt = $conn->prepare(
                "SELECT student_id, name, email, password,
                        department, role
                 FROM students
                 WHERE name = ?
                 LIMIT 1"
            );

            $stmt->bind_param("s", $name);
            $stmt->execute();

            $stmt->bind_result(
                $studentId,
                $studentName,
                $studentEmail,
                $storedHash,
                $studentDepartment,
                $studentRole
            );

            $found = $stmt->fetch();
            $stmt->close();

            if ($found && password_verify($password, $storedHash)) {

                if (!in_array($studentRole, ["student", "admin"], true)) {

                    $message = "This account has an invalid role.";

                } elseif (
                    $loginMode === "admin" &&
                    $studentRole !== "admin"
                ) {

                    $message = "This account does not have admin access.";

                } elseif (
                    $loginMode === "student" &&
                    $studentRole !== "student"
                ) {

                    $message = "Please use the Admin Login option.";

                } else {

                    // Create a fresh session ID after successful login
                    session_regenerate_id(true);

                    $_SESSION["student_id"] = $studentId;
                    $_SESSION["student_name"] = $studentName;
                    $_SESSION["student_email"] = $studentEmail;
                    $_SESSION["department"] = $studentDepartment;
                    $_SESSION["role"] = $studentRole;
                    $_SESSION["last_activity"] = time();

                    // Redirect using the actual database role
                    if ($studentRole === "admin") {
                        header("Location: admin_dashboard.php");
                    } else {
                        header("Location: dashboard.php");
                    }

                    exit;
                }

            } else {
                $message = "Invalid name or password. Please try again.";
            }

        } catch (mysqli_sql_exception $e) {

            error_log("Login error: " . $e->getMessage());
            $message = "Login could not be completed. Please try again.";
        }
    }
}

?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Student Hub Portal | <?= htmlspecialchars($pageTitle) ?></title>

    <link rel="stylesheet" href="login.css">
</head>

<body>

    <main class="loginpage">

        <a class="home-link" href="../index.html">
            &#8592; Back to Home
        </a>

        <div class="login-icon" aria-hidden="true">
            <?= ($loginMode === "admin") ? "A" : "S" ?>
        </div>

        <h1><?= htmlspecialchars($pageTitle) ?></h1>

        <p class="login-description">
            Welcome to Student Hub Portal.
            Enter your registered name and password to continue.
        </p>

        <p class="role-note">
            <?= ($loginMode === "admin")
                ? "Sign in with your administrator account."
                : "Sign in with your student account." ?>
        </p>

        <?php if (isset($_GET["timeout"])): ?>
            <p class="status-message">
                Your session expired due to inactivity. Please log in again.
            </p>
        <?php endif; ?>

        <?php if (isset($_GET["logged_out"])): ?>
            <p class="status-message">
                You have logged out successfully.
            </p>
        <?php endif; ?>

        <?php if ($message !== ""): ?>
            <p class="error-message" id="loginMessage">
                <?= htmlspecialchars($message, ENT_QUOTES, "UTF-8") ?>
            </p>
        <?php endif; ?>

        <form
            method="POST"
            action="login.php?mode=<?= htmlspecialchars($loginMode, ENT_QUOTES, "UTF-8") ?>"
        >

            <label for="name">Full Name</label>

            <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter your registered name"
                autocomplete="username"
                required
            >

            <label for="password">Password</label>

            <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                autocomplete="current-password"
                required
            >

            <button type="submit">Login</button>

        </form>

        <div class="login-switch">
            <?php if ($loginMode === "admin"): ?>
                <p>
                    Are you a student?
                    <a href="login.php?mode=student">Student Login</a>
                </p>
            <?php else: ?>
                <p>
                    Are you an administrator?
                    <a href="login.php?mode=admin">Admin Login</a>
                </p>

                <p>
                    New student?
                    <a href="register.php">Register here</a>
                </p>
            <?php endif; ?>
        </div>

        <footer>@2026 Student Hub Portal</footer>

    </main>

</body>
</html>
