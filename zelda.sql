-- MySQL dump 10.13  Distrib 5.7.18, for Win64 (x86_64)
--
-- Host: localhost    Database: basic_server
-- ------------------------------------------------------
-- Server version	5.7.18-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `categories`
--

DROP TABLE IF EXISTS `categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `category` char(60) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `nickname` char(60) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categories`
--

LOCK TABLES `categories` WRITE;
/*!40000 ALTER TABLE `categories` DISABLE KEYS */;
INSERT INTO `categories` VALUES (5,'Any%','2017-07-09 20:13:19','2017-07-09 20:13:19','any'),(6,'100%','2017-07-09 20:13:31','2017-07-09 20:13:31','100'),(7,'All Dungeons','2017-07-09 20:13:47','2017-07-09 20:13:47','alldungeons'),(8,'Medallions/Stones/Trials','2017-07-09 20:14:06','2017-07-09 20:14:06','mst'),(9,'No IM/WW','2017-07-09 20:14:19','2017-07-09 20:14:19','noimww'),(10,'No Wrong Warp','2017-07-09 20:14:31','2017-07-09 20:14:31','noww'),(11,'Glitchless 100%','2017-07-09 20:14:43','2017-07-09 20:14:43','glitchless100'),(12,'Glitchless','2017-07-09 20:14:48','2017-07-09 20:14:48','glitchless'),(13,'100% No Source Requirement','2017-07-09 20:15:01','2017-07-09 20:15:01','100nsr'),(14,'Ganonless','2017-07-09 20:15:08','2017-07-09 20:15:08','ganonless'),(15,'No RBA/WW','2017-07-09 20:15:16','2017-07-09 20:15:16','norbaww');
/*!40000 ALTER TABLE `categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_categories`
--

DROP TABLE IF EXISTS `game_categories`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `game_id` int(11) NOT NULL,
  `category_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `content` text,
  PRIMARY KEY (`id`),
  UNIQUE KEY `game_category_unique` (`game_id`,`category_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_categories`
--

LOCK TABLES `game_categories` WRITE;
/*!40000 ALTER TABLE `game_categories` DISABLE KEYS */;
INSERT INTO `game_categories` VALUES (1,5,5,'2017-07-09 20:53:47','2017-07-09 20:53:47',NULL),(2,5,6,'2017-07-09 20:53:57','2017-07-09 20:53:57','<pre class=\"ql-syntax\" spellcheck=\"false\">100% GUIDE COMES HERE\n</pre><p><br /></p>'),(3,5,7,'2017-07-09 20:54:04','2017-07-09 20:54:04','<p><br /></p><p><br /></p><p class=\"ql-align-right\"><br /></p><p class=\"ql-align-right\"><u>gkjghjjkfdsfdsfds</u></p><p class=\"ql-align-right\"><br /></p><p><u>kjhkjhkhj</u></p><p><br /></p><p><u>jhkmjh</u></p><p><u>mhjmjh</u></p><blockquote><u>mjhmjhm</u></blockquote><p>mjhmjhmj</p><p><br /></p><p class=\"ql-indent-2\">fdsfdsfds</p><blockquote class=\"ql-indent-2 ql-align-right\">fdsfdsfdsfds</blockquote><pre class=\"ql-syntax ql-indent-2 ql-align-right\" spellcheck=\"false\">fdsfdsfds\n</pre><p class=\"ql-indent-2 ql-align-right\"><br /></p>'),(4,5,8,'2017-07-09 20:54:08','2017-07-09 20:54:08',NULL),(5,5,9,'2017-07-09 20:54:12','2017-07-09 20:54:12',NULL),(6,5,10,'2017-07-09 20:54:17','2017-07-09 20:54:17',NULL),(7,5,11,'2017-07-09 20:54:23','2017-07-09 20:54:23',NULL),(8,5,12,'2017-07-09 20:54:25','2017-07-09 20:54:25',NULL),(9,5,13,'2017-07-09 20:54:28','2017-07-09 20:54:28',NULL),(10,5,14,'2017-07-09 20:54:31','2017-07-09 20:54:31','<p>fdgdfgfd</p><p><br /></p><p>gfdgfdgfd</p><p class=\"ql-align-right\">fdsfdsfsd</p><p class=\"ql-align-right\"><br /></p><blockquote class=\"ql-align-right\">hgnhgfnghnhgnhgnhgnghnhgngh</blockquote><pre class=\"ql-syntax ql-align-right\" spellcheck=\"false\">nhgnghnhgngh\n</pre><h1 class=\"ql-align-right\">nhgnhgnhg</h1><h2 class=\"ql-align-right\">nhgnghnhgnhg</h2>'),(11,5,15,'2017-07-09 20:54:34','2017-07-09 20:54:34',NULL),(14,27,5,'2017-07-10 09:15:27','2017-07-10 09:15:27',NULL),(15,27,6,'2017-07-10 09:15:35','2017-07-10 09:15:35',NULL);
/*!40000 ALTER TABLE `game_categories` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `game_contents`
--

DROP TABLE IF EXISTS `game_contents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `game_contents` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `game_categories_id` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `game_contents`
--

LOCK TABLES `game_contents` WRITE;
/*!40000 ALTER TABLE `game_contents` DISABLE KEYS */;
/*!40000 ALTER TABLE `game_contents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `games`
--

DROP TABLE IF EXISTS `games`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `games` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `game` char(60) NOT NULL,
  `nickname` char(60) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `games`
--

LOCK TABLES `games` WRITE;
/*!40000 ALTER TABLE `games` DISABLE KEYS */;
INSERT INTO `games` VALUES (2,'Adventure of Link','aol','2017-07-09 18:21:51','2017-07-09 18:21:51'),(3,'A Link to the Past','alttp','2017-07-09 18:22:23','2017-07-09 18:22:23'),(4,'Link\'s Awakening','la','2017-07-09 18:22:57','2017-07-09 18:22:57'),(5,'Ocarina of Time','oot','2017-07-09 18:23:19','2017-07-09 18:23:19'),(7,'Link\'s Awakening DX','ladx','2017-07-09 18:23:53','2017-07-09 18:23:53'),(9,'Majora\'s Mask','mm','2017-07-09 18:24:34','2017-07-09 18:24:34'),(10,'Oracle of Seasons','oos','2017-07-09 18:24:49','2017-07-09 18:24:49'),(11,'Oracle of Ages','ooa','2017-07-09 18:24:58','2017-07-09 18:24:58'),(12,'Ocarina of Time MQ','ootmq','2017-07-09 18:25:13','2017-07-09 18:25:13'),(14,'The Wind Waker','tww','2017-07-09 18:25:29','2017-07-09 18:25:29'),(15,'Four Swords Adventures','fsa','2017-07-09 18:26:40','2017-07-09 18:26:40'),(16,'The Minish Cap','tmc','2017-07-09 18:26:52','2017-07-09 18:26:52'),(17,'Twilight Princess','tp','2017-07-09 18:27:06','2017-07-09 18:27:06'),(18,'Phantom Hourglass','ph','2017-07-09 18:27:20','2017-07-09 18:27:20'),(19,'Spirit Tracks','st','2017-07-09 18:27:32','2017-07-09 18:27:32'),(20,'Ocarina of Time 3D','oot3d','2017-07-09 18:27:50','2017-07-09 18:27:50'),(21,'Skyward Sword','ss','2017-07-09 18:28:05','2017-07-09 18:28:05'),(22,'The Wind Waker HD','twwhd','2017-07-09 18:28:23','2017-07-09 18:28:23'),(23,'A Link Between Worlds','albw','2017-07-09 18:28:38','2017-07-09 18:28:38'),(24,'Majora\'s Mask 3D','mm3d','2017-07-09 18:29:00','2017-07-09 18:29:00'),(25,'Twilight Princess HD','tphd','2017-07-09 18:29:19','2017-07-09 18:29:19'),(26,'Breath of the Wild','botw','2017-07-09 18:29:32','2017-07-09 18:29:32'),(27,'The Legend of Zelda','tloz','2017-07-09 18:32:38','2017-07-09 18:32:38');
/*!40000 ALTER TABLE `games` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` char(60) NOT NULL,
  `password` char(60) NOT NULL,
  `email` char(60) NOT NULL,
  `name` char(60) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Matt','$2a$10$VMJYyM.LSU/cslfgxxvOdu9m2lPMBYLw3zLUXcIfjwevkbYVGbIGG','trokematthew@gmail.com','matt','2017-07-03 06:23:27','2017-07-03 06:23:27'),(2,'matt1','$2a$10$gwkfzwOcDGSXVTbEDEU8neJS86cd8P8Zke5ZnbuPHLYT2fGHvDpTW','fakeemail@email.com','matt','2017-07-03 06:23:48','2017-07-03 06:23:48'),(3,'name','$2a$10$0vFm48rIu0FdcFZeaygWFeNwKvKevHLicu9HcWKNZ1Y1midaNd.AO','fakeemail@email.com','fake','2017-07-03 06:27:47','2017-07-03 06:27:47'),(4,'fakeemail','$2a$10$elxmrhoYSS2PRtgaAPMVTuhieAlHnvwqA/f71jc6MGGTHzmGXZN3S','fakeemail@email.com','matt123','2017-07-06 03:57:39','2017-07-06 03:57:39'),(5,'gay','$2a$10$dzYX.RibjMdqePbR2jdNBeRar916Rs.qQLiNDa2EeEabDQi47t0IK','fakeemail@email.com','gay','2017-07-06 04:16:13','2017-07-06 04:16:13'),(6,'imgay','$2a$10$u5hWxhGH5ZLcql294NRwfuivdyxEQugl8TMOrEz.kXYJBB.kgsgcW','trokematthew@gmail.com','imgay','2017-07-06 04:59:48','2017-07-06 04:59:48'),(7,'gay','$2a$10$YcohIG7okvwgZx2ZUoMB.ePCPUL1d1dfHCsfK7J2.KMGeVgefjfrW','trokematthew@gmail.com','gay','2017-07-06 05:58:05','2017-07-06 05:58:05'),(8,'fak','$2a$10$IlkdYnaKaYWlLUC5F43y1.5jZtr56uBhoRQFbWnpqttfgcOzt0JCi','fakeemail@email.com','fake','2017-07-06 08:06:35','2017-07-06 08:06:35'),(9,'fak','$2a$10$rv/pUK1nSdM0LnFGejFtxu7nXsaAU1pelPPVKvYPwYcIJXoZDMXxG','trokematthew@gmail.com','matt','2017-07-06 08:27:53','2017-07-06 08:27:53'),(10,'fakeemail','$2a$10$uSSudi9HRbCwdEW8rvwhAubv5HthXchVn4mHBktpBUbdgr0zLjfhG','fakeemail@email.com','fake','2017-07-06 08:40:20','2017-07-06 08:40:20'),(11,'fake','$2a$10$K06ac0S8/tXhmZXepbkNJuoKd6AUKKqOIw/NcUugWNW6VD/DAWgy6','fakeemail@email.com','fake','2017-07-06 08:40:43','2017-07-06 08:40:43'),(12,'fake','$2a$10$h.RBTGYrTytITOCLFXE/nOA6eQcGGkmaEKKYd8n20txexQx4oxyo6','fakeemail@email.com','fake','2017-07-06 09:01:30','2017-07-06 09:01:30'),(13,'fake123','$2a$10$EPaO3D9164u6Mya.9LAa2eMSN5fOXRbWU6Bpktv2UiVNYMgd.wYum','fakeemail@email.com','fake123','2017-07-07 09:05:30','2017-07-07 09:05:30'),(14,'fake','$2a$10$REgmlA51B7pYqZWaEdEBjOKAwnQiG.wZOCpzU.gs3y6oLkU9NSJIO','fakeemail@email.com','fake','2017-07-09 16:10:52','2017-07-09 16:10:52');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2017-07-13  1:38:20
