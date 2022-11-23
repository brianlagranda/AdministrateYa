class Usuario{
    constructor(id, nombre, gastos, balance) {
        this.id = id;
        this.nombre = nombre;
        this.gastos = gastos;
        this.balance = balance;        
    }
}

const usuarios = [];
usuarios.push(new Usuario(1, "Brianasdasd", {Luz: -100, Agua: -200, Gas: -300, Entretenimiento: -500, Salidas: -600, Mascota: -1000, Auto: -200, Comida: -700}, 24000))
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
          inputLabel: 'Usuarios: Brianasdasd, Jorge, Miriam.',
          inputPlaceholder: 'Ingresa tu nombre de usuario',
          inputAttributes: {
            autocapitalize: 'off'
          },
          showCancelButton: false,
          confirmButtonText: 'Log In'
       })

        // Si el usuario no es válido, vuelvo a pedir el nombre de usuario.
        // Retorno: usuarioActual.

        if(!usuarioValido(nombreUsuario))
            elegirUsuario();
        else{
            usuarioActual = nombreUsuario;
            console.log(usuarioActual);
            return usuarioActual;  
        }
    })()
}



function usuarioValido(nombreUsuario){
    return usuarios.find(usuario => usuario.nombre == nombreUsuario)
}

function bienvenida(usuario){
    bienvenidaUsuario.innerHTML = `
                                    
                                    <h1>
                                        Bienvenid@, ${usuario.nombre}!
                                    </h1>
            
                                `
}

function mostrarGastos(usuario){
    let gastos = usuario.gastos
    for (const gasto in gastos){
            let div = document.createElement("div");
            div.className = "gastos";
            div.innerHTML = `${gasto}: ${gastos[gasto]}`;
            gastosUsuario.appendChild(div);
    }
}

function mostrarBalance(usuario){
    balanceUsuario.innerHTML = `
                                
                                <span>$${usuario.balance}</span>
    
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
            console.log(usuario.balance);
            usuario.balance += Number(dinero);
            Swal.fire(`Balance actual: ${usuario.balance}`)
        }
        
        })()
});


























function renderUsuarios(){
    container.innerHTML = usuarios.map(user => `<h3>${user.nombre}</h3>`)
}

function capturarNombreUsuario(){
    let formInputUsuario = document.getElementById("form-inputUsuario")
    let inputUsuario = document.getElementById("inputUsuario");
    let nombreUsuario = inputUsuario.value;
    console.log(nombreUsuario);
    formInputUsuario.style.display = "none";
    return nombreUsuario;
}


elegirUsuario();
bienvenida(usuarios[2]);
mostrarGastos(usuarios[2]);
mostrarBalance(usuarios[2]);