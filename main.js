let cantidad = document.getElementById('cantidad');
let boton = document.getElementById('generar');
let contrasena = document.getElementById('contrasena');
let mensajeError = document.getElementById('mensajeError');

const mayusculas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const minusculas = 'abcdefghijklmnopqrstuvwxyz';
const numeros = '0123456789';
const especiales = '!@#$%^&*()';
const cadenaCaracteres = mayusculas + minusculas + numeros + especiales;

function generar(){
    let numeroDigitado = parseInt (cantidad.value);
    

    let password='';
    password += mayusculas[Math.floor(Math.random() * mayusculas.length)];
    password += numeros[Math.floor(Math.random() * numeros.length)];
    password += especiales[Math.floor(Math.random() * especiales.length)];

    
    for (let i = 3; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        password += caracterAleatorio;
    }
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    contrasena.value = password;  
}
function validarCantidad() {
    let numeroDigitado = parseInt(cantidad.value);

    // Deshabilitar el botón si el campo está vacío o es menor que 8
    if (!cantidad.value || isNaN(numeroDigitado) || numeroDigitado < 8) {
        boton.disabled = true;
        mensajeError.textContent = 'La cantidad de caracteres debe ser mayor que 8.';
    } else {
        boton.disabled = false;
        mensajeError.textContent = '';
    }
}
cantidad.addEventListener('input', validarCantidad);

boton.addEventListener('click', generar);
validarCantidad();

function limpiar() {
    document.getElementById("cantidad").value = "";
    document.getElementById("contrasea").value = "";
}











