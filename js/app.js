let nombreUsuario = "";
let balance = -0;
let ingresos = 0;
let dinero = 0;
let operacion = 0;

let luz = 0;
let agua = 0;
let gas = 0;
let entretenimiento = 0;
let regalos = 0;
let transporte = 0;
let vehiculo = 0;


//                          //
//          CLASES          //
//                          //
class Usuario{
    constructor(id, nombre, balance) {
        this.id = id;
        this.nombre = nombre;
        this.balance = balance;
    }
}

//                          //
//   FUNCIONES PRINCIPALES  //
//                          //

function solicitarNombre(){
    nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    while (!isNaN(nombreUsuario) || nombreUsuario === null || nombreUsuario === "")
        nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    return nombreUsuario;
}

function solicitarOperacion(){
    operacion = Number(prompt("Ingrese el número de operación:\n1-Mostrar Resumen Balance\n2-Cargar un ingreso\n3-Cargar un egreso\n4-Salir"));
    while (operacion!=1 && operacion!=2 && operacion!=3 && operacion!=4)
        operacion = Number(prompt("El número ingresado es incorrecto, por favor seleccione una de las siguientes opciones (Entre 1 y 4):\n1-Mostrar Balance\n2-Cargar un ingreso\n3-Cargar un egreso\n4-Salir"));
    return operacion;
}

function solicitarIngreso(){
        let dinero = Number(prompt("Ingrese cantidad de dinero para aumentar su balance: "))
        while (dinero<0)
            dinero = Number(prompt("Ingrese cantidad mayor a 0 por favor :): "))
        ingresos += dinero;
        USUARIO.balance += dinero;
    }

function solicitarEgreso(){
        let dinero = Number(prompt("Ingrese cantidad de dinero mayor a 0: "))
        while (dinero<0 && isNaN(dinero))
            dinero = Number(prompt("Ingrese cantidad de dinero mayor a 0 por favor :): "))
        let gasto = Number(prompt("Ingrese a que categoria corresponde el gasto:\n1-Luz\n2-Agua\n3-Gas\n4-Entretenimiento\n5-Regalos\n6-Transporte\n7-Vehiculo"))
        while (gasto!=1 && gasto!=2 && gasto!=3 && gasto!=4 && gasto!=5 && gasto!=6 && gasto!=7 )
            gasto = Number(prompt("Ingrese a que categoria corresponde el gasto:\n1-Luz\n2-Agua\n3-Gas\n4-Entretenimiento\n5-Regalos\n6-Transporte\n7-Vehiculo"))
        switch(gasto){
            case 1:
                luz+=dinero;
                break;
            case 2:
                agua+=dinero;
                break;
            case 3:
                gas+=dinero;
                break;
            case 4:
                entretenimiento+=dinero;
                break;
            case 5:
                regalos+=dinero;
                break;
            case 6:
                transporte+=dinero;
                break;
            case 7:
                vehiculo+=dinero; 
                break;               
        }
        USUARIO.balance -= dinero;
    }

function bienvenida(){
    console.log(`Bienvenid@, ${USUARIO.nombre}`);
}

function mostrarBalance(){
    console.log(`Su Balance actual es: $ ${USUARIO.balance}`);
    console.log("--------------------------------------------");
    console.log(`Sus ingresos totales: $ ${ingresos}`);
    console.log("--------------------------------------------");
    console.log(`Sus gastos fueron los siguientes:`);
    console.log(`Luz: -$ ${luz}`);
    console.log(`Agua: -$ ${agua}`);
    console.log(`Gas: -$ ${gas}`);
    console.log(`Entretenimiento: -$ ${entretenimiento}`);
    console.log(`Regalos: -$ ${regalos}`);
    console.log(`Transporte: -$ ${transporte}`);
    console.log(`Vehiculo: -$ ${vehiculo}`);

}



//                           //
//     PROGRAMA PRINCIPAL    //
//                           //
solicitarNombre()

let usuarios = ["BRIAN","LUCAS","JOSE"];
const USUARIO = new Usuario(1, nombreUsuario, balance);


if (usuarioEsta(nombreUsuario)){
    bienvenida();
}else{
    agregarUsuario(usuarios, nombreUsuario);
    bienvenida();
}

function agregarUsuario(usuarios, nombreUsuario){
    if (usuarios.includes(nombreUsuario.toUpperCase()))
    usuarios.push(nombreUsuario);
}

function usuarioEsta(nombreUsuario){
    for (let i=0; i<usuarios.length; i++){
        if (nombreUsuario.toUpperCase() == usuarios[i].toUpperCase())
            return true;
    }
    return false;
}
// Al ingresar la operacion 4, se corta la ejecucion del programa.

    while (operacion!=4){
        solicitarOperacion();
        if (operacion==1){
            console.clear();
            mostrarBalance();
        }
        if (operacion==2){
            solicitarIngreso();
            console.clear();
        }
        if (operacion==3){
            solicitarEgreso();
            console.clear();
        }
    } 

/* function capturarNombreUsuario(){
    let formInputUsuario = document.getElementById("form-inputUsuario")
    let inputUsuario = document.getElementById("inputUsuario");
    let nombreUsuario = inputUsuario.value;
    console.log(nombreUsuario);
    formInputUsuario.style.display = "none";
    return nombreUsuario;
} */


