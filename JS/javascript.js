// step 1 to learn how to print messge when page relod or refresh
alert("If you refresh then You may lost your data: ");
console.log("Hello form console: ");

// step 2 on home page toggle change mode  button 
let themebtn = document.querySelector("#themeBtn");
if (themebtn) {
    let current = "light";
    themebtn.addEventListener("click", () => {
        if (current === "light") {
            current = "dark";
            document.querySelector("body").classList.add("dark");
            document.querySelector("body").classList.remove("light");
        }
        else {
            current = "light";
            document.querySelector("body").classList.add("light");
            document.querySelector("body").classList.remove("dark");
        }
    });
}

// step 3 on login page check validation
//alert("Hi");
let loginbutton = document.querySelector("#button_login");

if (loginbutton) {
    let username_login = document.querySelector("#name");
    let password_login = document.querySelector("#password");
    let message_login = document.querySelector("#loginMessage");

    loginbutton.addEventListener("click", () => {
        if (username_login.value == "" || password_login.value == "") {
            message_login.innerHTML = "Please fill all fileds.";
            console.log("User doesn't fill fields: ");
            alert("User doesn't fill fields: ");

        }
        else if (((username_login.value === "student") || (username_login.value === "meet")) && password_login.value === "1234") {
            message_login.innerHTML = "Login Successful.";
            console.log("Login successful");
            alert("Your login is successful.");
        }
        else {
            message_login.innerHTML = "Invalid username or password: ";
            console.log("Invalid name or password: ");
        }
    });

    username_login.addEventListener("blur", () => {
        if (username_login.value === "") {
            username_login.style.backgroundColor = "#ea2222";
            message_login.innerHTML = "Please fill username";
            console.log("User doesn't fill username");
        }
        else {
            username_login.style.backgroundColor = "";
        }
    });

    password_login.addEventListener("blur", () => {
        if (password_login.value === "") {
            password_login.style.backgroundColor = "#ea2222";
            message_login.innerHTML = "Please fill password";
            console.log("User doesn't fill password ");
        }
        //why here else part if it is not there then once background is applied after it can not change so we have else part so after occurence of that event it become normal 

        else {

            password_login.style.backgroundColor = "";
            message_login.innerHTML = "";

        }
    });

 // add regex for validation of password of user practical 5 
let password = document.querySelector("#password");
let button = document.querySelector("#button_login");

let passwordPattern = /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/;

button.addEventListener("click", function() {

    if (passwordPattern.test(password.value)) {
        alert("Password is right");
    }
    else {
        alert("Password is wrong");
    }
});
}

// step 4 on Assignment Page  check submit the assignment or not?
let assignmentBtn =
    document.querySelector("#assignmentBtn");

if (assignmentBtn) {

    assignmentBtn.addEventListener("click", () => {

        let assignment =
            document.querySelector("#assignmentSelect").value;

        let message =
            document.querySelector("#assignmentMessage");

        if (assignment === "") {

            message.innerHTML =
                "Please select an assignment.";
            console.log("Assignement not selected.");
        }
        else {

            message.innerHTML =
                assignment + " submitted successfully!";

            console.log("Assignment submitted:", assignment);

        }

    });

}
// Step 5 for Attendence Page


// step6 for contact page

// step7 for  course page  ==>currently not work 
/*let courseSelect = document.querySelector("#courseSelect");
if (courseSelect) {
    courseSelect.addEventListener("change", () => {
        let message = document.querySelector("#courseMessage");
        if (courseSelect.value === "") {
            message.innerHTML = "Please Select a Course";
            console.log("Course not selected");
        }
        else {
            message.innerHTML = "You selected " + courseSelect.value;
            console.log("Course select: ", courseSelect.value);
        }
    });
}*/


// step 8 for dashboard check form leave 

let leaveBtn = document.querySelector("#button_dashboard");
if (leaveBtn) {

    leaveBtn.addEventListener("click", () => {
        let leavetype = document.querySelector("#leave_type").value;
        let leavemessage = document.querySelector("#leaveMessage");

        if (leavetype === "") {
            leavemessage.innerHTML = "Please select the leave type: ";
            console.log("User not select any type of leave");
        }
        else {
            leaveBtn.innerHTML = "You have selected : " + leavetype;
            console.log("User selected leave type is: ", leavetype);
        }
    });

}

