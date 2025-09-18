DELIMITER //
CREATE PROCEDURE insertar_cliente ( 
    id INT, 
    nombre VARCHAR(100), 
    email VARCHAR(100) 
) 
BEGIN 
    INSERT INTO clientes (id, nombre, email) 
    VALUES ( id, nombre, email); 
END;//
DELIMITER ;




call insertar_cliente(1, 'Ramon', 'ramon@ebis.com');