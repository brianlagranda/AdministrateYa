class Usuario{
    constructor(id, nombre, gastos, balance) {
        this.id = id;
        this.nombre = nombre;
        this.gastos = gastos;
        this.balance = balance;        
    }
}

const usuarios = [];
usuarios.push(new Usuario(1, "Brian", {Luz: -100, Agua: -200, Gas: -300, Entretenimiento: -500, Salidas: -600, Mascota: -1000, Auto: -200, Comida: -700}, 24000))
usuarios.push(new Usuario(2, "Jorge",{Luz: -1100, Agua: -2200, Gas: -4300, Entretenimiento: -5400, Salidas: -1600, Mascota: -31000, Auto: -3200, Comida: -5700}, 30000))
usuarios.push(new Usuario(3, "Miriam",{Luz: -5500, Agua: -3200, Gas: -5300, Entretenimiento: -5200, Salidas: -2600, Mascota: -5000, Auto: -4200, Comida: -8700}, -5000))

// VARIABLES INTERFAZ USUARIO

const bienvenidaUsuario = document.getElementById("bienvenidaUsuario");
const gastosUsuario = document.getElementById("gastosUsuario");
const balanceUsuario = document.getElementById("balanceUsuario");
const btnMinus = document.getElementById("btn-minus");
const btnPlus = document.getElementById("btn-plus");

let usuarioActual = elegirUsuario();

function elegirUsuario(){
    (async () =>{

        const { value: nombreUsuario } = await Swal.fire({
          title: 'Login usuario',
          input: 'text',
          inputLabel: 'Usuarios: Brian, Jorge, Miriam.',
          inputPlaceholder: 'Ingresa tu nombre de usuario',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: false,
          confirmButtonText: 'Log In'
       })

        // Si el usuario no es válido, vuelvo a pedir el nombre de usuario.
        // Retorno: usuarioActual.

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
    bienvenidaUsuario.innerHTML = `
                                    
                                    <h1>
                                        Bienvenid@, ${usuarioActual.nombre}!
                                    </h1>
            
                                `
}

function renderGastos(){
    let gastos = usuarioActual.gastos
    for (const gasto in gastos){
            let div = document.createElement("div");
            div.className = "gastos";
            div.innerHTML = `${gasto}: ${gastos[gasto]}`;
            gastosUsuario.appendChild(div);
    }
}

function renderBalance(){
    balanceUsuario.innerHTML = `
                                
                                <span>$${usuarioActual.balance}</span>
    
                            `
}

// FUNCIONALIDAD BOTÓN + PARA AGREGAR SALDO AL BALANCE.

btnPlus.addEventListener('click', function(){
    (async () => {

        const { value: dinero } = await Swal.fire({
          title: 'Aumentar balance',
          input: 'number',
          inputLabel: 'Dinero',
          inputPlaceholder: 'Ingresa dinero',
          inputAttributes: {
            maxlength: 10,
            autocapitalize: 'off',
            autocorrect: 'off'
          }
        })
        
        if (dinero) {
            usuarioActual.balance += Number(dinero);
            renderBalance(usuarioActual);
            Swal.fire(`Balance actual: ${usuarioActual.balance}`)
        }
        
        })()
});

function renderUsuarios(){
    container.innerHTML = usuarios.map(user => `<h3>${user.nombre}</h3>`)
}

function main(){
    renderBienvenida(usuarioActual);
    renderGastos(usuarioActual);
    renderBalance(usuarioActual);    
}