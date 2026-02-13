CREATE DATABASE startup;

USE startup;

CREATE TABLE veiculo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(50) NOT NULL,
    modelo VARCHAR(50) NOT NULL,
    ano INT NOT NULL,
    status_bateria INT NOT NULL,
    usuario_cadastro INT ---,
    usuario_atualizacao INT ---,
);

SELECT * FROM veiculo;