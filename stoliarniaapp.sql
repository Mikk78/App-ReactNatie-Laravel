-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Янв 14 2021 г., 20:22
-- Версия сервера: 10.4.14-MariaDB
-- Версия PHP: 7.4.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `stoliarniaapp`
--

-- --------------------------------------------------------

--
-- Структура таблицы `szl80`
--

CREATE TABLE `szl80` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `size` text NOT NULL,
  `number_of_parts_in_carpentry` int(11) NOT NULL,
  `number_of_parts_in_stock` int(11) NOT NULL,
  `number_of_parts_in_package` int(11) NOT NULL,
  `total` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `szl80`
--

INSERT INTO `szl80` (`id`, `name`, `size`, `number_of_parts_in_carpentry`, `number_of_parts_in_stock`, `number_of_parts_in_package`, `total`) VALUES
(1, 'Bok lewy', '300x230', 0, 0, 0, 0),
(2, 'Bok prawy', '300x230', 0, 0, 0, 0),
(3, 'Przegroda', '263x210', 0, 0, 0, 0),
(4, 'Wieniec dolny', '763x230', 0, 0, 0, 0),
(5, 'Wieniec górny', '763x217', 0, 0, 0, 0),
(6, 'HDF plecy', '762x289', 0, 0, 0, 0),
(7, 'HDF surowa', '772x205', 0, 0, 0, 0),
(8, 'HDF surowa2', '350x95', 0, 0, 0, 0),
(9, 'Front', '798x308', 0, 0, 0, 0);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `szl80`
--
ALTER TABLE `szl80`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `szl80`
--
ALTER TABLE `szl80`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
