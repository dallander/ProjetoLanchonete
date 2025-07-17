-- MySQL dump 10.13  Distrib 8.0.42, for Win64 (x86_64)
--
-- Host: localhost    Database: lanchonete
-- ------------------------------------------------------
-- Server version	8.0.42

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
-- Table structure for table `lanches`
--

DROP TABLE IF EXISTS `lanches`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `lanches` (
  `id_tabela_lanche` int NOT NULL AUTO_INCREMENT,
  `nome_tabela_lanche` varchar(70) DEFAULT NULL,
  `descricao_lanche` varchar(255) DEFAULT NULL,
  `preco_tabela_lanche` decimal(10,2) DEFAULT NULL,
  PRIMARY KEY (`id_tabela_lanche`)
) ENGINE=InnoDB AUTO_INCREMENT=46 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `lanches`
--

LOCK TABLES `lanches` WRITE;
/*!40000 ALTER TABLE `lanches` DISABLE KEYS */;
INSERT INTO `lanches` VALUES (1,'Água','Água mineral',2.99),(2,'ÁGUA COM GÁS','ÁGUA mineral COM GÁS',3.99),(3,'H2O','',6.99),(4,'H20 LIMONETO','',6.99),(5,'ICE TEA LIMAO','',4.99),(6,'ICEA TEA PESSEGO','',5.99),(7,'ÁGUA TONICA','',5.99),(8,'PEPSI LATA ','',5.99),(9,'COCA COLA ZERO LATA','',5.99),(10,'GUARANÁ ANTARTICA ZERO LATA','',5.99),(11,'DEL VALLE MANGA LATA','',6.99),(12,'DEL VALLE PESSEGO LATA','',5.99),(13,'DEL VALLE UVA LATA','',6.99),(14,'DEL VALLE MARACUJA LATA','',6.99),(15,'GUARANA ANTARTICA 1,5L','',11.99),(16,'FANTA UVA 1,5L','',11.99),(17,'FANTA LARANJA 1,5L','',11.99),(18,'GUARANÁ ANTARTICA LATA','',5.99),(19,'PEPSI ZERO LATA ','',5.99),(20,'CITRUS LATA SCHWEPPES','',5.99),(21,'SPRITE LATA ','',5.99),(22,'COCA COLA 1,5L','',11.99),(23,'REDBULL LATA','',11.99),(24,'COCA-COLA LATA','',5.99),(25,'BATATA FRITA SIMPLES','400g de fritas, finalizada com sal.',16.99),(26,'BATATA DOM','Batata, mussarela, cheddar, calabresa e bacon fritos e picadinhos.',44.99),(27,'bolinho de Pulled Pork defumado,','10 UNIDADES, finalizada com sal.',54.99),(28,'PETISCONI CAMARÃO','aproximadamente 400g de camarões limpos, selados ao alho e azeite com ervas especiais.',44.99),(29,'IMPERADOR CANGACEIRO','aproximado 400g de carne seca fininha com aipim noisette e queijo mussarela gratinado',54.99),(30,'PASTEL DOM PERUANO','PEITO DE PERU, QUEIJO MINAS E OREGANO.',13.99),(31,'PASTEL DOM COSTELONE','Costela Bovina desfiada bem temperada combinada com Cream cheese.',14.99),(32,'PASTEL DOM RALADO','Carne moída com tempero especial acompanhado de ovo de codorna, azeitona e mussarela.',13.99),(33,'PASTEL CUPIM REAL','Cupim bovino desfiado com tempero especial combinado com queijo coalho.',14.99),(34,'PASTEL MUSSARELLO','MUSSARELA com oregano',12.99),(35,'PASTEL BACALHAL','Bacalhau desfiado de qualidade, azeitona preta, palmito e ovo de codorna',19.99),(36,'PASTEL EMPERADOR CANGACEIRO','RECHEADO COM CARNE SECA',16.99),(37,'PASTEL BANANA NEVADA','chocolate branco, doce de leite e banana.',12.99),(38,'PASTEL NUTELLA COM MORANGO','',12.99),(39,'PASTEL ROMEU E JULIETA','QUEIJO MINAS COM GOIABADA',12.99),(40,'PASTEL CHOCOLATE BRANCO - LACTA','',11.99),(41,'PASTEL BEIJINHO','BEIJINHO CLASSICO DENTRO DO PASTEL!!',11.99),(42,'PASTEL CHOCOLATE AO LEITE - LACTA','',11.99),(43,'PASTEL DOCE DE BANANA','DOCE DE BANANA COM CANELA NO PASTEL',11.99),(44,'PASTEL NUTELLA COM BANANA','',12.99),(45,'PASTEL NUTELLA','SOMENTE NUTELA',12.99);
/*!40000 ALTER TABLE `lanches` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-07-17 14:06:04
