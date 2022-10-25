class Usuario{
    constructor(id, nombreUsuario, balance) {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.balance = balance;
    }

    bienvenida(){
        console.log(`Bienvenid@, ${this.nombreUsuario}`);
    }

    mostrarBalance(){
        console.log(`Su Balance es: $ ${this.balance}`)
    }
}

function solicitarOperacion(){
    let operacion = Number(prompt("Ingrese el número de operación:\n1-Mostrar Balance\n2-Cargar un ingreso\n3-Cargar un egreso"));
    while (operacion!=1 && operacion!=2 && operacion!=3)
        operacion = Number(prompt("El número ingresado es incorrecto, por favor seleccione una de las siguientes opciones (Entre 1-3):\n1-Mostrar Balance\n2-Cargar un ingreso\n3-Cargar un egreso"));
    return operacion;
}

function solicitarNombreUsuario(){
    let nombreUsuario = prompt("Ingrese nombre de usuario: "); 
    return nombreUsuario;
}

function mostrarBalance(nombreUsuario){
    // TO DO - Mostrar el balance dependiendo el id del usuario.
}

const usuarioPrueba = new Usuario(1, "Prueba", 10000);

usuarioPrueba.bienvenida();
usuarioPrueba.mostrarBalance();

console.log(solicitarOperacion());
