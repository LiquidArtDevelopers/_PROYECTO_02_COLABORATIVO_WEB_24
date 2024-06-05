
//cogemos arios elementos del artículo 6
const elem01 = document.getElementById('elementoAdetectar01');
const elem02 = document.getElementById('elementoAdetectar02')
//navegador
const navegador = document.getElementById("navegador")


// cuando se detecte movimiento de scroll llamamos a la función scrollFunction
window.onscroll=function(){
    cambiarNav()
    animaciones()
};


//función a la que sólo entraremos cuando esta sea llamada desde el evento
function cambiarNav() {    
        
    //si el top del scroll del body es inferior a 80 de posición, 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        navegador.style.backgroundColor = "rgba(20, 20, 20, 0.5)";
        navegador.style.height="50px";
        
        /* for(const item of document.getElementsByTagName("a")){
            item.style.color="pink";            
            item.style.transition="1s";
        }  */       

    }else{

        navegador.style.backgroundColor = "rgb(216, 216, 255)";
        navegador.style.height="100px";

        /* for(const item of document.getElementsByTagName("a")){
            item.style.color="white";
            item.style.transition="1s";
        } */
    }
}

function animaciones(){
    //vemos si el elemento 01 está o no dentro del viewport
    if (estaEnlaPantalla(elem01)==true) {
        // está en el viewport
        console.log("Aparece");
        elem01.classList.remove("desaparecerHaciaDer")
        elem01.classList.add("aparecerDer")        
    }else{
        //no está en el viewport
        elem01.classList.remove("aparecerDer")
        elem01.classList.add("desaparecerHaciaDer")
    }

    if (estaEnlaPantalla(elem02)==true) {
        // está en el viewport
        console.log("Aparece");
        elem02.classList.remove("desaparecerHaciaIzd")
        elem02.classList.add("aparecerIzd")        
    }else{
        //no está en el viewport
        elem02.classList.remove("aparecerIzd")
        elem02.classList.add("desaparecerHaciaIzd")
    }

}

function estaEnlaPantalla(parametroRecibido) {
    var distance = parametroRecibido.getBoundingClientRect();
    return (distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}
