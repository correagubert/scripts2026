CREATE SCHEMA lanchonete_bola ;

USE `lanchonete_bola` ;

CREATE TABLE `lanchonete_bola`.`produto` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(45) NULL,
  `valor` DECIMAL(7,2) NULL,
  `descricao` VARCHAR(255) NULL,
  `ativo` INT NULL,
  PRIMARY KEY (`id`));

INSERT INTO `lanchonete_bola`.`produto` (`nome`, `valor`, `descricao`, `ativo`) VALUES
('X-Burger', 15.90, 'Hambúrguer com queijo, alface e tomate', 1),
('X-Salada', 17.50, 'Hambúrguer com queijo, presunto, alface e tomate', 1),
('X-Bacon', 19.90, 'Hambúrguer com queijo, bacon crocante e molho especial', 1),
('X-Tudo', 24.90, 'Hambúrguer completo com bacon, ovo, presunto e queijo', 1),
('Misto Quente', 10.00, 'Pão com presunto e queijo na chapa', 1),
('Cachorro-Quente', 12.50, 'Pão com salsicha, molho, milho e batata palha', 1),
('Batata Frita P', 9.00, 'Porção pequena de batata frita crocante', 1),
('Batata Frita M', 14.00, 'Porção média de batata frita crocante', 1),
('Batata Frita G', 18.00, 'Porção grande de batata frita crocante', 1),
('Refrigerante Lata', 6.00, 'Refrigerante lata 350ml (sabores variados)', 1),
('Refrigerante 2L', 12.00, 'Refrigerante garrafa 2 litros (sabores variados)', 1),
('Suco Natural', 8.50, 'Suco natural da fruta (consultar sabores)', 1),
('Água Mineral', 4.00, 'Água mineral sem gás 500ml', 1),
('Água com Gás', 4.50, 'Água mineral com gás 500ml', 1),
('Milkshake Chocolate', 16.00, 'Milkshake cremoso sabor chocolate', 1),
('Milkshake Morango', 16.00, 'Milkshake cremoso sabor morango', 1),
('Milkshake Baunilha', 16.00, 'Milkshake cremoso sabor baunilha', 1),
('Açaí 300ml', 14.50, 'Açaí na tigela 300ml com granola', 1),
('Açaí 500ml', 19.90, 'Açaí na tigela 500ml com granola e leite condensado', 1),
('Combo X-Burguer', 29.90, 'X-Burguer + Batata Frita P + Refrigerante Lata', 1);