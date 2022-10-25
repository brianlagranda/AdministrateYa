function bienvenida(){
    let nombreUsuario = prompt("Ingrese su nombre: ");
    let saludo = alert(`Bienvenido, ${nombreUsuario}`);
    return saludo;
}

bienvenida();