
const ele1 = document.getElementById("ele1");
const ele2 = document.getElementById("ele2");

ele1.addEventListener('click',() => {
  pintar(ele1, 'yellow');
});

ele2.addEventListener('click',() => {
  pintar(ele2);
});

function pintar(elemento, color = 'green'){
    elemento.style.backgroundColor = color;
}







