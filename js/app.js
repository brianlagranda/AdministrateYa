class Usuario{
    constructor(id, nombre, gastos, balance) {
        this.id = id;
        this.nombre = nombre;
        this.gastos = gastos;
        this.balance = balance;        
    }
}

let usuarios = [];

usuarios.push(new Usuario(1, "Adrian", {Luz: 1, Agua: 1, Gas: 1, Entretenimiento: 1, Salidas: 1, Mascota: 1, Auto: 1, Comida: 1}, 0))
usuarios.push(new Usuario(2, "Brian", {Luz: 100, Agua: 200, Gas: 300, Entretenimiento: 500, Salidas: 600, Mascota: 1000, Auto: 200, Comida: 700}, 24000))
usuarios.push(new Usuario(3, "Jorge",{Luz: 1100, Agua: 2200, Gas: 4300, Entretenimiento: 5400, Salidas: 1600, Mascota: 31000, Auto: 3200, Comida: 5700}, 30000))
usuarios.push(new Usuario(4, "Miriam",{Luz: 5500, Agua: 3200, Gas: 5300, Entretenimiento: 5200, Salidas: 2600, Mascota: 5000, Auto: 4200, Comida: 8700}, -5000))

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
                'Adrian': 'Adrian',
                'Brian': 'Brian',
                'Jorge': 'Jorge',
                'Miriam': 'Miriam'
                })
            }, 1000)
        });

        const { value: nombreUsuario } = await Swal.fire({
        title: 'Selecciona tu usuario',
        input: 'radio',
        inputOptions: inputOptions,
        inputValidator: (value) => {
            if (!value) {
            return 'Necesitas seleccionar un usuario';
            }
        }
        });
        
        if (!usuarioValido(nombreUsuario))
            elegirUsuario();
        else{
            return main();
        }
    })();
}

function usuarioValido(nombreUsuario){
    if (localStorage.getItem("users")){
        usuarios = JSON.parse(localStorage.getItem("users"));
    };
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
    const data = [];
    for (const gasto in gastos){
        data.push(gastos[gasto]);
    }
    renderDonutChar(data);    
}

function renderBalance(){
    if(usuarioActual.balance>=0){
        balanceUsuario.classList.remove("redBalance");
        balanceUsuario.classList.add("greenBalance");
    }else{
        balanceUsuario.classList.remove("greenBalance");
        balanceUsuario.classList.add("redBalance");
    }
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
            localStorage.setItem("users", JSON.stringify(usuarios));
            Swal.fire(`Balance actual: ${usuarioActual.balance}`);
        }
        
    })();
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
            });

        const { value: gasto } = await Swal.fire({
        title: 'Selecciona la categoría del gasto',
        input: 'select',
        inputOptions: inputOptions,
        showCancelButton: true,
        inputValidator: (value) => {
            return new Promise((resolve) => {
                if(dinero){
                    if (usuarioActual.gastos.hasOwnProperty(value)) {
                        usuarioActual.gastos[value] -= dinero;
                        usuarioActual.balance -= Number(dinero);
                        localStorage.setItem("users", JSON.stringify(usuarios));
                        renderGastos(usuarioActual);
                        renderBalance(usuarioActual);
                        resolve()
                    } else {
                        resolve('Tenes que seleccionar un gasto de la lista :)')
                    }
                }else{
                    resolve('Necesitas ingresar un importe mayor a 0')
                }
            })
        }
        })
        
        if (gasto) {
            Swal.fire(`Seleccionaste el gasto: ${gasto}`)
        }      
    })()
});



// PROGRAMA PRINCIPAL DONDE SE RENDERIZA LA PANTALLA CON LOS DATOS DEL usuarioActual. 

function main(){
    renderBienvenida(usuarioActual);
    renderGastos(usuarioActual);
    renderBalance(usuarioActual);
}