<?php include("conexion.php"); ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Lista de Productos</title>
</head>
<body>
    <h2>Productos</h2>
    <table border="1" cellpadding="5">
        <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Stock</th>
        </tr>
        <?php
        $sql = "SELECT * FROM Producto";
        $result = $conn->query($sql);

        while ($row = $result->fetch_assoc()) {
            echo "<tr>
                    <td>".$row['id_producto']."</td>
                    <td>".$row['nombre']."</td>
                    <td>".$row['precio']."</td>
                    <td>".$row['stock']."</td>
                  </tr>";
        }
        ?>
    </table>
</body>
</html>
