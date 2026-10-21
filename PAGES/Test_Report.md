# Student Hub Portal — Test Report

## 1. Objective
To test the main features of the Student Hub Portal after integrating the website pages, PHP backend, and MySQL database.

## 2. Test Environment
- Operating System: Windows
- Local Server: XAMPP / Apache
- Backend: PHP
- Database: MySQL
- Browser: Web browser

## 3. Test Cases

| No. | Test Case | Expected Result | Actual Result | Status |
|---|---|---|---|---|
| 1 | Open homepage | Homepage loads | Homepage loaded | Pass |
| 2 | Open website pages | Pages open correctly | Pages opened normally | Pass |
| 3 | Register a student | Student details are saved | Record saved in database | Pass |
| 4 | Login with correct credentials | Login succeeds | Login succeeded | Pass |
| 5 | Login with incorrect password | Login is rejected | Login rejected | Pass |
| 6 | Submit empty login fields | Login is prevented | Empty-field validation worked | Pass |
| 7 | Student access to admin page | Access is denied | Not yet verified | Pending |
| 8 | Logout and reopen dashboard | Access is denied | Not yet verified | Pending |
| 9 | Responsive layout | Layout works on smaller screens | Not yet verified | Pending |
| 10 | Fetch/AJAX functionality | Data loads and displays correctly | Not yet verified | Pending |

## 4. Conclusion
The homepage, page navigation, registration, database storage, and basic login validation were tested successfully. Remaining tests must be completed before the project can be considered fully tested.
