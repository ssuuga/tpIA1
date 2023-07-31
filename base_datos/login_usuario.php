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

// Obtener los datos del formulario de inicio de sesión
$nombre_usuario = $_POST['nombre_usuario'];
$contrasena = $_POST['contrasena'];

// Consulta SQL para verificar el usuario y la contraseña
$sql = "SELECT * FROM usuarios WHERE nombre_usuario = '$nombre_usuario' AND contrasena = '$contrasena'";
$resultado = $conn->query($sql);

// Verificar si la consulta devuelve un resultado
if ($resultado->num_rows > 0) {
    // El inicio de sesión es exitoso
    echo "Inicio de sesión exitoso";
} else {
    // El inicio de sesión ha fallado
    echo "Nombre de usuario o contraseña incorrectos";
}

$conn->close();
?>