// step 9 for profile

let changeNameBtn =
    document.querySelector("#changeNameBtn");

if (changeNameBtn) {

    changeNameBtn.addEventListener("click", () => {

        let newName =
            document.querySelector("#newName").value;

        let studentName =
            document.querySelector("#studentName");

        let message =
            document.querySelector("#profileMessage");

        if (newName === "") {

            message.innerHTML =
                "Please enter your name.";

        }
        else {

            studentName.innerHTML = "Student Full Name: "+newName;

            message.innerHTML =
                "Name updated successfully.";

            console.log("Name changed to:", newName);

        }
        if (studentName) {

            studentName.addEventListener("mouseover", () => {
                studentName.style.color = "blue";
            });

        }
    });

}
// step 10 for register same as login page validation
let registerbutton = document.querySelector("#button_register");

if (registerbutton) {
    let username_register = document.querySelector("#name");
    let password_register = document.querySelector("#password");
    let message_register = document.querySelector("#registerMessage");
    let email_register = document.querySelector("#emailid");

    registerbutton.addEventListener("click", () => {
        if (username_register.value == "" || password_register.value == "") {
            message_register.innerHTML = "Please fill all fileds.";
            console.log("User doesn't fill fields: ");
            alert("User doesn't fill fields: ");

        }
        else if (((username_register.value === "student") || (username_register.value === "meet")) && password_register.value === "1234") {
            message_register.innerHTML = "Registration Successful.";
            console.log("Registration successful");
            alert("Your registration is successful.");
        }
        else {
            message_register.innerHTML = "Invalid username or password: ";
            console.log("Invalid name or password: ");
        }
    });

    username_register.addEventListener("blur", () => {
        if (username_register.value === "") {
            username_register.style.backgroundColor = "#ea2222";
            message_register.innerHTML = "Please fill username";
            console.log("User doesn't fill username");
        }
        else {
            username_register.style.backgroundColor = "";
        }
    });

    password_register.addEventListener("blur", () => {
        if (password_register.value === "") {
            password_register.style.backgroundColor = "#ea2222";
            message_register.innerHTML = "Please fill password";
            console.log("User doesn't fill password ");
        }
        else {
            password_register.style.backgroundColor = "";
            message_register.innerHTML = "";
        }
    });

    // for practical 5 add regex for validation of password of user and email id verification is here

    let registerPasswordPattern = /^(?=.*[A-Za-z])(?=.*[0-9]).{8,}$/;
    let registerEmailPattern = /^[A-Za-z0-9]+@[A-Za-z0-9]+\.[A-Za-z]{2,6}$/;

    registerbutton.addEventListener("click", function() {

        if (!registerPasswordPattern.test(password_register.value)) {
            alert("Password is wrong");
        }
        else {
            alert("Password is right");
        }

        if (!registerEmailPattern.test(email_register.value)) {
            alert("Email is wrong");
        }
        else {
            alert("Email is right");
        }

    });
}
// step 11 for result page ==> accroding to result we print message by using js

// let resultBtn = document.querySelector("#resultBtn");
// if (resultBtn) {
//     resultBtn.addEventListener("click", () => {
//         let resultelement = document.querySelector("#resultelement");
//         let message = document.querySelector("#resultMessage");

//         if (resultelement >= 9) {
//             message.innerHTML = "Excellenet result";
//         }
//         else if (resultelement > 8) {
//             message.innerHTML = "very Good Result";
//         }
//         else if (resultelement > 7) {
//             message.innerHTML = "Good Result"
//         }
//         else {
//             message.innerHTML = "keep improving";
//         }
//     });
// }

//JSON Applying start here

// ======================================================
// STUDENT HUB PORTAL
// JSON + FileReader
// Works without XAMPP, GitHub or Local Server
// ======================================================


// ======================================================
// COMMON FUNCTION TO READ JSON FILE
// ======================================================

