<?php

if (session_status() === PHP_SESSION_NONE) {

    $isHttps = !empty($_SERVER["HTTPS"])
        && $_SERVER["HTTPS"] !== "off";

    session_set_cookie_params([
        "lifetime" => 0,
        "path" => "/",
        "secure" => $isHttps,
        "httponly" => true,
        "samesite" => "Lax"
    ]);

    session_start();
}

// 15 minutes of inactivity
$idleTimeout = 900;

if (isset($_SESSION["student_id"])) {

    if (
        isset($_SESSION["last_activity"]) &&
        (time() - $_SESSION["last_activity"]) > $idleTimeout
    ) {
        $_SESSION = [];

        if (ini_get("session.use_cookies")) {
            $params = session_get_cookie_params();

            setcookie(
                session_name(),
                "",
                time() - 42000,
                $params["path"],
                $params["domain"],
                $params["secure"],
                $params["httponly"]
            );
        }

        session_destroy();

        header("Location: login.php?timeout=1");
        exit;
    }

    $_SESSION["last_activity"] = time();
}

// Make sure the user has logged in
function require_login(): void
{
    if (!isset($_SESSION["student_id"])) {
        header("Location: login.php");
        exit;
    }
}

// Allow only the required role
function require_role(string $requiredRole): void
{
    require_login();

    if (($_SESSION["role"] ?? "") !== $requiredRole) {

        http_response_code(403);

        echo "<h2>403 - Access Denied</h2>";
        echo "<p>You are not allowed to access this page.</p>";
        echo '<a href="dashboard.php">Back to Dashboard</a>';

        exit;
    }
}
?>