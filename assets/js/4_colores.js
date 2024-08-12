
let colorGlobal;

// Función para cambiar el color de un div al hacer clic
function cambiarColorNegro(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById("divAzul").addEventListener("click", cambiarColorNegro);
document.getElementById("divRojo").addEventListener("click", cambiarColorNegro);
document.getElementById("divVerde").addEventListener("click", cambiarColorNegro);
document.getElementById("divAmarillo").addEventListener("click", cambiarColorNegro);

// Función para las letras del teclado
document.addEventListener('keydown', function(event) {
    if (event.key === 'a') {
        colorGlobal = 'pink';
        document.getElementById("key").style.backgroundColor = colorGlobal;
    } else if (event.key === 's') {
        colorGlobal = 'orange';
        document.getElementById("key").style.backgroundColor = colorGlobal;
    } else if (event.key === 'd') {
        colorGlobal = 'lightblue';
        document.getElementById("key").style.backgroundColor = colorGlobal;
    } else if (event.key === 'q') {
        const divMorado = document.createElement('div');
        divMorado.style.width = '200px';
        divMorado.style.height = '200px';
        divMorado.style.backgroundColor = 'purple';
        document.body.appendChild(divMorado);
    } else if (event.key === 'w') {
        const divGris = document.createElement('div');
        divGris.style.width = '200px';
        divGris.style.height = '200px';
        divGris.style.backgroundColor = 'gray';
        document.body.appendChild(divGris);
    } else if (event.key === 'e') {
        const divCafe = document.createElement('div');
        divCafe.style.width = '200px';
        divCafe.style.height = '200px';
        divCafe.style.backgroundColor = 'brown';
        document.body.appendChild(divCafe);
    }
});