function readJSONFile(file, successFunction, errorFunction) {

    if (!file) {
        if (errorFunction) {
            errorFunction("Please select a JSON file.");
        }
        return;
    }

    let reader = new FileReader();

    reader.onload = function (event) {

        try {

            let data = JSON.parse(event.target.result);

            successFunction(data);

        } catch (error) {

            if (errorFunction) {
                errorFunction("Invalid JSON file.");
            }

            console.log(error);
        }
    };

    reader.onerror = function () {

        if (errorFunction) {
            errorFunction("Unable to read JSON file.");
        }
    };

    reader.readAsText(file);
}


// ======================================================
// RESULT
// ======================================================

let resultData = [];
let filteredResultData = [];
let resultPage = 1;
let resultPerPage = 5;


function loadResults() {

    let fileInput = document.getElementById("resultJSONFile");
    let loading = document.getElementById("resultLoading");
    let error = document.getElementById("resultError");

    if (!fileInput) {
        return;
    }

    let file = fileInput.files[0];

    if (!file) {

        error.innerHTML = "Please select results.json file.";

        return;
    }

    loading.style.display = "block";
    error.innerHTML = "";

    readJSONFile(
        file,

        function (data) {

            if (Array.isArray(data)) {

                resultData = data;

            } else if (data.results) {

                resultData = data.results;

            } else if (data.subjects) {

                resultData = data.subjects;

            } else {

                resultData = [];
            }

            filteredResultData = resultData;

            resultPage = 1;

            loading.style.display = "none";

            displayResults();

        },

        function (message) {

            loading.style.display = "none";

            error.innerHTML = message;
        }
    );
}


function displayResults() {

    let table = document.getElementById("resultTable");

    if (!table) {
        return;
    }

    let start = (resultPage - 1) * resultPerPage;

    let end = start + resultPerPage;

    let pageData = filteredResultData.slice(start, end);

    table.innerHTML = "";

    pageData.forEach(function (result) {

        table.innerHTML +=
            "<tr>" +
            "<td>" + (result.subject || "") + "</td>" +
            "<td>" + (result.marks || "") + "</td>" +
            "<td>" + (result.grade || "") + "</td>" +
            "</tr>";

    });


    let pageNumber = document.getElementById("resultPage");

    if (pageNumber) {
        pageNumber.innerText = resultPage;
    }


    let totalPages =
        Math.ceil(filteredResultData.length / resultPerPage);

    let previousButton =
        document.getElementById("previousResult");

    let nextButton =
        document.getElementById("nextResult");


    if (previousButton) {

        previousButton.disabled =
            resultPage <= 1;
    }


    if (nextButton) {

        nextButton.disabled =
            resultPage >= totalPages;
    }
}


// Result Search

let resultSearch = document.getElementById("resultSearch");

if (resultSearch) {

    resultSearch.addEventListener("input", function () {

        let searchText =
            this.value.toLowerCase();

        filteredResultData =
            resultData.filter(function (result) {

                return (result.subject || "")
                    .toLowerCase()
                    .includes(searchText);

            });

        resultPage = 1;

        displayResults();

    });
}


// Result Sort

let resultSort = document.getElementById("resultSort");

if (resultSort) {

    resultSort.addEventListener("change", function () {

        let value = this.value;

        if (value === "name") {

            filteredResultData.sort(function (a, b) {

                return (a.subject || "")
                    .localeCompare(b.subject || "");

            });

        }

        else if (value === "marks") {

            filteredResultData.sort(function (a, b) {

                return Number(b.marks) - Number(a.marks);

            });

        }

        else {

            filteredResultData = resultData.slice();

        }

        resultPage = 1;

        displayResults();

    });
}


// Previous Result

let previousResult =
    document.getElementById("previousResult");

if (previousResult) {

    previousResult.addEventListener("click", function () {

        if (resultPage > 1) {

            resultPage--;

            displayResults();
        }

    });
}


// Next Result

let nextResult =
    document.getElementById("nextResult");

if (nextResult) {

    nextResult.addEventListener("click", function () {

        let totalPages =
            Math.ceil(
                filteredResultData.length /
                resultPerPage
            );

        if (resultPage < totalPages) {

            resultPage++;

            displayResults();
        }

    });
}


