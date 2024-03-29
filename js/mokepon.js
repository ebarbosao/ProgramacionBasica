//Variables Globales
let ataqueJugador

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

function aleatorio(min,max) {
    return Math.floor(Math.random() * (max - min + 1)+ min)
}

function seleccionarMascotaEnemigo(){
    let num = aleatorio(1,3)
    let spamMascotaEnemigo = document.getElementById('mascota-enemigo')

    if (num == 1) {
        spamMascotaEnemigo.innerHTML = 'Hipodoge'
    }
    else if (num == 2) {
        spamMascotaEnemigo.innerHTML = 'Capipepo'
    }
    else {
        spamMascotaEnemigo.innerHTML = 'Ratigueya   '
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
    let spanAtaqueJugador = document.getElementById('ataque-jugador')
    ataqueJugador = 'Fuego'
    spanAtaqueJugador.innerHTML = ataqueJugador
}

function ataqueAgua() {
    ataqueJugador = 'Agua'
}

function ataqueTierra() {
    ataqueJugador = 'Tierra'
}

// Escucha cuando el contenido de la pagina se ha cargado, evita tener que poner el script dentro del body
window.addEventListener('load',iniciarJuego)