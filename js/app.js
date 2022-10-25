let dinero = 0;
let balance = 0;
let operacion = 0;


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
    operacion = Number(prompt("Ingrese el número de operación:\n1-Mostrar Balance\n2-Cargar un ingreso\n3-Cargar un egreso"));
    while (operacion!=1 && operacion!=2 && operacion!=3)
        operacion = Number(prompt("El número ingresado es incorrecto, por favor seleccione una de las siguientes opciones (Entre 1-3):\n1-Mostrar Balance\n2-Cargar un ingreso\n3-Cargar un egreso"));
    return operacion;
}

function solicitarIngreso(id){
        let dinero = Number(prompt("Ingrese cantidad de dinero para aumentar su balance: "))
        while (dinero<0)
            dinero = Number(prompt("Ingrese cantidad mayor a 0 por favor :): "))
        usuarioPrueba[id].balance += dinero;
    }

function solicitarNombreUsuario(){
    let nombreUsuario = prompt("Ingrese nombre de usuario: "); 
    return nombreUsuario;
}

function mostrarBalance(nombreUsuario){
    // TO DO - Mostrar el balance dependiendo el id del usuario.
}

const usuarioPrueba = new Usuario(1, "Prueba", 10000);


console.log(usuarioPrueba);

usuarioPrueba.bienvenida();
usuarioPrueba.mostrarBalance();

solicitarOperacion();
if (operacion==2){
    solicitarIngreso();
}

usuarioPrueba.mostrarBalance();


const USUARIOS = {
    1: {
        nombre: 'Brian',
        balance: '',
    }

}