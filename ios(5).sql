-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3307
-- Generation Time: Jul 23, 2022 at 02:13 PM
-- Server version: 5.7.24
-- PHP Version: 7.4.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ios`
--

-- --------------------------------------------------------

--
-- Table structure for table `chanel`
--

CREATE TABLE `chanel` (
  `idChanel` int(255) NOT NULL,
  `chanelName` varchar(255) NOT NULL,
  `Theme` varchar(255) NOT NULL,
  `description` varchar(255) NOT NULL,
  `idUser` int(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `chanel`
--

INSERT INTO `chanel` (`idChanel`, `chanelName`, `Theme`, `description`, `idUser`, `username`) VALUES
(1, 'test', 'incroyable', 'alors voila', 1, 'kevin');

-- --------------------------------------------------------

--
-- Table structure for table `comment`
--

CREATE TABLE `comment` (
  `idComment` int(255) NOT NULL,
  `idChanel` int(255) NOT NULL,
  `idUser` int(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `content` varchar(255) NOT NULL,
  `createDate` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `comment`
--

INSERT INTO `comment` (`idComment`, `idChanel`, `idUser`, `username`, `content`, `createDate`) VALUES
(1, 34567, 1, 'kevin', 'ndjvfjhjdkdnvkfjb', '');

-- --------------------------------------------------------

--
-- Table structure for table `favorite`
--

CREATE TABLE `favorite` (
  `idFavorite` int(255) NOT NULL,
  `idAnime` varchar(255) NOT NULL,
  `idUser` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `favorite`
--

INSERT INTO `favorite` (`idFavorite`, `idAnime`, `idUser`) VALUES
(1, '34567', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tablelike`
--

CREATE TABLE `tablelike` (
  `idLike` int(255) NOT NULL,
  `idComment` int(255) NOT NULL,
  `idUser` int(255) NOT NULL,
  `username` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tablelike`
--

INSERT INTO `tablelike` (`idLike`, `idComment`, `idUser`, `username`) VALUES
(1, 1, 1, 'kevin'),
(2, 1, 1, 'kevin'),
(3, 1, 1, 'kevin');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `mail` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `name`, `mail`, `password`) VALUES
(1, 'Jeanmmm', 'test@test.fr', 'jesuislemdp'),
(2, 'Jeanmmm', 'test@test.fr', 'jesuislemdp'),
(3, 'Jeanmmm', 'test@test.fr', 'jesuislemdp');

-- --------------------------------------------------------

--
-- Table structure for table `userchanel`
--

CREATE TABLE `userchanel` (
  `idChanel` int(255) NOT NULL,
  `idUser` int(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `userchanel`
--

INSERT INTO `userchanel` (`idChanel`, `idUser`) VALUES
(6, 2);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `chanel`
--
ALTER TABLE `chanel`
  ADD PRIMARY KEY (`idChanel`);

--
-- Indexes for table `comment`
--
ALTER TABLE `comment`
  ADD PRIMARY KEY (`idComment`);

--
-- Indexes for table `favorite`
--
ALTER TABLE `favorite`
  ADD PRIMARY KEY (`idFavorite`);

--
-- Indexes for table `tablelike`
--
ALTER TABLE `tablelike`
  ADD PRIMARY KEY (`idLike`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `chanel`
--
ALTER TABLE `chanel`
  MODIFY `idChanel` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `comment`
--
ALTER TABLE `comment`
  MODIFY `idComment` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `favorite`
--
ALTER TABLE `favorite`
  MODIFY `idFavorite` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tablelike`
--
ALTER TABLE `tablelike`
  MODIFY `idLike` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
