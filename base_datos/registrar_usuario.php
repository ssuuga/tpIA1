<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "usuarios";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos del formulario de registro
$nombre_usuario = $_POST['nombre_usuario'];
$contrasena = $_POST['contrasena'];

// Consulta SQL para verificar si el nombre de usuario ya existe
$sql = "SELECT * FROM usuarios WHERE nombre_usuario = '$nombre_usuario'";
$resultado = $conn->query($sql);

// Verificar si la consulta devuelve un resultado
if ($resultado->num_rows > 0) {
    // El nombre de usuario ya existe, no se puede registrar
    echo "El nombre de usuario ya está en uso";
} else {
    // Insertar el nuevo usuario en la tabla
    $sql_insert = "INSERT INTO usuarios (nombre_usuario, contrasena) VALUES ('$nombre_usuario', '$contrasena')";
    if ($conn->query($sql_insert) === TRUE) {
        echo "Registro exitoso";
    } else {
        echo "Error al registrar el usuario: " . $conn->error;
    }
}

$conn->close();
?>