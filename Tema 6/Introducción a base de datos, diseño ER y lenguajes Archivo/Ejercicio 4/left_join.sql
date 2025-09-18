SELECT 
    pr.id_producto,
    pr.nombre AS producto,
    pr.precio,
    dp.id_pedido,
    dp.cantidad
FROM Producto pr
LEFT JOIN DetallePedido dp ON pr.id_producto = dp.id_producto
ORDER BY pr.id_producto;