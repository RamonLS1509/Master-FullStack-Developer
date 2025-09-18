CREATE DATABASE tienda;
USE tienda;

CREATE TABLE Cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(100) NOT NULL,
    apellido VARCHAR(100) NOT NULL,
    email VARCHAR(150) UNIQUE NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(255)
);

CREATE TABLE Producto (
    id_producto INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(150) NOT NULL,
    descripcion TEXT,
    precio DECIMAL(10,2) NOT NULL,
    stock INT NOT NULL
);

CREATE TABLE Pedido (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    fecha DATE NOT NULL,
    estado VARCHAR(50) NOT NULL,
    id_cliente INT NOT NULL,
    FOREIGN KEY (id_cliente) REFERENCES Cliente(id_cliente)
);

CREATE TABLE DetallePedido (
    id_pedido INT,
    id_producto INT,
    cantidad INT NOT NULL,
    precio_unitario DECIMAL(10,2) NOT NULL,
    PRIMARY KEY (id_pedido, id_producto),
    FOREIGN KEY (id_pedido) REFERENCES Pedido(id_pedido),
    FOREIGN KEY (id_producto) REFERENCES Producto(id_producto)
);

CREATE TABLE MetodoPago (
    id_metodo_pago INT AUTO_INCREMENT PRIMARY KEY,
    tipo VARCHAR(50) NOT NULL
);


----------------------------------------------------------------
-- Insertar Clientes
INSERT INTO Cliente (nombre, apellido, email, telefono, direccion) VALUES
('Juan', 'Pérez', 'juan.perez@email.com', '555123456', 'Calle 1 #123'),
('María', 'Gómez', 'maria.gomez@email.com', '555234567', 'Calle 2 #456'),
('Carlos', 'Ramírez', 'carlos.ramirez@email.com', '555345678', 'Av. Principal #789'),
('Laura', 'Hernández', 'laura.hernandez@email.com', '555456789', 'Calle 4 #321'),
('Andrés', 'Martínez', 'andres.martinez@email.com', '555567890', 'Av. Reforma #654'),
('Ana', 'López', 'ana.lopez@email.com', '555678901', 'Calle 6 #987'),
('Pedro', 'Torres', 'pedro.torres@email.com', '555789012', 'Av. Las Flores #852'),
('Lucía', 'Vargas', 'lucia.vargas@email.com', '555890123', 'Calle 8 #753'),
('Sofía', 'Cruz', 'sofia.cruz@email.com', '555901234', 'Av. Central #159'),
('Jorge', 'Morales', 'jorge.morales@email.com', '555012345', 'Calle 10 #951');

-- Insertar Productos
INSERT INTO Producto (nombre, descripcion, precio, stock) VALUES
('Laptop', 'Laptop de 15 pulgadas', 1200.50, 15),
('Mouse', 'Mouse inalámbrico', 25.00, 100),
('Teclado', 'Teclado mecánico', 80.00, 50),
('Monitor', 'Monitor 24 pulgadas', 200.00, 30),
('Impresora', 'Impresora multifuncional', 150.00, 20),
('Auriculares', 'Auriculares bluetooth', 60.00, 75),
('Tablet', 'Tablet 10 pulgadas', 300.00, 40),
('Disco Duro', 'Disco duro externo 1TB', 90.00, 60),
('Memoria USB', 'USB 64GB', 20.00, 120),
('Silla Gamer', 'Silla ergonómica gamer', 250.00, 10);

-- Insertar Pedidos
INSERT INTO Pedido (fecha, estado, id_cliente) VALUES
('2025-01-10', 'Pendiente', 1),
('2025-01-11', 'Pagado', 2),
('2025-01-12', 'Pendiente', 3),
('2025-01-13', 'Cancelado', 4),
('2025-01-14', 'Pagado', 5),
('2025-01-15', 'Pendiente', 6),
('2025-01-16', 'Pagado', 7),
('2025-01-17', 'Pendiente', 8),
('2025-01-18', 'Pagado', 9),
('2025-01-19', 'Pendiente', 10);

-- Insertar DetallePedido
INSERT INTO DetallePedido (id_pedido, id_producto, cantidad, precio_unitario) VALUES
(1, 1, 1, 1200.50),
(1, 2, 2, 25.00),
(2, 3, 1, 80.00),
(2, 4, 1, 200.00),
(3, 5, 1, 150.00),
(4, 6, 2, 60.00),
(5, 7, 1, 300.00),
(6, 8, 1, 90.00),
(7, 9, 3, 20.00),
(8, 10, 1, 250.00);

-- Insertar Métodos de Pago
INSERT INTO MetodoPago (tipo) VALUES
('Tarjeta de Crédito'),
('Tarjeta de Débito'),
('PayPal'),
('Transferencia Bancaria'),
('Efectivo'),
('Criptomoneda'),
('Cheque'),
('Pago Móvil'),
('Contra Entrega'),
('Vale de Regalo');

--------------------------------------------------------------------
--Consultar productos ordenados por precio y obtener los 5 primeros
SELECT id_producto, nombre, precio, stock
FROM Producto
ORDER BY precio ASC
LIMIT 5;

--Contar cuántos pedidos se realizaron en el mes actual
SELECT COUNT(*) AS total_pedidos_mes
FROM Pedido
WHERE MONTH(fecha) = 9
  AND YEAR(fecha) = 2025;
-----------------------------------------------------------------------
-- Realizar dos operaciones de inseccion en una tabla y hacer rollback, comprobar los datos
START TRANSACTION;

INSERT INTO Producto (nombre, descripcion, precio, stock)
VALUES ('Webcam HD', 'Cámara web 1080p', 70.00, 20);

INSERT INTO Producto (nombre, descripcion, precio, stock)
VALUES ('Router WiFi', 'Router de alta velocidad', 120.00, 15);

SELECT * FROM Producto;

ROLLBACK;

SELECT * FROM Producto;


-- Realizar un commit después de varias operaciones de inserción en una tabla
START TRANSACTION;

INSERT INTO Producto (nombre, descripcion, precio, stock)
VALUES ('Smartwatch', 'Reloj inteligente con monitor cardíaco', 150.00, 25);

INSERT INTO Producto (nombre, descripcion, precio, stock)
VALUES ('Proyector', 'Proyector portátil HD', 220.00, 10);

INSERT INTO Producto (nombre, descripcion, precio, stock)
VALUES ('Cámara DSLR', 'Cámara profesional de fotos', 800.00, 8);

COMMIT;

SELECT * FROM Producto;
--------------------------------------------------------------------------------------
CREATE USER 'usuario_tienda'@'localhost' IDENTIFIED BY 'MiClaveSegura123';

GRANT SELECT, INSERT, UPDATE, DELETE
ON tienda.Producto
TO 'usuario_tienda'@'localhost';

FLUSH PRIVILEGES;

----------------------------------------------------------------------------------------
CREATE OR REPLACE FUNCTION veces_vendido(p_id_producto IN NUMBER)
RETURN NUMBER
IS
    v_total NUMBER := 0;
BEGIN
    -- Contar cuántas veces se ha vendido el producto
    SELECT NVL(SUM(cantidad), 0)
    INTO v_total
    FROM DetallePedido
    WHERE id_producto = p_id_producto;

    RETURN v_total;
END;
