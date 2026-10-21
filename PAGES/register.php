
<?php
require_once __DIR__ . "/db_mysqli.php";

$message = "";
$success = false;

if ($_SERVER["REQUEST_METHOD"] === "POST") {

    $name = trim($_POST["name"] ?? "");
    $password = $_POST["password"] ?? "";
    $email = trim($_POST["emailid"] ?? "");
    $contact = trim($_POST["contact"] ?? "");
    $address = trim($_POST["address"] ?? "");
    $pincode = trim($_POST["pincode"] ?? "");
    $dateofbirth = $_POST["dateofbirth"] ?? "";
    $gender = $_POST["gender"] ?? "";
    $department = $_POST["department"] ?? "";

    // 1. Validate all required fields
    if (
        $name === "" ||
        strlen($name) > 100 ||
        $password === "" ||
        $address === "" ||
        !filter_var($email, FILTER_VALIDATE_EMAIL) ||
        !preg_match('/^[0-9]{6}$/', $pincode) ||
        !preg_match('/^[0-9]{10,15}$/', $contact) ||
        !in_array($gender, ["male", "female", "other"], true) ||
        !in_array($department, [
            "Computer_Engineering",
            "Computer_Science_and_Engineering",
            "Information_Technology",
            "Electrical_Engineering",
            "Mechanical_Engineering",
            "Civil_Engineering"
        ], true)
    ) {
        $message = "Please enter valid details in all fields.";

    } elseif (!preg_match(
        '/^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/',
        $password
    )) {
        $message =
            "Password must have at least 8 characters, one letter and one number.";

    } else {

        // Validate date format and reject future dates
        $date = DateTime::createFromFormat(
            '!Y-m-d',
            $dateofbirth
        );

        if (
            !$date ||
            $date->format('Y-m-d') !== $dateofbirth ||
            $dateofbirth > date('Y-m-d')
        ) {
            $message = "Please enter a valid date of birth.";

        } else {
            try {
                // 2. Check duplicate email
                $check = $conn->prepare(
                    "SELECT student_id
                     FROM students
                     WHERE email = ?"
                );

                $check->bind_param("s", $email);
                $check->execute();
                $check->store_result();

                if ($check->num_rows > 0) {

                    $message =
                        "This email is already registered. Please login.";

                } else {

                    // 3. Hash the password
                    $hashedPassword = password_hash(
                        $password,
                        PASSWORD_DEFAULT
                    );

                    // 4. Insert with a prepared statement
                    $sql = "INSERT INTO students
                        (name, password, email, contact, address,
                         pincode, dateofbirth, gender, department)
                        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

                    $stmt = $conn->prepare($sql);

                    $stmt->bind_param(
                        "sssssssss",
                        $name,
                        $hashedPassword,
                        $email,
                        $contact,
                        $address,
                        $pincode,
                        $dateofbirth,
                        $gender,
                        $department
                    );

                    $stmt->execute();
                    $stmt->close();

                    $success = true;
                    $message =
                        "Registration successful! Please login.";
                }

                $check->close();

            } catch (mysqli_sql_exception $e) {
    error_log($e->getMessage());
    $message = "Registration could not be completed. Please check your details.";
}
        }
    }
}
?>

<!DOCTYPE html>
<html>
<head>
    <title>Student Hub Portal | Register</title>
    <link rel="stylesheet" href="../css/register.css">
</head>
<body>
    <div class="register-box">
        <h2>Register Page</h2>
        <p>This is register page. You have to enter your details to create an account.</p>

        <form method="POST" action="register.php">
            <label for="name">Full Name:*</label>
            <input type="text" name="name" id="name" maxlength="100" required>
            <br><br>

            <label for="password">Password: *</label>
            <input type="password" name="password" id="password" minlength="8" required>
            <br><br>

            <label for="emailid">Email ID: *</label>
            <input type="email" name="emailid" id="emailid" maxlength="100" required>
            <br><br>

            <label for="contact">Contact No: *</label>
            <input type="tel" name="contact" id="contact" maxlength="20" required>
            <br><br>

            <label for="address">Address: *</label>
            <textarea name="address" id="address" required></textarea>
            <br><br>

            <label for="pincode">Pin Code:*</label>
            <input type="text" name="pincode" id="pincode"
                   pattern="[0-9]{6}" maxlength="6" required>
            <br><br>

            <label for="dateofbirth">Date of Birth: *</label>
            <input type="date" name="dateofbirth" id="dateofbirth"
                   max="<?= date('Y-m-d') ?>" required>
            <br><br>

            <label for="gender">Gender: *</label>
            <select name="gender" id="gender" required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select>
            <br><br>

            <label for="department">Department: *</label>
            <select name="department" id="department" required>
                <option value="">Select Department</option>
                <option value="Computer_Engineering">Computer Engineering</option>
                <option value="Computer_Science_and_Engineering">Computer Science and Engineering</option>
                <option value="Information_Technology">Information Technology</option>
                <option value="Electrical_Engineering">Electrical Engineering</option>
                <option value="Mechanical_Engineering">Mechanical Engineering</option>
                <option value="Civil_Engineering">Civil Engineering</option>
            </select>
            <br><br>

            <button type="submit">Submit</button>
        </form>

        <?php if ($message !== ""): ?>
            <p><?= htmlspecialchars($message) ?></p>
        <?php endif; ?>

        <?php if ($success): ?>
            <p><a href="login.php">Go to Login</a></p>
        <?php else: ?>
            <p>Already registered? <a href="login.php">Login here</a></p>
        <?php endif; ?>
    </div>

    <br><br>
    <footer>@2026 Student Hub Portal</footer>
</body>
</html>
