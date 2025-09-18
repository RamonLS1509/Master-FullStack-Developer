<?php include("conexion.php"); ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Actualizar Cliente</title>
</head>
<body>
    <h2>Actualizar Correo de Cliente</h2>
    <form method="POST">
        ID Cliente: <input type="number" name="id_cliente" required><br>
        Nuevo Email: <input type="email" name="email" required><br>
        <button type="submit" name="actualizar">Actualizar</button>
    </form>

<?php
if (isset($_POST['actualizar'])) {
    $id_cliente = $_POST['id_cliente'];
    $email      = $_POST['email'];

    $sql = "UPDATE Cliente SET email='$email' WHERE id_cliente=$id_cliente";

    if ($conn->query($sql) === TRUE) {
        echo "Correo actualizado correctamente.";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
</body>
</html>
