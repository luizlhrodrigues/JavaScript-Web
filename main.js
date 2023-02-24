function tocaSom (idElementoAudio) {

    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

let contador = 0;

//Enquanto
while (contador < 9) {
   listaDeTeclas[contador].onclick = tocaSom;

   contador ++ ;

   console.log(contador);
};


