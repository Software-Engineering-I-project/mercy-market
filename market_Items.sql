-- MySQL dump 10.13  Distrib 8.0.34, for macos13 (arm64)
--
-- Host: 127.0.0.1    Database: market
-- ------------------------------------------------------
-- Server version	8.2.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Items`
--

DROP TABLE IF EXISTS `Items`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Items` (
  `id` int NOT NULL AUTO_INCREMENT,
  `sku` int NOT NULL,
  `name` varchar(45) NOT NULL,
  `price` varchar(45) NOT NULL,
  `department` varchar(45) NOT NULL,
  `items_in_case` int NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `SKU_UNIQUE` (`sku`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Items`
--

LOCK TABLES `Items` WRITE;
/*!40000 ALTER TABLE `Items` DISABLE KEYS */;
INSERT INTO `Items` VALUES (1,42348,'Brown rice','$3.99','Grocery',12,'Orderable'),(2,90412,'Black beans','$1.29','Grocery',36,'Orderable'),(3,23871,'Popcorn','$1.99','Snacks',24,'Orderable'),(4,98123,'Ground chicken','$3.99','Meat',12,'Orderable'),(5,56016,'French fries','$4.99','Frozen',24,'Orderable'),(6,19328,'Pasta alfredo','$4.99','Frozen',16,'Orderable'),(7,42982,'Green tea','$3.99','Tea',24,'Orderable'),(8,45319,'Medium roast coffee','$3.99','Coffee',12,'Orderable'),(9,78901,'Caesar salad','$3.49','Fresh',8,'Orderable'),(10,75619,'White bread','$2.99','Bread',14,'Orderable'),(11,14982,'Whole wheat bread','$2.99','Bread',14,'Orderable'),(12,98181,'Large brown eggs','$1.99','Dairy',18,'Orderable'),(13,13981,'Large white eggs','$1.99','Dairy',18,'Out of stock'),(14,52984,'Greek yogurt','$5.99','Dairy',6,'Orderable'),(15,13489,'Goldfish','$3.49 ','Snacks',24,'Discontinued'),(16,31573,'Frosted flakes','$4.79','Cereal',24,'Orderable'),(17,24741,'Granola','$1.99','Cereal',12,'Orderable'),(18,42856,'Salmon','$12.99 ','Meat',9,'Orderable'),(19,45192,'Chai tea','$3.49','Tea',24,'Orderable'),(20,68192,'Light roast coffee','$3.99','Coffee',12,'Discontinued'),(21,48219,'Sourdough','$4.99 ','Bread',18,'Out of stock'),(22,72389,'Gala apple','$0.79','Produce',40,'Orderable'),(23,14902,'Watermelon','$3.99 ','Produce',9,'Orderable');
/*!40000 ALTER TABLE `Items` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-11-30 22:16:22
