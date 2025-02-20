
/// MI CODIGO DE ESTUDIO
/*
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Escribre un número del 1 al 10';
*/
//CLASE DE LISTA
let listaNumerosSorteados = []; // Estp es con el objetivo de jugar el numero sorteado nuevamente
 
let numeroSecreto = 0;

let intentos = 1;
let numeroMaximo = 10;

// Funcion hace un accion --- validar el usuario
//BOTONES
function verificarIntento() {
    while (intentos<3) {
        //alert('Click desde la boton')
        //let numeroDeUsuario = document.querySelector('input'); //input es una etiqueta del codigo en 
        
        let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // reemplaza el quiery selector y realiza la identenficacion del INPUT por un ID
        console.log(typeof(numeroDeUsuario));
        console.log(numeroDeUsuario);
        console.log(typeof(numeroSecreto));
        console.log(`numeroSecreto ${numeroSecreto}`);
        console.log(numeroSecreto === numeroDeUsuario); //=== tiene que ser igual valor y tipo de dato
        console.log(`conteo intentos: ${intentos}`)

        if (numeroDeUsuario === numeroSecreto) {
            asignarTextoElemento('p', `Acertaste el numero!!!, tus intentos son ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
            //desactiva el boton reiniciar
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if (numeroDeUsuario > numeroSecreto) {
                asignarTextoElemento('p', 'El numero es menor');
            } else {
                asignarTextoElemento('p', 'El numero es mayor');
            }
        }

        intentos++;
        limpiarCaja();
        return;
        
    }
    asignarTextoElemento('p', `Se agotaron los intentos, numero de intentos ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}. Inicia nuevamente`)
    document.getElementById('reiniciar').removeAttribute('disabled');

}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo) + 1;
    console.log(`Lista generada: ${listaNumerosSorteados}`)
    //return Math.floor(Math.random()*10) + 1; se borra por la clase lista
    //return numeroSecreto; 
    //Clase Lista, El numero generado esta incluido en la lista
    //Comprobar si sorteo todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Todos lo numeros posibles fueron sorteados')
    } else {
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // no es un texto es objeto
    elementoHTML.innerHTML = texto;
}

//FUNCION PARA LIMPIAR INPUT O CAJA
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; //Forma simplificada
}

function condicionesInciales() {
    //Conglomeramos todo
    asignarTextoElemento('h1', 'Juego del numero secreto!');
    asignarTextoElemento('p', `Escribe un numero de 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
////BOTONES
function reiniciarJuego() {
    // Limipar la caja.  IMPORTANTE es reinicar el juego
    // Indicar mensaje de intervalo de numeros
    // Genera el numero aleatorio
    // Desahabilitar el boton del nuevo juego
    // Indicar el numero de intentos

    limpiarCaja();
    condicionesInciales();
    //Desahabilita el boton empezando un nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
    
}

// LA FUNCION RECIBE PARAMETROS. Elemento y Texto. son dos parametros.

// Redujimos hasta la mitad el codigo
condicionesInciales();




//////////////////
// LISTAS ES DE UN SOLO TIPO
//      TODOS LOS ARREGLO EMPIEZAN EN LA POSICION 0 ------> POSICION EN LA LISTA
///////////////////
