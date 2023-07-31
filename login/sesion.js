// Referencia al formulario de registro
const registroForm = document.getElementById('registro-form');

// Agregar evento al enviar el formulario de registro
registroForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  // Obtener los valores ingresados por el usuario
  const nombre = registroForm.nombre.value;
  const contrasena = registroForm.contrasena.value;
  const confirmContrasena = registroForm['confirm-contrasena'].value;

  // Verificar si las contraseñas coinciden
  if (contrasena !== confirmContrasena) {
    alert('Las contraseñas no coinciden. Inténtalo nuevamente.');
    return;
  }

  // Crear un objeto con los datos del usuario
  const usuario = {
    nombre,
    contrasena
  };

  try {
    // Realizar la petición de registro al servidor
    const response = await fetch('/registrar_usuario.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(usuario)
    });

    const data = await response.json();

    if (data.success) {
      alert('Registro exitoso. Ahora puedes iniciar sesión.');
      // Redireccionar al usuario a la página de inicio de sesión
      window.location.href = 'sesion.html';
    } else {
      alert('Error en el registro. Inténtalo nuevamente.');
    }
  } catch (error) {
    console.error('Error al registrar el usuario:', error);
    alert('Ocurrió un error en el servidor. Inténtalo más tarde.');
  }
});