// ======================================================
// STUDENT PROFILE
// ======================================================

function loadStudentProfile() {

    let fileInput =
        document.getElementById("studentJSONFile");

    let profile =
        document.getElementById("studentProfile");

    let loading =
        document.getElementById("studentLoading");

    let error =
        document.getElementById("studentError");


    if (!fileInput || !profile) {
        return;
    }


    let file = fileInput.files[0];

    if (!file) {

        error.innerHTML =
            "Please select students.json file.";

        return;
    }


    loading.style.display = "block";

    error.innerHTML = "";


    readJSONFile(

        file,

        function (data) {

            let student;

            if (Array.isArray(data)) {

                student = data[0];

            } else if (data.students) {

                student = data.students[0];

            } else {

                student = data;
            }


            if (!student) {

                loading.style.display = "none";

                error.innerHTML =
                    "Student data not found.";

                return;
            }


            loading.style.display = "none";


            profile.innerHTML =

                "<h2>Student Profile</h2>" +

                "<p>Student Full Name: " +
                (student.name || "") +
                "</p>" +

                "<p>Student Id: " +
                (student.id || "") +
                "</p>" +

                "<p>Student Department: " +
                (student.course || student.department || "") +
                "</p>" +

                "<p>Email ID: " +
                (student.email || "") +
                "</p>" +

                "<p>Student Contact No: " +
                (student.contact || student.phone || "") +
                "</p>" +

                "<p>City: " +
                (student.city || "") +
                "</p>" +

                "<p>Semester: " +
                (student.semester || "") +
                "</p>";

        },

        function (message) {

            loading.style.display = "none";

            error.innerHTML = message;
        }
    );
}


// ======================================================
// STUDENT LIST
// ======================================================

let studentsData = [];


function loadStudents() {

    let fileInput =
        document.getElementById("studentListJSONFile");

    let studentList =
        document.getElementById("studentList");

    let loading =
        document.getElementById("studentListLoading");

    let error =
        document.getElementById("studentListError");


    if (!fileInput || !studentList) {
        return;
    }


    let file = fileInput.files[0];


    if (!file) {

        error.innerHTML =
            "Please select students.json file.";

        return;
    }


    loading.style.display = "block";

    error.innerHTML = "";


    readJSONFile(

        file,

        function (data) {

            if (Array.isArray(data)) {

                studentsData = data;

            } else if (data.students) {

                studentsData = data.students;

            } else {

                studentsData = [];
            }


            loading.style.display = "none";

            displayStudents(studentsData);

        },

        function (message) {

            loading.style.display = "none";

            error.innerHTML = message;
        }
    );
}


function displayStudents(data) {

    let studentList =
        document.getElementById("studentList");

    if (!studentList) {
        return;
    }


    studentList.innerHTML = "";


    data.forEach(function (student) {

        studentList.innerHTML +=

            "<div class='student-card'>" +

            "<h3>" +
            (student.name || "") +
            "</h3>" +

            "<p>Course: " +
            (student.course || "") +
            "</p>" +

            "<p>Semester: " +
            (student.semester || "") +
            "</p>" +

            "<p>City: " +
            (student.city || "") +
            "</p>" +

            "</div>";

    });
}


// Student Search

let studentSearch =
    document.getElementById("studentSearch");

if (studentSearch) {

    studentSearch.addEventListener("input", function () {

        let searchText =
            this.value.toLowerCase();

        let filteredStudents =
            studentsData.filter(function (student) {

                return (student.name || "")
                    .toLowerCase()
                    .includes(searchText);

            });

        displayStudents(filteredStudents);

    });
}


// Student Course Filter

let studentCourse =
    document.getElementById("studentCourse");

if (studentCourse) {

    studentCourse.addEventListener("change", function () {

        let selectedCourse =
            this.value;


        if (selectedCourse === "all") {

            displayStudents(studentsData);

            return;
        }


        let filteredStudents =
            studentsData.filter(function (student) {

                return student.course === selectedCourse;

            });


        displayStudents(filteredStudents);

    });
}


// ======================================================
// EVENTS
// ======================================================

let eventsData = [];


