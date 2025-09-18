SELECT 
    c.nombre AS cliente,
    c.apellido AS apellido,
    p.id_pedido,
    p.fecha,
    pr.nombre AS producto,
    dp.cantidad,
    dp.precio_unitario,
    (dp.cantidad * dp.precio_unitario) AS total_producto
FROM Cliente c
INNER JOIN Pedido p ON c.id_cliente = p.id_cliente
INNER JOIN DetallePedido dp ON p.id_pedido = dp.id_pedido
INNER JOIN Producto pr ON dp.id_producto = pr.id_producto
ORDER BY c.id_cliente, p.id_pedido;
