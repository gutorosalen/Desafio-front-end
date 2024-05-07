const box = document.querySelector(".box-image");
const imagens = document.querySelectorAll(".box-image img");
 
let contador = 0;
function slider() {
  contador++;
   if(contador > imagens.length - 1){
    contador = 0;
   }
 
  box.style.transform = translate(0);

}

setInterval(slider, 2000);