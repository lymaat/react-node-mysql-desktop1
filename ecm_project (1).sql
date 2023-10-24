-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Oct 24, 2023 at 02:59 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ecm_project`
--

-- --------------------------------------------------------

--
-- Table structure for table `cart`
--

CREATE TABLE `cart` (
  `cart_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(6) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `cart`
--

INSERT INTO `cart` (`cart_id`, `customer_id`, `product_id`, `quantity`, `create_at`) VALUES
(5, 1, 4, 2, '2023-10-07 14:32:37'),
(6, 32, 4, 1, '2023-10-18 14:28:02'),
(7, 1, 29, 1, '2023-10-20 15:40:24'),
(8, 1, 27, 1, '2023-10-20 15:40:30'),
(9, 1, 26, 1, '2023-10-20 15:40:38'),
(10, 1, 25, 1, '2023-10-20 15:40:41'),
(11, 1, 26, 1, '2023-10-20 15:40:44'),
(12, 1, 27, 1, '2023-10-20 15:40:45'),
(13, 1, 29, 1, '2023-10-20 15:40:50'),
(14, 1, 27, 1, '2023-10-20 15:42:00'),
(15, 1, 27, 1, '2023-10-20 15:42:05'),
(16, 1, 3, 1, '2023-10-20 15:43:38'),
(17, 1, 3, 1, '2023-10-20 15:43:41'),
(18, 1, 3, 1, '2023-10-20 15:43:42'),
(19, 35, 1, 3, '2023-10-22 14:08:32');

-- --------------------------------------------------------

--
-- Table structure for table `category`
--

