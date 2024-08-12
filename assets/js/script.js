/* function pintar(){
    ele.style.backgroundColor = 'yellow'
    }
    const ele = document.getElementById("ele1")
    ele.addEventListener("click", pintar);
    */

/*codigo midificado segun los puntos 2.2 y 2.3 del ejercicio**/
function pintar(elemento, color = 'green') {
    elemento.style.backgroundColor = color;
}
const ele = document.getElementById("ele1");

ele.addEventListener("click", function() {
    ele.style.backgroundColor = 'yellow';
});

pintar(ele);

