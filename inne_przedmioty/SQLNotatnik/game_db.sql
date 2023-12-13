-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 24 Lis 2021, 14:28
-- Wersja serwera: 10.4.21-MariaDB
-- Wersja PHP: 8.0.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `genesys`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `item`
--

CREATE TABLE `item` (
  `Name` varchar(14) DEFAULT NULL,
  `Damage` int(2) NOT NULL DEFAULT 3,
  `Crit` int(1) NOT NULL DEFAULT 5,
  `Encumbrance` int(1) DEFAULT 1,
  `Hard_Points` int(1) DEFAULT 0,
  `Rarity` int(1) DEFAULT 0,
  `Skill_ID` int(1) DEFAULT 5,
  `Range_id` int(1) DEFAULT 0,
  `Price` int(4) DEFAULT 0,
  `Item_Id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `item`
--

INSERT INTO `item` (`Name`, `Damage`, `Crit`, `Encumbrance`, `Hard_Points`, `Rarity`, `Skill_ID`, `Range_id`, `Price`, `Item_Id`) VALUES
('Knife', -1, 3, 1, 0, 2, 1, 0, 25, 1),
('Baton/Club/Bat', -2, 3, 1, 0, 1, 1, 0, 70, 2),
('Sword', -3, 2, 2, 1, 3, 1, 0, 150, 3),
('Light Pistol', 5, 4, 1, 1, 4, 2, 1, 350, 4),
('Heavy Pistol', 6, 3, 1, 0, 4, 2, 2, 375, 5),
('Revolver', 6, 4, 2, 1, 4, 2, 2, 400, 6),
('Short Bow', 3, 5, 2, 0, 3, 4, 2, 100, 7),
('Brass Knucles', -1, 4, 1, 0, 4, 5, 0, 50, 8),
('Gauntlet', -1, 3, 2, 1, 4, 5, 0, 150, 9),
('Long Bow', 5, 5, 3, 1, 4, 4, 2, 200, 10),
('Hunting Rifle', 8, 3, 4, 1, 6, 4, 3, 1200, 11),
('Rifle', 7, 4, 3, 2, 5, 4, 2, 500, 12),
('Submachine Gun', 5, 4, 2, 1, 5, 4, 2, 325, 13),
('Steam Saw', -3, 2, 3, 0, 5, 1, 0, 425, 14),
('Flamer', 6, 5, 4, 0, 6, 4, 1, 750, 15),
('Great Sword', -4, 3, 3, 1, 4, 3, 0, 175, 19),
('Nail Bomb', 5, 4, 1, 0, 3, 2, 1, 250, 20),
('Heavy Crossbow', 8, 4, 5, 2, 6, 0, 3, 750, 21);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `items_specials`
--

CREATE TABLE `items_specials` (
  `Item_ID` int(2) DEFAULT NULL,
  `Special_Id` int(2) DEFAULT NULL,
  `Rank` int(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `items_specials`
--

INSERT INTO `items_specials` (`Item_ID`, `Special_Id`, `Rank`) VALUES
(3, 8, 1),
(6, 1, 1),
(7, 27, 2),
(8, 10, 3),
(9, 10, 3),
(10, 7, 3),
(10, 27, 3),
(11, 1, 1),
(11, 16, 2),
(11, 7, 3),
(13, 2, 0),
(13, 13, 1),
(14, 28, 2),
(14, 18, 3),
(14, 7, 3),
(15, 5, 2),
(15, 19, 1),
(19, 7, 4),
(19, 15, 0),
(20, 28, 1),
(20, 16, 1),
(20, 3, 2),
(21, 21, 1),
(21, 4, 1),
(21, 19, 1),
(21, 7, 3);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `skill`
--

CREATE TABLE `skill` (
  `Skill_ID` int(1) NOT NULL,
  `Name` varchar(14) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `skill`
--

INSERT INTO `skill` (`Skill_ID`, `Name`) VALUES
(0, 'Gunnery'),
(1, 'Melee Light'),
(2, 'Ranged Light'),
(3, 'Melee Heavy'),
(4, 'Ranged Heavy'),
(5, 'Brawl');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `special`
--

CREATE TABLE `special` (
  `Special_Id` int(2) NOT NULL,
  `Name` varchar(12) DEFAULT NULL,
  `Active` tinyint(1) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `special`
--

INSERT INTO `special` (`Special_Id`, `Name`, `Active`) VALUES
(1, 'Accurate', 0),
(2, 'Auto Fire', 1),
(3, 'Blast', 1),
(4, 'Breach', 0),
(5, 'Burn', 1),
(6, 'Concusive', 1),
(7, 'Cumbersome', 0),
(8, 'Defensive', 0),
(9, 'Deflection', 0),
(10, 'Disorient', 1),
(11, 'Ensnare', 1),
(12, 'Guided', 1),
(13, 'Inaccurate', 0),
(14, 'Inferior', 0),
(15, 'Knockdown', 1),
(16, 'Limited Ammo', 0),
(17, 'Linked', 1),
(18, 'Pierce', 0),
(19, 'Prepare', 0),
(20, 'Reinforced', 0),
(21, 'Slow Firing', 0),
(22, 'Stun', 1),
(23, 'Stun Damage', 0),
(24, 'Sunder', 1),
(25, 'Superior', 0),
(26, 'Tractor', 0),
(27, 'Unwieldy', 0),
(28, 'Vicious', 0);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `weapon_range`
--

CREATE TABLE `weapon_range` (
  `Range_Id` int(1) DEFAULT NULL,
  `Name` varchar(7) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `weapon_range`
--

INSERT INTO `weapon_range` (`Range_Id`, `Name`) VALUES
(0, 'Engaged'),
(1, 'Short'),
(2, 'Medium'),
(3, 'Long'),
(4, 'Extreme');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `item`
--
ALTER TABLE `item`
  ADD PRIMARY KEY (`Item_Id`);

--
-- Indeksy dla tabeli `special`
--
ALTER TABLE `special`
  ADD PRIMARY KEY (`Special_Id`);

--
-- AUTO_INCREMENT dla zrzuconych tabel
--

--
-- AUTO_INCREMENT dla tabeli `item`
--
ALTER TABLE `item`
  MODIFY `Item_Id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT dla tabeli `special`
--
ALTER TABLE `special`
  MODIFY `Special_Id` int(2) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
