-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 20, 2026 at 01:58 PM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `studenthub_portal`
--

-- --------------------------------------------------------

--
-- Table structure for table `events`
--

CREATE TABLE `events` (
  `event_id` int(11) NOT NULL,
  `event_name` varchar(100) NOT NULL,
  `event_date` date NOT NULL,
  `description` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `registrations`
--

CREATE TABLE `registrations` (
  `registration_id` int(11) NOT NULL,
  `student_id` int(11) NOT NULL,
  `event_id` int(11) NOT NULL,
  `registration_date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `students`
--

CREATE TABLE `students` (
  `student_id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
  `contact` varchar(20) NOT NULL,
  `address` text NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `dateofbirth` date NOT NULL,
  `gender` varchar(20) NOT NULL,
  `department` varchar(100) NOT NULL,
  `role` enum('student','admin') NOT NULL DEFAULT 'student'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students`
--

INSERT INTO `students` (`student_id`, `name`, `password`, `email`, `contact`, `address`, `pincode`, `dateofbirth`, `gender`, `department`, `role`) VALUES
(1, 'Kinjal', '$2y$10$96Y3gVhkAVPGipIA8i.Wg.hf12LudKDcrQMHZnr43b8sDlUhPLCs2', 'kinju@7523gmail.com', '8866750260', 'Gulabnagar , Jamnagar , Gujarat', '361007', '2003-05-07', 'female', 'Computer_Engineering', 'student'),
(2, 'Meet', '$2y$10$66mXBaJcTWcRBXwy0m6KNObUGsZP9KiUVTMRl7w0ADNU8uSE6OjPm', 'meetbhatti411@gmail.com', '8849254640', 'Gulabnagar,Jamnagar,Gujarat', '361007', '2007-11-04', 'male', 'Computer_Engineering', 'admin'),
(3, 'Yash Der', '$2y$10$/XPI.IYq/5FH/jw6.pxvuOueZOxFpaWZBsr1QGkiePYNFq0/UpKq.', 'yash@123gmail.com', '9988776655', 'America', '361007', '2007-11-04', 'male', 'Information_Technology', 'student'),
(5, 'Harshit Sodha', '$2y$10$/MKuSnSQaAqbKY/vilsZ6ee/lxYHziAiRsG/x70eHlRr1XQ7A6g.C', 'harshitsodha@123gmail.com', '8877996655', 'Canada,', '654987', '2026-10-02', 'male', 'Civil_Engineering', 'student'),
(6, 'Yug Patel', '$2y$10$AOhhEyNYXK5WVmS/3dBf4uUD2Y3EHhijp1Vm7COpANUkeD9PDJw9C', 'yugpatel@123gmail.com', '8877445599', 'Morbi Gujarat', '123987', '2006-05-08', 'male', 'Computer_Science_and_Engineering', 'student'),
(7, 'Daksh Patel', '$2y$10$otI7INGVw7BdtHl0zfm5qeSQJtsfLOOtV2fU3JrjyL7Ea3OORmvG2', 'daksh@123gmail.com', '7788445566', 'Junagadh , Gujarat', '365100', '2007-06-11', 'male', 'Information_Technology', 'student'),
(8, 'Jay Bhatti', '$2y$10$MGD9zOhjkkh15f2BRA2xFeaHynw/ctATqylgbBNymDM/qsRJQhpDy', 'jaybhatti@123gmail.com', '9988785636', 'China', '456789', '2000-01-01', 'male', 'Computer_Engineering', 'student'),
(9, 'Khushal Bhagat', '$2y$10$71rinIVlJ1wjbM8avV3JfOhLdIxwdIdptItmPGrS3ia67HMrc/Y1e', 'khushalbhagat@123gmail.com', '8877994466', 'Nepal', '564123', '2006-06-27', 'male', 'Computer_Engineering', 'student'),
(10, 'Vivek Chauhan', '$2y$10$B2hhxwY6b18ZHfef3YwtS./dxE5LkA.JF6tQ5.emP2Ok4.BDmWTuC', 'vivekchauhan@123gmail.com', '9874561323', 'Mahatma Gandhi Aavas Yojna ,Rajkot,Gujarat.', '361004', '2000-10-13', 'male', 'Computer_Science_and_Engineering', 'admin'),
(11, 'Bhayu Bhai', '$2y$10$MBW6FCU4KSroYYiU8fQe8uybSYihRjxLcwj09PzKHEwEBJcYS7RbC', 'bhayubhai@123gmail.com', '8877449955', 'Ahmedabad, Gujarat', '361001', '1996-06-04', 'male', 'Information_Technology', 'student'),
(12, 'Nirav Dabhi', '$2y$10$ZVxxeegVEAFzCxKVhbMFfOqAsw4JG3uPhkDiYYd8FBUsYjuOMsT1G', 'niravdabhi@123gmail.com', '9876541232', 'Jamnagar , France.', '361005', '1845-01-01', 'male', 'Electrical_Engineering', 'student'),
(13, 'Rehan Aasra', '$2y$10$zs.bZl/NBqGkinen66rUcejdcelHtm68NUrb5TbJqyrI3QNMt48Oq', 'rehan@123gmail.com', '9988776611', 'Mumbai, India', '457891', '2026-10-20', 'male', 'Mechanical_Engineering', 'student');

-- --------------------------------------------------------

--
-- Table structure for table `students_pr11`
--

CREATE TABLE `students_pr11` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(120) NOT NULL,
  `course` varchar(80) NOT NULL,
  `contact` varchar(15) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `students_pr11`
--

INSERT INTO `students_pr11` (`id`, `name`, `email`, `course`, `contact`) VALUES
(1, 'Meet Bhatti', 'meet11@example.com', 'Computer Engineering', '9876500001'),
(2, 'Aryan Patel', 'aryan11@example.com', 'Computer Engineering', '9876500002'),
(3, 'Jay Shah', 'jay11@example.com', 'Information Technology', '9876500003'),
(4, 'Riya Patel', 'riya11@example.com', 'Computer Engineering', '9876500004'),
(5, 'Krish Desai', 'krish11@example.com', 'Information Technology', '9876500005'),
(6, 'Neha Shah', 'neha11@example.com', 'Mechanical Engineering', '9876500006'),
(7, 'Rahul Joshi', 'rahul11@example.com', 'Computer Engineering', '9876500007'),
(8, 'Pooja Mehta', 'pooja11@example.com', 'Civil Engineering', '9876500008'),
(9, 'Dev Patel', 'dev11@example.com', 'Information Technology', '9876500009'),
(10, 'Kavya Shah', 'kavya11@example.com', 'Computer Engineering', '9876500010'),
(11, 'Harsh Dave', 'harsh11@example.com', 'Mechanical Engineering', '9876500011'),
(12, 'Nisha Patel', 'nisha11@example.com', 'Civil Engineering', '9876500012'),
(13, 'Aarav Shah', 'aarav11@example.com', 'Computer Engineering', '9876500013'),
(14, 'Mira Desai', 'mira11@example.com', 'Information Technology', '9876500014'),
(15, 'Dhruv Joshi', 'dhruv11@example.com', 'Computer Engineering', '9876500015'),
(16, 'Isha Mehta', 'isha11@example.com', 'Civil Engineering', '9876500016'),
(17, 'Yash Patel', 'yash11@example.com', 'Mechanical Engineering', '9876500017'),
(18, 'Anaya Shah', 'anaya11@example.com', 'Information Technology', '9876500018'),
(19, 'Parth Dave', 'parth11@example.com', 'Computer Engineering', '9876500019'),
(20, 'Diya Mehta', 'diya11@example.com', 'Civil Engineering', '9876500020');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `events`
--
ALTER TABLE `events`
  ADD PRIMARY KEY (`event_id`);

--
-- Indexes for table `registrations`
--
ALTER TABLE `registrations`
  ADD PRIMARY KEY (`registration_id`),
  ADD KEY `student_id` (`student_id`),
  ADD KEY `event_id` (`event_id`);

--
-- Indexes for table `students`
--
ALTER TABLE `students`
  ADD PRIMARY KEY (`student_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- Indexes for table `students_pr11`
--
ALTER TABLE `students_pr11`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `events`
--
ALTER TABLE `events`
  MODIFY `event_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `registrations`
--
ALTER TABLE `registrations`
  MODIFY `registration_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `students`
--
ALTER TABLE `students`
  MODIFY `student_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT for table `students_pr11`
--
ALTER TABLE `students_pr11`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `registrations`
--
ALTER TABLE `registrations`
  ADD CONSTRAINT `registrations_ibfk_1` FOREIGN KEY (`student_id`) REFERENCES `students` (`student_id`),
  ADD CONSTRAINT `registrations_ibfk_2` FOREIGN KEY (`event_id`) REFERENCES `events` (`event_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
