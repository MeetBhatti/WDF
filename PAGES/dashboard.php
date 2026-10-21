<?php

require_once __DIR__ . "/auth.php";

require_login();

// Admins must use the admin dashboard.
if (($_SESSION["role"] ?? "") === "admin") {
    header("Location: admin_dashboard.php");
    exit;
}

// Only student accounts can view this dashboard.
if (($_SESSION["role"] ?? "") !== "student") {
    http_response_code(403);
    exit("Access denied.");
}

?>

<!DOCTYPE html>

<html>

<head>

    <title>Student Hub Portal | Dashboard</title>

    <link rel="stylesheet" href="../css/dashboard.css">

</head>

<body>

    <div class="cards">

        <h2>Dashboard Page</h2>

        <p>

            In this page other details are provided like

            <b><u>Leave Application, Student Scholarship Details, Student List and Events</u></b>

            where Students can see multiple different things and select one from it.

        </p>

        <p><a href="logout.php">Logout</a></p>

        <!-- Student List -->

        <h2>Student List</h2>

        <p>Select students.json file:</p>

        <input

            type="file"

            id="studentListJSONFile"

            accept=".json"

        >

        <button

            type="button"

            onclick="loadStudents()"

        >

            Load Students

        </button>

        <br><br>

        <input

            type="text"

            id="studentSearch"

            placeholder="Search student name"

        >

        <select id="studentCourse">

            <option value="all">

                All Courses

            </option>

            <option value="Computer Engineering">

                Computer Engineering

            </option>

            <option value="Information Technology">

                Information Technology

            </option>

            <option value="Mechanical Engineering">

                Mechanical Engineering

            </option>

            <option value="Electrical Engineering">

                Electrical Engineering

            </option>

        </select>

        <p id="studentListLoading">

            Loading students...

        </p>

        <p id="studentListError"></p>

        <div id="studentList"></div>

        <hr>

        <!-- Events -->

        <h2>College Events</h2>

        <p>Select events.json file:</p>

        <input

            type="file"

            id="eventJSONFile"

            accept=".json"

        >

        <button

            type="button"

            onclick="loadEvents()"

        >

            Load Events

        </button>

        <br><br>

        <input

            type="text"

            id="eventSearch"

            placeholder="Search event"

        >

        <select id="eventCategory">

            <option value="all">

                All Categories

            </option>

            <option value="Technical">

                Technical

            </option>

            <option value="Cultural">

                Cultural

            </option>

            <option value="Sports">

                Sports

            </option>

            <option value="Workshop">

                Workshop

            </option>

            <option value="Other">

                Other

            </option>

        </select>

        <p id="eventLoading">

            Loading events...

        </p>

        <p id="eventError"></p>

        <div id="eventList"></div>

        <hr>

        <!-- Leave Application -->

        <h2>Leave Application</h2>

        <p>Enter your details:</p>

        <form>

            <label for="leaveName">

                Full Name: *

            </label>

            <input

                type="text"

                name="leave_name"

                id="leaveName"

                required

            >

            <br><br>

            <p>

                Reason:

                <textarea

                    id="leaveReason"

                    cols="40"

                    rows="5"

                ></textarea>

            </p>

            <p>

                Leave Type:

                <select

                    name="leave_type"

                    id="leaveType"

                >

                    <option value="">

                        --Select Leave Type--

                    </option>

                    <option value="sick">

                        Sick Leave

                    </option>

                    <option value="casual">

                        Casual Leave

                    </option>

                    <option value="earned">

                        Earned Leave

                    </option>

                    <option value="maternity">

                        Maternity Leave

                    </option>

                    <option value="paternity">

                        Paternity Leave

                    </option>

                </select>

            </p>

            <p id="leaveMessage"></p>

            <br><br>

            <button

                type="button"

                id="button_dashboard"

            >

                Submit

            </button>

        </form>

        <!-- Scholarship -->

        <h2>Student Scholarship Details</h2>

        <p>

            Enter your details for scholarship registration

        </p>

        <form>

            <label for="scholarshipName">

                Full Name: *

            </label>

            <input

                type="text"

                name="scholarship_name"

                id="scholarshipName"

                required

            >

            <br><br>

            <label for="email_id">

                Email ID:

            </label>

            <input

                type="email"

                name="email_id"

                id="email_id"

            >

            <br><br>

            <label for="10th_marks">

                10th Marks: *

            </label>

            <input

                type="number"

                name="10th_marks"

                id="10th_marks"

                required

            >

            <br><br>

            <label for="12th_marks">

                12th Marks: *

            </label>

            <input

                type="number"

                name="12th_marks"

                id="12th_marks"

                required

            >

            <br><br>

            <p>

                Select Category:

                <select

                    name="category"

                    id="category"

                    required

                >

                    <option value="">

                        --Select Category--

                    </option>

                    <option value="general">

                        General

                    </option>

                    <option value="open">

                        Open

                    </option>

                    <option value="sebc">

                        SEBC

                    </option>

                    <option value="sc/st">

                        SC/ST

                    </option>

                    <option value="other">

                        Other

                    </option>

                </select>

            </p>

        </form>

        <!-- Other Details -->

        <h2>Other Details</h2>

        <p>

            Students can see other important details from this dashboard.

        </p>

    </div>

    <br><br><br>

    <footer>

        @2026 Student Hub Portal

    </footer>

    <script src="../JS/javascript.js"></script>

</body>

</html>
