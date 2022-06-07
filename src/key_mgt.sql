-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 10, 2021 at 10:14 AM
-- Server version: 10.3.16-MariaDB
-- PHP Version: 7.3.7

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mern_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `customers`
--

CREATE TABLE `customers` (
  `id` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `mobile` bigint(20) DEFAULT NULL,
  `product_id` varchar(255) DEFAULT NULL,
  `vechicle_model` varchar(255) DEFAULT NULL,
  `vechicle_number` varchar(255) DEFAULT NULL,
  `amount` decimal(6,2) DEFAULT NULL,
  `key_number` varchar(155)  DEFAULT NULL,
  `bank_name` varchar(155) DEFAULT NULL,
  `product_creation_loc` varchar(255) DEFAULT NULL,
  `essential_doc` varchar(255) DEFAULT NULL,
  `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(11) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `email` varchar(100) NOT NULL,
   `createdAt` date DEFAULT NULL,
  `updatedAt` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;


--
-- Dumping data for table `customers`
--

INSERT INTO `customers` (`id`, `name`, `address`,`mobile`, `product_id`, `productCreationLoc`,`createdAt`, `updatedAt`) VALUES
(1, 'Customer 1', "Bilekahalli", 1234567890, '121','Shop','2021-08-09', '2021-08-09'),
(2, 'Customer 2',  "Ranka", 1234567890,'121', 'Shop', '2021-08-09', '2021-08-09'),
(3, 'Customer 3', "BTM", 1234567890,'121', 'Shop','2021-08-09', '2021-08-09'),
(4, 'Customer 4', "ITPL",1234567890,'121', 'Shop',  '2021-08-09','2021-08-09'),
(5, 'Customer 5', "Whitefield", 1234567890,'121', 'Shop', '2021-08-09','2021-08-09');

--
-- Dumping data for table `users`
--
INSERT INTO `users` (`id`, `username`, `password`, `email`,`createdAt`, `updatedAt`) VALUES (1, 'rishabh', 'rishabh123', 'test@gmail.com','2022-01-01', '2022-02-02');
INSERT INTO `users` (`id`, `username`, `password`, `email`,`createdAt`, `updatedAt`) VALUES (2, 'prakhar', 'prakhar123', 'test@gmail.com','2022-01-01', '2022-02-02');


--
-- Indexes for dumped tables
--

--
-- Indexes for table `customers`
--
ALTER TABLE `customers`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);
--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `customers`
--
ALTER TABLE `customers`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
