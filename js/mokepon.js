//Variables Globales
let ataqueJugador
let ataqueEnemigo
// funciones pueden acceder a variables globales
function seleccionarMascotaJugador () {
    let inputHipodoge = document.getElementById('hipodoge')
    let inputCapipepo = document.getElementById('capipepo')
    let inputRatigueya = document.getElementById('ratigueya')
    let spamMascotaJugador = document.getElementById('mascota-jugador')
    
    if (inputHipodoge.checked) {
        spamMascotaJugador.innerHTML = 'Hipodoge'
        seleccionarMascotaEnemigo()
    }
    else if (inputCapipepo.checked) {
        spamMascotaJugador.innerHTML = 'Capipepo'
        seleccionarMascotaEnemigo()
    }
    else if (inputRatigueya.checked) {
        spamMascotaJugador.innerHTML = 'Ratigueya'
        seleccionarMascotaEnemigo()
    }
    else {
        alert("No has seleccionado mascota")
    }

    
}

function seleccionarMascotaEnemigo(){
    let num = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (num == 1) {
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if (num == 2) {
        spanMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else {
        spanMascotaEnemigo.innerHTML = 'Ratigueya   '
    }
}

function iniciarJuego() {
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener('click',seleccionarMascotaJugador)

    let botonFuego = document.getElementById('boton-fuego')
    botonFuego.addEventListener('click',ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener('click',ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener('click',ataqueTierra)

}

function ataqueFuego() {
    ataqueJugador = 'Fuego'
    ataqueAleatorioEnemigo()
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
    ataqueAleatorioEnemigo()
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
    ataqueAleatorioEnemigo()
}

function ataqueAleatorioEnemigo (){
    let ataqueAleatorio = aleatorio(1,3)
    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua'
    } else {
        ataqueEnemigo = 'Tierra'
    }
    combate()
}

function combate() {
    if (ataqueEnemigo == ataqueJugador) {
        crearMensaje('Empate')
    } else if (ataqueJugador == 'Fuego' && ataqueEnemigo == 'Tierra') {
        crearMensaje('Ganaste')
    } else if (ataqueJugador == 'Agua' && ataqueEnemigo == 'Fuego') {
        crearMensaje('Ganaste')
    } else if (ataqueJugador == 'Tierra' && ataqueEnemigo == 'Agua') {
        crearMensaje('Ganaste')
    } else {
        crearMensaje('Perdiste')
    }
}

function crearMensaje (resultado) {
    let sectionMensajes = document.getElementById('mensajes')
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ' - ' + resultado
    sectionMensajes.appendChild(parrafo)
}

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)+ min)
}
// Escucha cuando el contenido de la pagina se ha cargado, evita tener que poner el script dentro del body
window.addEventListener('load',iniciarJuego)