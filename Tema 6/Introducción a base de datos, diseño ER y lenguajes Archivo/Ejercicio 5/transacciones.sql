START TRANSACTION;

-- 1. Verificar stock del producto y bloquear la fila
SELECT stock, precio
FROM Producto
WHERE id_producto = 3
FOR UPDATE;

-- Supongamos que el stock es suficiente (ej. stock_actual >= 2)

-- 2. Insertar el pedido
INSERT INTO Pedido (fecha, estado, id_cliente)
VALUES (CURDATE(), 'Pendiente', 1);

-- Obtener el último id_pedido generado
SET @ultimo_pedido = LAST_INSERT_ID();

-- 3. Insertar el detalle del pedido
INSERT INTO DetallePedido (id_pedido, id_producto, cantidad, precio_unitario)
VALUES (@ultimo_pedido, 3, 2, (SELECT precio FROM Producto WHERE id_producto = 3));

-- 4. Actualizar stock del producto
UPDATE Producto
SET stock = stock - 2
WHERE id_producto = 3;

-- 5. Registrar el pago (opcional, si se paga al instante)
-- Supongamos que el cliente paga con id_metodo_pago = 1
INSERT INTO Pago (cantidad, fecha_pago, id_pedido, id_metodo_pago)
VALUES (2 * (SELECT precio FROM Producto WHERE id_producto = 3), CURDATE(), @ultimo_pedido, 1);

-- 6. Confirmar la transacción
COMMIT;
