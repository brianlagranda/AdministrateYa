class Usuario{
    constructor(id, nombreUsuario, balance) {
        this.id = id;
        this.nombreUsuario = nombreUsuario;
        this.balance = balance;
    }

    saludo(){
        console.log(`Bienvenido, ${this.nombreUsuario}`);
    }

    mostrarBalance(balance){
        console.log(`Balance: $ ${balance}`)
    }
}

function solicitarNombreUsuario(){
    let nombreUsuario = prompt("Ingrese nombre de usuario: "); 
    return nombreUsuario;
}

bienvenida();

function mostrarBalance(nombreUsuario){
    // TO DO - Mostrar el balance dependiendo el id del usuario.
}

const usuarioPrueba = new Usuario(1, "Prueba", 10000);

usuarioPrueba.mostrarBalance();