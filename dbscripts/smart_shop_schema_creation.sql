-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema smart_shop
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema smart_shop
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `smart_shop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `smart_shop` ;

-- -----------------------------------------------------
-- Table `smart_shop`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart_shop`.`product` (
  `pr_id` INT(11) NOT NULL AUTO_INCREMENT,
  `pr_code` VARCHAR(50) NOT NULL,
  `pr_name` VARCHAR(50) NOT NULL,
  `pr_type` VARCHAR(50) NOT NULL,
  `pr_brand` VARCHAR(50) NOT NULL,
  `pr_quantity_type` VARCHAR(25) NULL DEFAULT NULL,
  `pr_rate_per_quantity` INT(11) NOT NULL,
  `pr_stock_count` INT(11) NOT NULL,
  `pr_add_date` DATE NOT NULL,
  `pr_aisle` VARCHAR(50) NOT NULL,
  `pr_shelf` VARCHAR(50) NOT NULL,
  `pr_date_of_manufacture` DATE NOT NULL,
  `pr_date_of_expiry` DATE NULL DEFAULT NULL,
  `pr_image` VARCHAR(255) NULL DEFAULT NULL,
  `pr_rating` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`pr_id`),
  UNIQUE INDEX `pr_code_UNIQUE` (`pr_code` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 22
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `smart_shop`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart_shop`.`user` (
  `us_id` INT(11) NOT NULL AUTO_INCREMENT,
  `us_firstname` VARCHAR(45) NULL DEFAULT NULL,
  `us_lastname` VARCHAR(45) NULL DEFAULT NULL,
  `us_age` INT(11) NULL DEFAULT NULL,
  `us_gender` VARCHAR(6) NULL DEFAULT NULL,
  `us_contact_number` BIGINT(10) NULL DEFAULT NULL,
  `us_user_id` VARCHAR(15) NULL DEFAULT NULL,
  `us_password` VARCHAR(255) NULL DEFAULT NULL,
  `us_user_type` VARCHAR(1) NULL DEFAULT NULL,
  `us_status` VARCHAR(1) NULL DEFAULT NULL,
  `us_secret_question_1` VARCHAR(50) NULL DEFAULT NULL,
  `us_secret_answer_1` VARCHAR(50) NULL DEFAULT NULL,
  `us_secret_question_2` VARCHAR(50) NULL DEFAULT NULL,
  `us_secret_answer_2` VARCHAR(50) NULL DEFAULT NULL,
  `us_secret_question_3` VARCHAR(50) NULL DEFAULT NULL,
  `us_secret_answer_3` VARCHAR(50) NULL DEFAULT NULL,
  PRIMARY KEY (`us_id`),
  UNIQUE INDEX `us_user_id_UNIQUE` (`us_user_id` ASC))
ENGINE = InnoDB
AUTO_INCREMENT = 30
DEFAULT CHARACTER SET = utf8;


-- -----------------------------------------------------
-- Table `smart_shop`.`bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart_shop`.`bill` (
  `bl_id` INT(11) NOT NULL AUTO_INCREMENT,
  `bl_date` DATE NULL DEFAULT NULL,
  `bl_us_id` INT(11) NULL DEFAULT NULL,
  `bl_pr_id` INT(11) NULL DEFAULT NULL,
  `bl_quantity` INT(11) NULL DEFAULT NULL,
  `bl_rate` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`bl_id`),
  INDEX `bl_us_id_idx` (`bl_us_id` ASC),
  INDEX `bl_pr_id_idx` (`bl_pr_id` ASC),
  CONSTRAINT `bl_pr_id`
    FOREIGN KEY (`bl_pr_id`)
    REFERENCES `smart_shop`.`product` (`pr_id`),
  CONSTRAINT `bl_us_id`
    FOREIGN KEY (`bl_us_id`)
    REFERENCES `smart_shop`.`user` (`us_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 55
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `smart_shop`.`offers`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart_shop`.`offers` (
  `of_id` INT(11) NOT NULL AUTO_INCREMENT,
  `of_day` VARCHAR(45) NULL DEFAULT NULL,
  `of_pr_type` VARCHAR(45) NULL DEFAULT NULL,
  `of_discount` INT(11) NULL DEFAULT NULL,
  `of_text` VARCHAR(45) NULL DEFAULT NULL,
  PRIMARY KEY (`of_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 16
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `smart_shop`.`role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart_shop`.`role` (
  `ro_id` INT(11) NOT NULL,
  `ro_name` VARCHAR(45) NULL DEFAULT NULL,
  `ro_type` VARCHAR(1) NULL DEFAULT NULL,
  PRIMARY KEY (`ro_id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `smart_shop`.`user_role`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `smart_shop`.`user_role` (
  `ur_id` INT(11) NOT NULL AUTO_INCREMENT,
  `ur_us_id` INT(11) NULL DEFAULT NULL,
  `ur_ro_id` INT(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ur_id`),
  INDEX `ur_us_id` (`ur_us_id` ASC),
  INDEX `ur_ro_id` (`ur_ro_id` ASC),
  CONSTRAINT `user_role_ibfk_1`
    FOREIGN KEY (`ur_us_id`)
    REFERENCES `smart_shop`.`user` (`us_id`),
  CONSTRAINT `user_role_ibfk_2`
    FOREIGN KEY (`ur_ro_id`)
    REFERENCES `smart_shop`.`role` (`ro_id`))
ENGINE = InnoDB
AUTO_INCREMENT = 17
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
