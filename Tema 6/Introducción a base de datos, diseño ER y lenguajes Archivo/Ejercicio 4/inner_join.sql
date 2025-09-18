SELECT 
    c.id_cliente,
    c.nombre AS nombre_cliente,
    c.apellido AS apellido_cliente,
    p.id_pedido,
    p.fecha,
    p.estado
FROM Cliente c
INNER JOIN Pedido p ON c.id_cliente = p.id_cliente
ORDER BY c.id_cliente, p.fecha;