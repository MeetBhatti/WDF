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