function loadEvents() {

    let fileInput =
        document.getElementById("eventJSONFile");

    let eventList =
        document.getElementById("eventList");

    let loading =
        document.getElementById("eventLoading");

    let error =
        document.getElementById("eventError");


    if (!fileInput || !eventList) {
        return;
    }


    let file = fileInput.files[0];


    if (!file) {

        error.innerHTML =
            "Please select events.json file.";

        return;
    }


    loading.style.display = "block";

    error.innerHTML = "";


    readJSONFile(

        file,

        function (data) {

            if (Array.isArray(data)) {

                eventsData = data;

            } else if (data.events) {

                eventsData = data.events;

            } else {

                eventsData = [];
            }


            loading.style.display = "none";

            displayEvents(eventsData);

        },

        function (message) {

            loading.style.display = "none";

            error.innerHTML = message;
        }
    );
}


function displayEvents(data) {

    let eventList =
        document.getElementById("eventList");


    if (!eventList) {
        return;
    }


    eventList.innerHTML = "";


    data.forEach(function (event) {

        eventList.innerHTML +=

            "<div class='event-card'>" +

            "<h3>" +
            (event.title || event.name || "") +
            "</h3>" +

            "<p>Category: " +
            (event.category || "") +
            "</p>" +

            "<p>Date: " +
            (event.date || "") +
            "</p>" +

            "<p>Location: " +
            (event.location || "") +
            "</p>" +

            "</div>";

    });
}


// Event Search

let eventSearch =
    document.getElementById("eventSearch");

if (eventSearch) {

    eventSearch.addEventListener("input", function () {

        let searchText =
            this.value.toLowerCase();


        let filteredEvents =
            eventsData.filter(function (event) {

                let title =
                    event.title ||
                    event.name ||
                    "";

                return title
                    .toLowerCase()
                    .includes(searchText);

            });


        displayEvents(filteredEvents);

    });
}


// Event Category Filter

let eventCategory =
    document.getElementById("eventCategory");

if (eventCategory) {

    eventCategory.addEventListener("change", function () {

        let selectedCategory =
            this.value;


        if (selectedCategory === "all") {

            displayEvents(eventsData);

            return;
        }


        let filteredEvents =
            eventsData.filter(function (event) {

                return event.category ===
                    selectedCategory;

            });


        displayEvents(filteredEvents);

    });
}


// ======================================================
// FAQ
// ======================================================

let faqData = [];


function loadFAQs() {

    let fileInput =
        document.getElementById("faqJSONFile");

    let faqList =
        document.getElementById("faqList");

    let loading =
        document.getElementById("faqLoading");

    let error =
        document.getElementById("faqError");


    if (!fileInput || !faqList) {
        return;
    }


    let file = fileInput.files[0];


    if (!file) {

        error.innerHTML =
            "Please select faqs.json file.";

        return;
    }


    loading.style.display = "block";

    error.innerHTML = "";


    readJSONFile(

        file,

        function (data) {

            if (Array.isArray(data)) {

                faqData = data;

            } else if (data.faqs) {

                faqData = data.faqs;

            } else {

                faqData = [];
            }


            loading.style.display = "none";

            displayFAQs(faqData);

        },

        function (message) {

            loading.style.display = "none";

            error.innerHTML = message;
        }
    );
}


function displayFAQs(data) {

    let faqList =
        document.getElementById("faqList");


    if (!faqList) {
        return;
    }


    faqList.innerHTML = "";


    data.forEach(function (faq) {

        faqList.innerHTML +=

            "<div class='faq'>" +

            "<h3>" +
            (faq.question || "") +
            "</h3>" +

            "<p>" +
            (faq.answer || "") +
            "</p>" +

            "</div>";

    });
}


// FAQ Search

let faqSearch =
    document.getElementById("faqSearch");

if (faqSearch) {

    faqSearch.addEventListener("input", function () {

        let searchText =
            this.value.toLowerCase();


        let filteredFAQs =
            faqData.filter(function (faq) {

                return (faq.question || "")
                    .toLowerCase()
                    .includes(searchText);

            });


        displayFAQs(filteredFAQs);

    });
}