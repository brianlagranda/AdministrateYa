class Usuario{
    constructor(id, nombre, gastos, balance) {
        this.id = id;
        this.nombre = nombre;
        this.gastos = gastos;
        this.balance = balance;        
    }
}

const usuarios = [];
usuarios.push(new Usuario(1, "", {Luz: 0, Agua: 0, Gas: 0, Entretenimiento: 0, Salidas: 0, Mascota: -0, Auto: 0, Comida: 0}, 0))
usuarios.push(new Usuario(2, "Jorge",{Luz: -1100, Agua: -2200, Gas: -4300, Entretenimiento: -5400, Salidas: -1600, Mascota: -31000, Auto: -3200, Comida: -5700}, 30000))
usuarios.push(new Usuario(3, "Miriam",{Luz: -5500, Agua: -3200, Gas: -5300, Entretenimiento: -5200, Salidas: -2600, Mascota: -5000, Auto: -4200, Comida: -8700}, -5000))

function 

console.log(usuarios[0])

// // Put the object into storage
// localStorage.setItem('user', JSON.stringify(testObject));

// // Retrieve the object from storage
// var retrievedObject = localStorage.getItem('testObject');

// console.log('retrievedObject: ', JSON.parse(retrievedObject));

// 

// VARIABLES INTERFAZ USUARIO

const bienvenidaUsuario = document.getElementById("bienvenidaUsuario");
const gastosUsuario = document.getElementById("gastosUsuario");
const balanceUsuario = document.getElementById("balanceUsuario");
const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");

let gastoActual = "";
let usuarioActual = elegirUsuario();


// ALERTA CON OPCIONES PARA SELECCIONAR usuarioActual.

function elegirUsuario(){
    (async () =>{
        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                'Brian': 'Brian',
                'Jorge': 'Jorge',
                'Miriam': 'Miriam'
                })
            }, 1000)
            })
      
        const { value: nombreUsuario } = await Swal.fire({
        title: 'Selecciona tu usuario',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
            if (!value) {
            return 'Necesitas seleccionar un usuario'
            }
        }
        })
      
        if (!usuarioValido(nombreUsuario))
            elegirUsuario();
        else
            return main();
    })()
}

function usuarioValido(nombreUsuario){
    usuarioActual = usuarios.find(usuario => usuario.nombre == nombreUsuario);
    return usuarioActual;
}

function renderBienvenida(){
    let h1 = document.createElement("h1");
    h1.className = "bienvenida";
    h1.innerHTML = `Bienvenid@, ${usuarioActual.nombre}!`;
    bienvenidaUsuario.appendChild(h1);
}

function renderGastos(){
    let gastos = usuarioActual.gastos;
    for (const gasto in gastos){
            let div = document.createElement("div");
            div.className = "gastos";
            div.innerHTML = `${gasto}: ${gastos[gasto]}`;
            gastosUsuario.appendChild(div);
    }
}

function renderBalance(){
    balanceUsuario.textContent = `

                                    Balance $${usuarioActual.balance}
                                    
                                `;
}

// FUNCIONALIDAD BOTÓN (+) PARA AGREGAR SALDO AL BALANCE.

btnPlus.addEventListener('click', ()=>{
    (async () => {

        const { value: dinero } = await Swal.fire({
          title: 'Aumentar balance',
          input: 'number',
          inputPlaceholder: 'Ingresa suma de dinero',
          inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'
          }
        });
        
        if (dinero>=0) {
            usuarioActual.balance += Number(dinero);
            renderBalance(usuarioActual);
            Swal.fire(`Balance actual: ${usuarioActual.balance}`);
        }
        
        })()
});

// FUNCIONALIDAD BOTÓN (-) PARA DESCONTAR SALDO DEL BALANCE Y CATEGORIZAR EL GASTO.

btnMinus.addEventListener('click', ()=>{
    (async () =>{
        const { value: dinero } = await Swal.fire({
            title: 'Ingresar gasto',
            input: 'number',
            inputPlaceholder: 'Ingresa suma de dinero',
            inputAttributes: {
              maxlength: 10,
              autocapitalize: 'off',
              autocorrect: 'off'
            }
          });
          
          if (dinero>=0) {
              usuarioActual.balance -= Number(dinero);
              renderBalance(usuarioActual);
          }

        const inputOptions = new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                'Luz': 'Luz',
                'Agua': 'Agua',
                'Gas': 'Gas',
                'Entretenimiento': 'Entretenimiento',
                'Salidas': 'Salidas',
                'Mascota': 'Mascota',
                'Auto': 'Auto',
                'Comida': 'Comida'
                })
            }, 1000)
            })
      
        const { value: gasto } = await Swal.fire({
        title: 'Selecciona la categoría del gasto',
        input: 'select',
        inputOptions: inputOptions,
        inputValidator: (value) => {
            if (!value) {
            return 'Necesitas seleccionar la categoria del gasto'
            }
        }
        })

        // TODO: FALTA IMPLEMENTAR GASTO SEGUN CATEGORIZACION ELEGIDA.         

    })()
});

// FALTA IMPLEMENTAR A QUE CATEGORIA VA EL GASTO

function categorizar(gasto){
    // TODO
}

// PROGRAMA PRINCIPAL DONDE SE RENDERIZA LA PANTALLA CON LOS DATOS DEL usuarioActual. 

function main(){
    renderBienvenida(usuarioActual);
    renderGastos(usuarioActual);
    renderBalance(usuarioActual);    
}