CREATE DATABASE IF NOT EXISTS `faxina_db`;
USE `faxina_db` ;

CREATE TABLE `cliente` (
  `idcliente` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(45),
  `email` VARCHAR(45),
  `senha` VARCHAR(45),
  `cpf` VARCHAR(45) UNIQUE,
  `endereco` VARCHAR(45),
  `telefone` VARCHAR(45));

CREATE TABLE `profissional` (
  `idprofissional` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(45),
  `email` VARCHAR(45),
  `senha` VARCHAR(45),
  `cpf` VARCHAR(45) UNIQUE,
  `endereco` VARCHAR(45),
  `telefone` VARCHAR(45),
  `ativo` BOOLEAN);

CREATE TABLE `agendamento` (
  `idagendamento` INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  `data_agendamento` DATE,
  `data_criacao` DATE,
  `data_finalizado` DATE,
  `ativo` BOOLEAN,
  `descricao` VARCHAR(255),
  `cliente_idcliente` INT NOT NULL,
  `profissional_idprofissional` INT NOT NULL,
    FOREIGN KEY (`cliente_idcliente`)
    REFERENCES `faxina_db`.`cliente` (`idcliente`),
    FOREIGN KEY (`profissional_idprofissional`)
    REFERENCES `faxina_db`.`profissional` (`idprofissional`));
    
INSERT INTO cliente (nome, email, senha, cpf, endereco, telefone)
VALUES
("Nicolas", "nico@email.com", "senhabacana", "1234678900", 'Pedro Soares 62', '4832220768');

INSERT INTO profissional (nome, email, senha, cpf, endereco, telefone, ativo)
VALUES
('Neide', 'neide@email.com', 'senhalegal', '1234678900', 'Anita Garibaldi 42', '4832220768', 1);

INSERT INTO agendamento (data_agendamento, data_criacao, data_finalizado, ativo, descricao, cliente_idcliente, profissional_idprofissional)
VALUES
('2026-04-24', '2026-04-23', '2026-04-24', 1, 'Serviço de higienização e dedetização', 1, 1);

SELECT * FROM cliente;
SELECT * FROM profissional;
SELECT * FROM agendamento;