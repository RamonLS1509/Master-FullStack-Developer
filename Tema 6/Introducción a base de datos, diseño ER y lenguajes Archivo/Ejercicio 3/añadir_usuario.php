<?php include("conexion.php"); ?>

<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Añadir Usuario</title>
</head>
<body>
    <h2>Registrar Usuario</h2>
    <form method="POST">
        Nombre: <input type="text" name="nombre" required><br>
        Apellido: <input type="text" name="apellido" required><br>
        Email: <input type="email" name="email" required><br>
        <button type="submit" name="guardar">Guardar</button>
    </form>

<?php
if (isset($_POST['guardar'])) {
    $nombre   = $_POST['nombre'];
    $apellido = $_POST['apellido'];
    $email    = $_POST['email'];

    $sql = "INSERT INTO Cliente (nombre, apellido, email) VALUES ('$nombre', '$apellido', '$email')";
    
    if ($conn->query($sql) === TRUE) {
        echo "Usuario registrado con éxito.";
    } else {
        echo "Error: " . $conn->error;
    }
}
?>
</body>
</html>
