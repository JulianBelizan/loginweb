function login(){

    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("password").value;

    if (user == "jb" && pass == "123"){
        alert("Bienvenido!");
    }  else {
        alert("Acceso Denegado!");
    }
}