CREATE TABLE `category` (
  `category_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text DEFAULT NULL,
  `parent_id` int(11) DEFAULT 0,
  `status` tinyint(4) DEFAULT 1,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `category`
--

INSERT INTO `category` (`category_id`, `name`, `description`, `parent_id`, `status`, `create_at`) VALUES
(25, 'Dior', 'sauvage', NULL, 1, '2023-09-15 15:19:51'),
(26, 'Chanel', 'Blue De', NULL, 1, '2023-09-16 15:40:19'),
(29, 'Versace', '', NULL, 1, '2023-10-01 03:01:06'),
(30, 'K01', '100ml', NULL, 1, '2023-10-01 03:17:31');

-- --------------------------------------------------------

--
-- Table structure for table `customer`
--

CREATE TABLE `customer` (
  `customer_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL DEFAULT 6,
  `firstname` varchar(120) NOT NULL,
  `lastname` varchar(120) NOT NULL,
  `gender_id` tinyint(1) NOT NULL,
  `province_id` varchar(120) NOT NULL,
  `address_des` text NOT NULL,
  `username` varchar(120) NOT NULL,
  `password` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `customer`
--

INSERT INTO `customer` (`customer_id`, `role_id`, `firstname`, `lastname`, `gender_id`, `province_id`, `address_des`, `username`, `password`, `is_active`, `create_at`) VALUES
(1, 1, 'Mr', 'Bora', 0, '', 'btb street 5', '0966689955', '$2b$10$qOYgndhOOruExMY2tw5Xa.vr99ta1tKVklnLdrSfLvJJw6dP6VJou', 1, '2023-08-14 14:39:29'),
(14, 0, 'Po', 'Boren', 1, '', '', '01299990000', '$2b$10$kEXDEEE8C4Kfh4ySO1ZjBetuLnNqElmL6ugYmDUoL412P0N8Aa...', 0, '2023-08-29 14:24:34'),
(15, 0, 'Po', 'Boren', 1, '', '', '01299990001', '$2b$10$vFTeSREN0oxXv0aT602EgO5b/2mAG2BprYRGQB.vm8RIzc.GI.SOW', 1, '2023-08-29 14:24:47'),
(16, 0, 'Po', 'Boren', 1, '', '', '01299990002', '$2b$10$6iWj5/kSRj0dkGAtNsV9P.leBS.X6hLOdBq3rnj8BrOH.ov07hrJm', 1, '2023-08-29 14:24:53'),
(18, 0, 'Po', 'Boren', 1, '', '', '01299990004', '$2b$10$moXvY0DBZ6Nr.UsIZg5UU.F6he1cLJ4RB.hLcWWJIVmTvdU0wxRO.', 1, '2023-08-29 14:42:41'),
(20, 0, 'tes', 'lastname', 0, '', '', '123', '$2b$10$2pSPb4dpx2V1qFYp7tWUeu6ZYDRGRuKhlL4bR63IZ5koyPFXXwm7m', 1, '2023-10-05 09:02:55'),
(21, 6, 'me', 'me', 1, '', '', 'me', '$2b$10$LTLc8l.5PP/aPITpyZhj8un7j8bm3Zc8AiBFz5Cmk1x9sLC8teaui', 1, '2023-10-05 10:02:08'),
(27, 6, '123', '123', 0, '', '', '11111', '$2b$10$J8DttrK/dIjTVqoemTPVhuJS2UcXUdnSIejIS3UALJ1Eq0aIQO9yy', 1, '2023-10-05 11:45:07'),
(31, 6, 'zz', 'zz', 1, '', '', 'zz', '$2b$10$YHYaPN6SUg2SJKdsUKD6ae7nA3lQ4fHJGOcen/mZBktusmuu.iy4K', 1, '2023-10-17 14:48:40'),
(32, 6, 'tata', 'tata', 1, '', '', 'tata', '$2b$10$zFS6IzBugLTQgSiMl7SgteP6GW2ah/6YrNDwhGVd.SB5p/fEwNt2K', 1, '2023-10-17 15:05:47'),
(33, 6, 'ccc', 'ccc', 1, '', '', 'ccc', '$2b$10$feK73USLHBJdyOxdvWIxu.75dyjg8kaXhh3I2YKcfVosRV3sFRY5q', 1, '2023-10-20 07:30:42'),
(34, 6, 'ara', 'ara', 1, '', '', 'ara', '$2b$10$VK8KhFXkf6bU/ykDLcQNGeWfYsMPT2WZ5lCYCkaIK3kEZZaePIRE2', 1, '2023-10-20 09:11:34'),
(35, 6, 'DA', 'DA', 2, '', '', 'DA', '$2b$10$M1WM7XJRF9.4HdSkXKaCKOTG0WYlVVMm4z5BS5xBLm8NoQ1203iXu', 1, '2023-10-20 09:18:18');

-- --------------------------------------------------------

--
-- Table structure for table `customer_address`
--

CREATE TABLE `customer_address` (
  `customer_address_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `province_id` int(11) NOT NULL,
  `firstname` varchar(120) NOT NULL,
  `lastname` varchar(120) NOT NULL,
  `tel` varchar(18) NOT NULL,
  `address_des` text NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `customer_address`
--

INSERT INTO `customer_address` (`customer_address_id`, `customer_id`, `province_id`, `firstname`, `lastname`, `tel`, `address_des`, `create_at`) VALUES
(1, 1, 1, 'So', 'Bona', '0966689955', '#233, st 333, PP....', '2023-08-14 14:39:29'),
(4, 1, 1, 'Sok', 'BOra', '0968888889', '#123. St 4444, PP...(Work place)', '2023-08-14 15:23:43'),
(7, 1, 1, 'Ly', 'Lina', '012446689', '#22113, st 33, PP....', '2023-08-16 13:03:52'),
(14, 14, 1, 'Po', 'Boren', '01299990000', '#123 , st34, ...', '2023-08-29 14:24:34'),
(15, 15, 1, 'Po', 'Boren', '01299990001', '#123 , st34, ...', '2023-08-29 14:24:47'),
(16, 16, 1, 'Po', 'Boren', '01299990002', '#123 , st34, ...', '2023-08-29 14:24:53'),
(18, 18, 1, 'Po', 'Boren', '01299990004', '#123 , st34, ...', '2023-08-29 14:42:41'),
(20, 20, 1, 'tes', 'lastname', '123', 'address_des', '2023-10-05 09:02:55'),
(21, 21, 4, 'me', 'me', 'me', 'por2,keam,moung ressei ,battambang (010775820)', '2023-10-05 10:02:08'),
(27, 27, 1, '123', '123', '11111', 'address_des', '2023-10-05 11:45:07'),
(31, 31, 1, 'zz', 'zz', 'zz', 'zz', '2023-10-17 14:48:40'),
(32, 32, 2, 'tata', 'tata', 'tata', 'tata', '2023-10-17 15:05:47'),
(33, 33, 1, 'ccc', 'ccc', 'ccc', '1233', '2023-10-20 07:30:42'),
(34, 34, 1, 'ara', 'ara', 'ara', 'ara', '2023-10-20 09:11:34'),
(35, 35, 3, 'DA', 'DA', 'DA', 'DADA', '2023-10-20 09:18:18');

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `employee_id` int(11) NOT NULL,
  `firstname` varchar(120) NOT NULL,
  `lastname` varchar(120) NOT NULL,
  `tel` varchar(16) NOT NULL,
  `email` varchar(120) DEFAULT NULL,
  `base_salary` decimal(6,0) DEFAULT NULL,
  `address` text DEFAULT NULL,
  `province` varchar(120) DEFAULT NULL,
  `country` varchar(120) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT current_timestamp(),
  `password` varchar(255) DEFAULT NULL,
  `role_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `employee`
--

INSERT INTO `employee` (`employee_id`, `firstname`, `lastname`, `tel`, `email`, `base_salary`, `address`, `province`, `country`, `create_at`, `password`, `role_id`) VALUES
(1, 'Mr', 'Admin', '0998887777', 'dara@gmail.com', 1300, NULL, 'Battam Bong', NULL, '2023-07-12 15:08:35', '$2b$10$2mot4ES3OsUj82JWZTyVR.eCLP22V3v9PbbUhlu8WFyqYA6RLrhnW', 1),
(26, 'nana', 'nana', '123', 'mama', 2, NULL, 'mama', NULL, '2023-10-01 16:25:51', '$2b$10$FBBT1KzR0W/740Pc7Mb93.4I9lLJ6djGaVl1eVJ9do/H9JFvyKRY2', 5),
(27, 'mrr', 'admin2', '010775820', 'kaka@gmail.com', 1002, NULL, '2', NULL, '2023-10-02 04:28:49', '$2b$10$/7R0Z1KdKm8NOfWIU/ZEm.cNaoqsAYbpP6jSjukB4RG2pfUSwXQMa', 1),
(31, 'te', 'te', '12', NULL, 100, NULL, NULL, NULL, '2023-10-04 09:42:12', '$2b$10$iG.89X1HFi4uC.6nO3gL4.1BCo7g.3nOPO0CUT5Xp5VRy2Qb4I.Wy', NULL),
(32, 'LY', 'AT', '11', NULL, 11, NULL, 'Cambodia', NULL, '2023-10-04 10:17:03', '$2b$10$TwajQkuGIqlFHjpY2/zV4ugxvPFD5WBU1Tq7Hb.3/C1gZKrgAdwxO', 4),
(33, 'fdasf', 'asdfa', 'asdf', NULL, 0, NULL, NULL, NULL, '2023-10-04 10:17:19', '$2b$10$nqNVKZ.m0Zr9/nOGIR6ewOXY8fjjztdzbhP3MLU4GqfrRj/OMgTOS', NULL),
(34, 'tit', 'tit', '12333', 'kinnakpnhompenhgalaxy@gmail.com', 100, NULL, 'Cambodia', NULL, '2023-10-04 10:26:42', '$2b$10$KTRus.WuvIfW1IDcFGgS2.yeXL/MWcCZ3phFlNpagjl5N2siDVPN2', 7),
(35, 'cc', 'cc', '3213123', '123', 123, NULL, '123', NULL, '2023-10-20 07:29:23', '$2b$10$2ZdSgniz3u7z069C6O4ZreiNSQ9kNF1Sc1Ar8QttUFBP5yTUnRLNm', 1),
(36, 'aa', 'aa', '123123', '23', 123, NULL, '123', NULL, '2023-10-20 07:30:01', '$2b$10$XZ5QVXkkPYsfsjStZtH/9u6Oe9FIZxmL1ILj6HlYTwjE0Y33D3z3y', 2);

-- --------------------------------------------------------

--
-- Table structure for table `gender`
--

CREATE TABLE `gender` (
  `gender_id` int(11) NOT NULL,
  `name` varchar(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `gender`
--

INSERT INTO `gender` (`gender_id`, `name`) VALUES
(1, 'male'),
(2, 'female');

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `order_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `order_status_id` int(11) NOT NULL,
  `payement_methode_id` int(11) NOT NULL,
  `invoice_no` varchar(120) NOT NULL,
  `order_total` decimal(6,0) NOT NULL,
  `comment` text DEFAULT NULL,
  `firstname` varchar(120) NOT NULL,
  `lastname` varchar(120) NOT NULL,
  `telephone` varchar(18) NOT NULL,
  `address_des` text NOT NULL,
  `status` tinyint(1) DEFAULT 1,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `order`
--

INSERT INTO `order` (`order_id`, `customer_id`, `order_status_id`, `payement_methode_id`, `invoice_no`, `order_total`, `comment`, `firstname`, `lastname`, `telephone`, `address_des`, `status`, `create_at`) VALUES
(4, 1, 3, 1, 'INV0001', 3300, '', 'So', 'Bona', '0966689955', '#233, st 333, PP....', 1, '2023-08-22 15:17:53'),
(5, 2, 0, 1, 'INV0005', 1600, '', 'Sok', 'Join', '0966689956', '#22113, st 33, PP....', 1, '2023-08-22 15:24:10'),
(6, 1, 1, 1, 'INV0006', 3400, '', 'So', 'Bona', '123', '#233asdfasdfaadfsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaf...', 1, '2023-08-22 15:26:44');

-- --------------------------------------------------------

--
-- Table structure for table `order_detail`
--

CREATE TABLE `order_detail` (
  `order_detail_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `quantity` int(11) NOT NULL,
  `price` decimal(6,0) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `order_detail`
--

INSERT INTO `order_detail` (`order_detail_id`, `order_id`, `product_id`, `quantity`, `price`) VALUES
(1, 4, 1, 1, 1600),
(2, 4, 2, 1, 1700),
(3, 5, 1, 1, 1600),
(4, 6, 2, 2, 1700);

-- --------------------------------------------------------

--
-- Table structure for table `order_status`
--

CREATE TABLE `order_status` (
  `order_status_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `message` text NOT NULL,
  `sort_order` int(11) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `order_status`
--

INSERT INTO `order_status` (`order_status_id`, `name`, `message`, `sort_order`) VALUES
(1, 'Pending', ' Your order has been placed successfully!.', 1),
(2, 'Packed', 'Your order has been packed.', 2),
(3, 'Shipped', 'Your order has been shipped!', 3),
(4, 'Delivered', 'Your order is complete.', 4),
(5, 'Canceled', 'order has been canceled.', 5),
(6, 'Store pick up', 'Your order is ready for store pickup!', 6),
(7, 'Phone denied', 'Denied Phone denied.', 7),
(8, 'Cancel', 'Your  has been Canceled.', 8);

-- --------------------------------------------------------

--
-- Table structure for table `payement_methode`
--

CREATE TABLE `payement_methode` (
  `payement_methode_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `code` varchar(120) NOT NULL,
  `is_active` tinyint(1) DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `payement_methode`
--

INSERT INTO `payement_methode` (`payement_methode_id`, `name`, `code`, `is_active`) VALUES
(1, 'Cash On Delivery', 'cod', 1),
(2, 'ABA Bank', 'aba', 1),
(3, 'ACLEDA Bank', 'ac', 1),
(4, 'Wing', 'wing', 1),
(5, 'Chip Mong', 'chm', 1),
(6, 'True Money ', 'trm', 1);

-- --------------------------------------------------------

--
-- Table structure for table `permission`
--

CREATE TABLE `permission` (
  `permission_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `code` varchar(120) NOT NULL,
  `group` varchar(120) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `permission`
--

INSERT INTO `permission` (`permission_id`, `name`, `code`, `group`) VALUES
(1, 'Read', 'product.Read', 'product'),
(2, 'Create', 'product.Create', 'product'),
(3, 'Update', 'product.Update', 'product'),
(4, 'Delete', 'product.Delete', 'product'),
(5, 'Read', 'order.Read', 'order'),
(6, 'Create', 'order.Create', 'order'),
(7, 'Update', 'order.Update', 'order'),
(8, 'Delete', 'order.Delete', 'order'),
(9, 'Read', 'customer.Read', 'customer'),
(10, 'Create', 'customer.Create', 'customer'),
(11, 'Update', 'customer.Update', 'customer'),
(12, 'Delete', 'customer.Delete', 'customer'),
(13, 'Read', 'category.Read', 'category'),
(14, 'Create', 'category.Create', 'category'),
(15, 'Update', 'category.Update', 'category'),
(16, 'Delete', 'category.Delete', 'category'),
(17, 'Read', 'employee.Read', 'employee'),
(18, 'Create', 'employee.Create', 'employee'),
(19, 'Update', 'employee.Update', 'employee'),
(20, 'Delete', 'employee.Delete', 'employee');

-- --------------------------------------------------------

--
-- Table structure for table `product`
--

CREATE TABLE `product` (
  `product_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `barcode` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `quantity` int(6) NOT NULL,
  `price` decimal(6,0) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `create_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `product`
--

INSERT INTO `product` (`product_id`, `category_id`, `barcode`, `name`, `quantity`, `price`, `image`, `description`, `is_active`, `create_at`, `create_by`) VALUES
(4, 25, 'P004', 'Dior Sauvage', 1, 120, NULL, NULL, 1, '2023-09-15 15:22:26', NULL),
(11, 30, 'P010', 'K01 test', 0, 100, 'ec55aec468cca3748c7dc566592a453a', 'null', 0, '2023-10-01 03:18:03', NULL),
(12, 25, '1', '1', 0, 1, '53418a68bdd7baed738f6df0dea6385b', '212', 1, '2023-10-06 03:18:33', NULL),
(13, 26, 'P009', 'a', 114, 111, '32e83931c1b4ab9cff0de7980b316f53', 'undefined', 1, '2023-10-06 04:05:22', NULL),
(15, 29, 'test', 'daf', 0, 120, 'c61dd87f9555749cb095d647e4e5357f', 'undefined', 1, '2023-10-06 04:21:03', NULL),
(16, 26, 'aa', 'aa', 0, 12, '7632dcfc7845ac586e1318b628142462', 'undefined', 1, '2023-10-06 04:25:19', NULL),
(19, 30, 'P010', 'daf', 0, 120, 'e190168982060591e416b91e4d910e08', 'undefined', 1, '2023-10-06 04:55:28', NULL),
(20, 30, 'aaaa', 'aaaa', 0, 123, '5785bacb0eca1a143ec7585fea1ff07b', 'undefined', 1, '2023-10-06 04:58:44', NULL),
(22, 30, 'P011', '123', 0, 123, 'f1ae5f7d5be841672a12e4847a755bc8', 'undefined', 0, '2023-10-06 05:00:15', NULL),
(23, 26, 'test', 'test', 3, 100, '45a64020eabd1d29ec8cc4606518e136', 'undefined', 1, '2023-10-06 05:14:42', NULL),
(24, 26, 'P005', 'daf', 114, 111, '5f098251d59d1c29339c88205a90901c', 'undefined', 1, '2023-10-06 05:19:08', NULL),
(25, 30, '1', 'zzzzzzzzzz', 123, 123, 'db7706135d94e88f2505113649a88576', 'undefined', 1, '2023-10-06 05:26:23', NULL),
(26, 25, 'vv', 'vv', 12, 1231, '7bbd918b026db8a3b2a4e3c581b297f8', 'undefined', 1, '2023-10-06 05:41:42', NULL),
(27, 26, 'dara', 'dara', 0, 4, '6eabfe7b877e93b69814944ae829fce6', 'undefined', 0, '2023-10-06 05:43:34', NULL),
(29, 30, '12', '12', 2, 120, 'f2dc62f423ff1328d628f86240d589ed', 'dfasdfadfda', 1, '2023-10-09 06:41:14', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `product_image`
--

CREATE TABLE `product_image` (
  `product_image_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `is_active` tinyint(1) NOT NULL DEFAULT 1
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `province`
--

CREATE TABLE `province` (
  `province_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `description` text NOT NULL,
  `date_modified` datetime NOT NULL,
  `date_added` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `province`
--

INSERT INTO `province` (`province_id`, `name`, `description`, `date_modified`, `date_added`) VALUES
(1, 'Phnom Penh', 'Delivery in Phnom Penh', '2019-11-05 14:44:42', '2019-08-03 03:00:22'),
(2, 'Oddar Meancheay (Kerry)', 'Oddar Meancheay', '2019-11-07 14:09:32', '2019-10-24 10:11:46'),
(3, 'Oddar Meancheay (Other )', 'Oddar Meancheay', '2019-11-07 14:09:16', '2019-10-24 10:20:02'),
(4, 'Battambang', 'Battambang', '0000-00-00 00:00:00', '2019-11-07 07:05:05'),
(5, 'Kampong Cham', 'Kampong Cham', '0000-00-00 00:00:00', '2019-11-07 07:05:22'),
(6, 'Kampong Chhnang', 'Kampong Chhnang', '0000-00-00 00:00:00', '2019-11-07 07:05:38'),
(7, 'Kampong Som', 'Kampong Som', '0000-00-00 00:00:00', '2019-11-07 07:05:54'),
(8, 'Kampong Speu', 'Kampong Speu', '0000-00-00 00:00:00', '2019-11-07 07:06:07'),
(9, 'Kampong Thom', 'Kampong Thom', '0000-00-00 00:00:00', '2019-11-07 07:06:19'),
(10, 'Kampot', 'Kampot', '0000-00-00 00:00:00', '2019-11-07 07:06:31'),
(11, 'Kandal', 'Kandal', '0000-00-00 00:00:00', '2019-11-07 07:06:44'),
(12, 'Kaoh Kong', 'Kaoh Kong', '0000-00-00 00:00:00', '2019-11-07 07:06:58'),
(13, 'Keb', 'Keb', '0000-00-00 00:00:00', '2019-11-07 07:07:10'),
(14, 'Kratie', 'Kratie', '0000-00-00 00:00:00', '2019-11-07 07:07:21'),
(15, 'Mondul Kiri', 'Mondul Kiri', '0000-00-00 00:00:00', '2019-11-07 07:07:33'),
(16, 'Pailin', 'Pailin', '0000-00-00 00:00:00', '2019-11-07 07:09:47'),
(17, 'Preah Seihanu', 'Preah Seihanu (Kompong Som or Sihanoukville)', '0000-00-00 00:00:00', '2019-11-07 07:10:22'),
(18, 'Preah Vihear', 'Preah Vihear', '0000-00-00 00:00:00', '2019-11-07 07:10:36'),
(19, 'Prey Veng', 'Prey Veng', '0000-00-00 00:00:00', '2019-11-07 07:10:54'),
(20, 'Pursat', 'Pursat', '0000-00-00 00:00:00', '2019-11-07 07:11:11'),
(21, 'Ratanak Kiri', 'Ratanak Kiri', '0000-00-00 00:00:00', '2019-11-07 07:11:27'),
(22, 'Siemreap', 'Siemreap', '0000-00-00 00:00:00', '2019-11-07 07:11:40'),
(23, 'Stung Treng', 'Stung Treng', '0000-00-00 00:00:00', '2019-11-07 07:11:53'),
(24, 'Svay Rieng', 'Svay Rieng', '0000-00-00 00:00:00', '2019-11-07 07:12:08'),
(25, 'Takeo', 'Takeo', '0000-00-00 00:00:00', '2019-11-07 07:12:25'),
(26, 'Banteay Meanchey', 'Banteay Meanchey', '0000-00-00 00:00:00', '2019-11-07 07:12:34');

-- --------------------------------------------------------

--
-- Table structure for table `role`
--

CREATE TABLE `role` (
  `role_id` int(11) NOT NULL,
  `name` varchar(120) NOT NULL,
  `code` varchar(120) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `role`
--

INSERT INTO `role` (`role_id`, `name`, `code`, `create_at`) VALUES
(1, 'Admin', 'admin', '2023-08-24 14:59:17'),
(2, 'Manager', 'manger', '2023-08-24 14:59:17'),
(3, 'Accountant', 'accountant', '2023-08-24 14:59:17'),
(4, 'Online Staff', 'online_staff', '2023-08-24 14:59:17'),
(6, 'Customer', 'customer', '2023-08-28 14:01:31'),
(7, 'New Staff', 'newstaff', '2023-10-04 10:25:33');

-- --------------------------------------------------------

--
-- Table structure for table `role_permission`
--

CREATE TABLE `role_permission` (
  `role_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `role_permission`
--

INSERT INTO `role_permission` (`role_id`, `permission_id`) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(1, 6),
(1, 7),
(1, 8),
(1, 9),
(1, 10),
(1, 11),
(1, 12),
(1, 13),
(1, 14),
(1, 15),
(1, 16),
(1, 17),
(1, 18),
(1, 19),
(1, 20),
(4, 1),
(4, 5),
(4, 9),
(4, 13),
(4, 14),
(6, 1);

-- --------------------------------------------------------

--
-- Table structure for table `wishlist`
--

CREATE TABLE `wishlist` (
  `wishlist_id` int(11) NOT NULL,
  `product_id` int(11) NOT NULL,
  `customer_id` int(11) NOT NULL,
  `create_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `cart`
--
ALTER TABLE `cart`
  ADD PRIMARY KEY (`cart_id`);

--
-- Indexes for table `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`category_id`);

--
-- Indexes for table `customer`
--
ALTER TABLE `customer`
  ADD PRIMARY KEY (`customer_id`);

--
-- Indexes for table `customer_address`
--
ALTER TABLE `customer_address`
  ADD PRIMARY KEY (`customer_address_id`),
  ADD KEY `fk_customer` (`customer_id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`employee_id`);

--
-- Indexes for table `gender`
--
ALTER TABLE `gender`
  ADD PRIMARY KEY (`gender_id`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`order_id`);

--
-- Indexes for table `order_detail`
--
ALTER TABLE `order_detail`
  ADD PRIMARY KEY (`order_detail_id`);

--
-- Indexes for table `order_status`
--
ALTER TABLE `order_status`
  ADD PRIMARY KEY (`order_status_id`);

--
-- Indexes for table `payement_methode`
--
ALTER TABLE `payement_methode`
  ADD PRIMARY KEY (`payement_methode_id`);

--
-- Indexes for table `permission`
--
ALTER TABLE `permission`
  ADD PRIMARY KEY (`permission_id`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`product_id`);

--
-- Indexes for table `product_image`
--
ALTER TABLE `product_image`
  ADD PRIMARY KEY (`product_image_id`);

--
-- Indexes for table `province`
--
ALTER TABLE `province`
  ADD PRIMARY KEY (`province_id`);

--
-- Indexes for table `role`
--
ALTER TABLE `role`
  ADD PRIMARY KEY (`role_id`),
  ADD UNIQUE KEY `name` (`name`),
  ADD UNIQUE KEY `code` (`code`);

--
-- Indexes for table `role_permission`
--
ALTER TABLE `role_permission`
  ADD PRIMARY KEY (`role_id`,`permission_id`);

--
-- Indexes for table `wishlist`
--
ALTER TABLE `wishlist`
  ADD PRIMARY KEY (`wishlist_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `cart`
--
ALTER TABLE `cart`
  MODIFY `cart_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT for table `category`
--
ALTER TABLE `category`
  MODIFY `category_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=31;

--
-- AUTO_INCREMENT for table `customer`
--
ALTER TABLE `customer`
  MODIFY `customer_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `customer_address`
--
ALTER TABLE `customer_address`
  MODIFY `customer_address_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;

--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `employee_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- AUTO_INCREMENT for table `gender`
--
ALTER TABLE `gender`
  MODIFY `gender_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `order_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `order_detail`
--
ALTER TABLE `order_detail`
  MODIFY `order_detail_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `order_status`
--
ALTER TABLE `order_status`
  MODIFY `order_status_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `payement_methode`
--
ALTER TABLE `payement_methode`
  MODIFY `payement_methode_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `permission`
--
ALTER TABLE `permission`
  MODIFY `permission_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;

--
-- AUTO_INCREMENT for table `product`
--
ALTER TABLE `product`
  MODIFY `product_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;

--
-- AUTO_INCREMENT for table `product_image`
--
ALTER TABLE `product_image`
  MODIFY `product_image_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `province`
--
ALTER TABLE `province`
  MODIFY `province_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT for table `role`
--
ALTER TABLE `role`
  MODIFY `role_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `wishlist`
--
ALTER TABLE `wishlist`
  MODIFY `wishlist_id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `customer_address`
--
ALTER TABLE `customer_address`
  ADD CONSTRAINT `fk_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer` (`customer_id`) ON DELETE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
