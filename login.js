document.addEventListener("DOMContentLoaded", function() {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        // Aquí puedes implementar la lógica de autenticación
        // Por ahora, simplemente redirigimos a la página principal
        if (username && password) {
            window.location.href = "index.html";
        } else {
            alert("Nombre de usuario y contraseña son requeridos.");
        }
    });
});
