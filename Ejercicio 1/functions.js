var user_data = [
    {
        "mail": "admin@example.com",
        "name": "Alan Brito Delgado",
        "pass": "Macoy123",
        "role": "administrador"
    },
    {
        "mail": "user@example.com",
        "name": "Debora Flores Del Campo",
        "pass": "Qwerty123",
        "role": "usuario"
    }
];

function validar(mail, pass) {
    usuario = user_data.forEach((usuario) => {
        if (usuario["mail"] == mail) {
            // if (usuario["pass"] == pass) {
            //     console.log(true, "If contraseña")
            //     return true;
            // };
            return usuario

        } else {
            return false
        };
    });

    console.log(usuario, "Primero")
    return usuario
};

function login() {
    let mail = document.getElementById("mail").value;
    let pass = document.getElementById("pass").value;
    let valido = validar(mail, pass);
    console.log(valido, "Segundo")

    if (valido) {
        sessionStorage.setItem("usuario", valido)
        window.location.href = "dashboard.html";
    } else {
        alert("Datos inválidos.")
    };
};
