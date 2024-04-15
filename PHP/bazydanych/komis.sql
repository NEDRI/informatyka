-- phpMyAdmin SQL Dump
-- version 4.8.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 14 Gru 2018, 12:15
-- Wersja serwera: 10.1.36-MariaDB
-- Wersja PHP: 7.1.22

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `komis`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `klienci`
--

CREATE TABLE `klienci` (
  `NR_KLIENTA` char(8) NOT NULL,
  `IMIE` varchar(20) NOT NULL,
  `NAZWISKO` varchar(20) NOT NULL,
  `NR_KARTY_KREDYT` char(20) DEFAULT NULL,
  `FIRMA` varchar(40) DEFAULT NULL,
  `ULICA` varchar(24) NOT NULL,
  `NUMER` char(8) NOT NULL,
  `MIASTO` varchar(24) NOT NULL,
  `KOD` char(6) NOT NULL,
  `NIP` char(12) DEFAULT NULL,
  `NR_TELEFONU` char(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `klienci`
--

INSERT INTO `klienci` (`NR_KLIENTA`, `IMIE`, `NAZWISKO`, `NR_KARTY_KREDYT`, `FIRMA`, `ULICA`, `NUMER`, `MIASTO`, `KOD`, `NIP`, `NR_TELEFONU`) VALUES
('00000001', 'JAN', 'KOWALSKI', NULL, NULL, 'KOCHANOWSKIEGO', '3', 'WROCLAW', '37-300', NULL, '167-763-234'),
('00000002', 'TOMASZ', 'ADAMCZAK', 'HH 12345678', 'KOWALSKI S.C.', 'KWIATOWA', '4/9', 'WARSZAWA', '01-900', '543-123-456', '46-744-431'),
('00000003', 'PIOTR', 'MALCZYK', 'HF 12445661', 'ADA S.C.', 'ROZANA', '9', 'WARSZAWA', '01-900', '443-133-251', '16-742-114'),
('00000004', 'PAWEL', 'FIODOROWICZ', 'DD 76545321', 'KRAWIECTWO', 'ARMII KRAJOWEJ', '22A', 'WARSZAWA', '01-200', '555-233-256', '44-342-116'),
('00000005', 'ANIELA', 'DALGIEWICZ', NULL, 'MODNA PANI', 'BOHATEROW GETTA', '24', 'WROCLAW', '37-200', '456-134-153', '144-188-415'),
('00000006', 'JOANNA', 'KWIATKOWSKA', NULL, NULL, 'TUWIMA', '2/5', 'SWIDNICA', '58-100', NULL, '963-733-231'),
('00000007', 'BOZENA', 'MALINOWSKA', NULL, NULL, 'LELEWELA', '34/1', 'SWIDNICA', '58-100', NULL, '965-553-778'),
('00000008', 'TOMASZ', 'NOWAK', NULL, NULL, 'ZEROMSKIEGO', '5A/8', 'SWIDNICA', '58-100', NULL, '911-135-536'),
('00000009', 'KRZYSZTOF', 'DOMAGALA', NULL, NULL, 'LESNA', '5', 'SWIDNICA', '58-100', NULL, '922-233-232'),
('00000010', 'ARKADIUSZ', 'DOCZEKALSKI', NULL, NULL, 'LESNA', '2', 'SWIDNICA', '58-100', NULL, '922-233-267'),
('00000011', 'ANNA', 'KOWALSKA', 'KJ 98765412', 'MODNIARSTWO', 'POWSTANCOW SLASKICH', '4', 'WROCLAW', '37-200', '422-132-354', '444-283-901'),
('00000012', 'KRZYSZTOF', 'DOBROWOLSKI', NULL, 'KAMIENIARSTWO', 'STRZEGOMSKA', '124', 'WROCLAW', '37-400', '433-133-332', '443-285-202'),
('00000013', 'MARCIN', 'KRZYKALA', NULL, NULL, 'KONOPNICKIEJ', '1/4', 'WROCLAW', '37-400', NULL, '442-211-109'),
('00000014', 'ANETA', 'PAPROCKA', NULL, NULL, 'TUWIMA', '2', 'WROCLAW', '37-400', NULL, '442-671-899'),
('00000015', 'SEBASTIAN', 'KOWNACKI', NULL, NULL, 'GLOWACKIEGO', '2/9', 'WROCLAW', '37-400', NULL, '423-681-129'),
('00000016', 'MICHAL', 'MICHALSKI', NULL, NULL, 'KWIATOWA', '9/3', 'WROCLAW', '37-500', NULL, '499-621-921'),
('00000017', 'MICHAL', 'SZYKOWNY', 'WW 12398765', NULL, 'LESNA', '3', 'WARSZAWA', '00-100', NULL, '191-221-622'),
('00000018', 'MARCIN', 'MARCINKOWSKI', 'WQ 14368781', NULL, 'OKREZNA', '33', 'WARSZAWA', '00-200', NULL, '122-127-647'),
('00000019', 'RAFAL', 'RAFALSKI', 'WS 12358672', 'NAPRAWA SAMOCHODOW', 'PRZEMYSLOWA', '1', 'WARSZAWA', '00-200', '999-765-120', '822-324-742'),
('00000020', 'ROBERT', 'NOWAK', 'AS 61333699', 'TAPICERSTWO', 'MOSTOWA', '9B', 'WARSZAWA', '00-100', '987-765-333', '811-311-147');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `miejsca`
--

CREATE TABLE `miejsca` (
  `NR_MIEJSCA` char(6) NOT NULL,
  `ULICA` varchar(24) NOT NULL,
  `NUMER` char(8) NOT NULL,
  `MIASTO` varchar(24) NOT NULL,
  `KOD` char(6) NOT NULL,
  `TELEFON` char(16) DEFAULT NULL,
  `UWAGI` varchar(40) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `miejsca`
--

INSERT INTO `miejsca` (`NR_MIEJSCA`, `ULICA`, `NUMER`, `MIASTO`, `KOD`, `TELEFON`, `UWAGI`) VALUES
('000001', 'LEWARTOWSKIEGO', '12', 'WARSZAWA', '10-100', '228-277-097', NULL),
('000002', 'ALEJE LIPOWE', '3', 'WROCLAW', '32-134', '388-299-086', NULL),
('000003', 'KOCHANOWSKIEGO', '8', 'KRAKOW', '91-200', '222-312-498', NULL),
('000004', 'LOTNICZA', '9', 'POZNAN', '22-200', '778-512-044', NULL);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pracownicy`
--

CREATE TABLE `pracownicy` (
  `NR_PRACOWNIKA` char(4) NOT NULL,
  `IMIE` varchar(20) NOT NULL,
  `NAZWISKO` varchar(20) NOT NULL,
  `DATA_ZATR` date NOT NULL,
  `DZIAL` varchar(20) NOT NULL,
  `STANOWISKO` varchar(20) NOT NULL,
  `PENSJA` decimal(8,2) DEFAULT NULL,
  `DODATEK` decimal(8,2) DEFAULT NULL,
  `NR_MIEJSCA` char(6) NOT NULL,
  `NR_TELEFONU` char(16) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `pracownicy`
--

INSERT INTO `pracownicy` (`NR_PRACOWNIKA`, `IMIE`, `NAZWISKO`, `DATA_ZATR`, `DZIAL`, `STANOWISKO`, `PENSJA`, `DODATEK`, `NR_MIEJSCA`, `NR_TELEFONU`) VALUES
('0001', 'JAN', 'KOWALSKI', '1997-02-01', 'OBSLUGA KLIENTA', 'SPRZEDAWCA', '1100.00', '123.00', '000001', '987-231-123'),
('0002', 'ANNA', 'KAMINSKA', '1997-01-01', 'OBSLUGA KLIENTA', 'SPRZEDAWCA', '1200.00', '115.00', '000002', '987-231-124'),
('0003', 'KRZYSZTOF', 'ADAMSKI', '1997-05-01', 'OBSLUGA KLIENTA', 'KIEROWNIK', '2000.00', NULL, '000001', '987-231-125'),
('0004', 'PIOTR', 'MICHALSKI', '1998-06-01', 'TECHNICZNY', 'MECHANIK', '1700.00', '76.00', '000001', '987-231-131'),
('0005', 'BOZENA', 'DOMANSKA', '1997-02-01', 'OBSLUGA KLIENTA', 'SPRZEDAWCA', '1300.00', '134.00', '000003', '987-231-126'),
('0006', 'WOJCIECH', 'BURZALSKI', '1998-12-01', 'TECHNICZNY', 'MECHANIK', '1800.00', '80.00', '000003', '987-231-132'),
('0007', 'MARZENA', 'KOWNACKA', '1997-05-01', 'KSIEGOWOSC', 'KASJER', '1400.00', '105.00', '000001', '987-231-141'),
('0008', 'DAMIAN', 'MACHALICA', '1997-05-01', 'TECHNICZNY', 'KIEROWNIK', '2200.00', NULL, '000001', '987-231-133'),
('0009', 'ALICJA', 'MAKOWIECKA', '1999-07-01', 'OBSLUGA KLIENTA', 'SPRZEDAWCA', '1400.00', '120.00', '000004', '933-241-525'),
('0010', 'WOJCIECH', 'BAGIELSKI', '1998-04-01', 'OBSLUGA KLIENTA', 'SPRZEDAWCA', '1200.00', '100.00', '000001', '457-531-143');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `samochody`
--

CREATE TABLE `samochody` (
  `NR_SAMOCHODU` char(6) NOT NULL,
  `MARKA` varchar(20) NOT NULL,
  `TYP` varchar(16) NOT NULL,
  `ROK_PROD` date NOT NULL,
  `KOLOR` varchar(16) NOT NULL,
  `POJ_SILNIKA` smallint(6) NOT NULL,
  `PRZEBIEG` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `samochody`
--

INSERT INTO `samochody` (`NR_SAMOCHODU`, `MARKA`, `TYP`, `ROK_PROD`, `KOLOR`, `POJ_SILNIKA`, `PRZEBIEG`) VALUES
('000001', 'MERCEDES', '190D', '1999-01-01', 'BIALY', 1800, 23000),
('000002', 'MERCEDES', '230D', '2019-01-01', 'NIEBIESKI', 2000, 35000),
('000003', 'FIAT', 'SEICENTO', '2000-01-01', 'CZERWONY', 1100, 13000),
('000004', 'FIAT', 'SEICENTO', '1999-01-01', 'BIALY', 900, 10000),
('000005', 'FIAT', 'TIPO', '1998-01-01', 'BORDOWY', 1400, 43000),
('000006', 'POLONEZ', 'CARO', '1997-01-01', 'ZIELONY', 1600, 55000),
('000007', 'OPEL', 'CORSA', '2011-01-01', 'ZIELONY', 1100, 11000),
('000008', 'OPEL', 'VECTRA', '1999-01-01', 'SZARY', 1800, 36000),
('000009', 'MERCEDES', '190D', '1996-01-01', 'BRAZOWY', 1800, 69000),
('000010', 'FORD', 'ESCORT', '2000-01-01', 'NIEBIESKI', 1600, 8000),
('000011', 'FORD', 'ESCORT', '1999-01-01', 'BIALY', 1600, 23000),
('000012', 'TOYOTA', 'YARIS', '2018-01-01', 'BORDOWY', 1100, 54000),
('000013', 'FIAT', 'SEICENTO', '1999-01-01', 'ZLOTY', 1100, 25000),
('000014', 'FIAT', 'SEICENTO', '2000-01-01', 'BIALY', 1100, 18000),
('000015', 'SEAT', 'IBIZA', '1998-01-01', 'ZOLTY', 1800, 63000),
('000016', 'FORD', 'SIERRA', '1995-01-01', 'CZERWONY', 1600, 87000),
('000017', 'OPEL', 'CORSA', '2000-01-01', 'ZIELONY', 1400, 9000),
('000018', 'FORD', 'KA', '1999-01-01', 'ZOLTY', 1400, 20000);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wypozyczenia`
--

CREATE TABLE `wypozyczenia` (
  `NR_WYPOZYCZENIA` char(8) NOT NULL,
  `NR_KLIENTA` char(8) NOT NULL,
  `NR_SAMOCHODU` char(6) NOT NULL,
  `NR_PRACOW_WYP` char(4) NOT NULL,
  `NR_PRACOW_ODD` char(4) DEFAULT NULL,
  `NR_MIEJSCA_WYP` char(6) NOT NULL,
  `NR_MIEJSCA_ODD` char(6) DEFAULT NULL,
  `DATA_WYP` date NOT NULL,
  `DATA_ODD` date DEFAULT NULL,
  `KAUCJA` decimal(8,2) DEFAULT NULL,
  `CENA_JEDN` decimal(8,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Zrzut danych tabeli `wypozyczenia`
--

INSERT INTO `wypozyczenia` (`NR_WYPOZYCZENIA`, `NR_KLIENTA`, `NR_SAMOCHODU`, `NR_PRACOW_WYP`, `NR_PRACOW_ODD`, `NR_MIEJSCA_WYP`, `NR_MIEJSCA_ODD`, `DATA_WYP`, `DATA_ODD`, `KAUCJA`, `CENA_JEDN`) VALUES
('00000001', '00000001', '000003', '0002', '0002', '000001', '000001', '1998-09-18', '1998-09-23', '200.00', '100.00'),
('00000002', '00000003', '000004', '0001', '0001', '000001', '000001', '1998-09-26', '1998-09-27', NULL, '100.00'),
('00000003', '00000002', '000004', '0009', '0009', '000002', '000002', '1998-10-04', '1998-10-04', NULL, '100.00'),
('00000004', '00000004', '000003', '0010', '0010', '000003', '000003', '1998-10-19', '1998-10-25', NULL, '100.00'),
('00000005', '00000006', '000007', '0010', '0010', '000003', '000003', '1998-10-29', '1998-11-02', '200.00', '100.00'),
('00000006', '00000005', '000008', '0010', '0002', '000001', '000003', '1998-11-07', '1998-11-09', '200.00', '100.00'),
('00000007', '00000008', '000011', '0009', '0002', '000001', '000001', '1998-11-20', '1998-11-25', '200.00', '100.00'),
('00000008', '00000006', '000011', '0001', '0005', '000004', '000004', '1998-11-28', '1998-12-02', '200.00', '100.00'),
('00000009', '00000007', '000017', '0002', '0002', '000001', '000002', '1998-12-01', '1998-12-03', '200.00', '100.00'),
('00000010', '00000009', '000017', '0002', '0010', '000001', '000002', '1998-12-15', '1998-12-17', '200.00', '100.00'),
('00000011', '00000010', '000001', '0005', '0005', '000003', '000003', '1998-12-20', '1998-12-23', '200.00', '100.00'),
('00000012', '00000012', '000002', '0005', '0005', '000004', '000004', '1999-01-04', '1999-01-14', '200.00', '100.00'),
('00000013', '00000011', '000005', '0001', '0005', '000003', '000001', '1999-01-24', '1999-01-29', NULL, '100.00'),
('00000014', '00000013', '000005', '0001', '0001', '000004', '000001', '1999-02-01', '1999-02-05', '200.00', '100.00'),
('00000015', '00000014', '000004', '0001', '0001', '000002', '000002', '1999-02-04', '1999-02-04', '200.00', '100.00'),
('00000016', '00000015', '000018', '0009', '0009', '000002', '000002', '1999-03-20', '1999-03-23', '200.00', '100.00'),
('00000017', '00000016', '000013', '0010', '0010', '000004', '000001', '1999-03-20', '1999-03-22', '200.00', '100.00'),
('00000018', '00000020', '000014', '0001', '0001', '000001', '000001', '1999-04-01', '1999-04-05', NULL, '100.00'),
('00000019', '00000019', '000015', '0005', '0005', '000004', '000004', '1999-05-04', '1999-05-09', NULL, '100.00'),
('00000020', '00000017', '000017', '0002', '0002', '000003', '000001', '1999-08-14', '1999-08-17', NULL, '100.00'),
('00000021', '00000018', '000009', '0002', NULL, '000001', NULL, '1999-12-04', NULL, NULL, '100.00'),
('00000022', '00000017', '000001', '0001', NULL, '000002', NULL, '1999-12-22', NULL, NULL, '100.00'),
('00000023', '00000009', '000003', '0010', NULL, '000002', NULL, '2000-01-08', NULL, '200.00', '100.00'),
('00000024', '00000014', '000004', '0005', NULL, '000001', NULL, '2000-01-24', NULL, '200.00', '100.00'),
('00000025', '00000010', '000004', '0009', NULL, '000002', NULL, '2000-02-09', NULL, '200.00', '100.00');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indeksy dla tabeli `klienci`
--
ALTER TABLE `klienci`
  ADD PRIMARY KEY (`NR_KLIENTA`);

--
-- Indeksy dla tabeli `miejsca`
--
ALTER TABLE `miejsca`
  ADD PRIMARY KEY (`NR_MIEJSCA`);

--
-- Indeksy dla tabeli `pracownicy`
--
ALTER TABLE `pracownicy`
  ADD PRIMARY KEY (`NR_PRACOWNIKA`),
  ADD KEY `NR_MIEJSCA` (`NR_MIEJSCA`);

--
-- Indeksy dla tabeli `samochody`
--
ALTER TABLE `samochody`
  ADD PRIMARY KEY (`NR_SAMOCHODU`);

--
-- Indeksy dla tabeli `wypozyczenia`
--
ALTER TABLE `wypozyczenia`
  ADD PRIMARY KEY (`NR_WYPOZYCZENIA`),
  ADD KEY `NR_KLIENTA` (`NR_KLIENTA`),
  ADD KEY `NR_SAMOCHODU` (`NR_SAMOCHODU`),
  ADD KEY `NR_MIEJSCA_WYP` (`NR_MIEJSCA_WYP`),
  ADD KEY `NR_MIEJSCA_ODD` (`NR_MIEJSCA_ODD`),
  ADD KEY `NR_PRACOW_WYP` (`NR_PRACOW_WYP`),
  ADD KEY `NR_MIEJSCA_ODD_2` (`NR_MIEJSCA_ODD`),
  ADD KEY `NR_PRACOW_ODD` (`NR_PRACOW_ODD`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `pracownicy`
--
ALTER TABLE `pracownicy`
  ADD CONSTRAINT `pracownicy_ibfk_1` FOREIGN KEY (`NR_MIEJSCA`) REFERENCES `miejsca` (`NR_MIEJSCA`);

--
-- Ograniczenia dla tabeli `wypozyczenia`
--
ALTER TABLE `wypozyczenia`
  ADD CONSTRAINT `wypozyczenia_ibfk_1` FOREIGN KEY (`NR_KLIENTA`) REFERENCES `klienci` (`NR_KLIENTA`),
  ADD CONSTRAINT `wypozyczenia_ibfk_2` FOREIGN KEY (`NR_SAMOCHODU`) REFERENCES `samochody` (`NR_SAMOCHODU`),
  ADD CONSTRAINT `wypozyczenia_ibfk_3` FOREIGN KEY (`NR_PRACOW_ODD`) REFERENCES `pracownicy` (`NR_PRACOWNIKA`),
  ADD CONSTRAINT `wypozyczenia_ibfk_4` FOREIGN KEY (`NR_PRACOW_WYP`) REFERENCES `pracownicy` (`NR_PRACOWNIKA`),
  ADD CONSTRAINT `wypozyczenia_ibfk_5` FOREIGN KEY (`NR_MIEJSCA_ODD`) REFERENCES `miejsca` (`NR_MIEJSCA`),
  ADD CONSTRAINT `wypozyczenia_ibfk_6` FOREIGN KEY (`NR_MIEJSCA_WYP`) REFERENCES `miejsca` (`NR_MIEJSCA`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;