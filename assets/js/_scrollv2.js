
//cogemos todos los elementos que tengan clase izquierda y derecha
const izquierdas = document.getElementsByClassName("izquierda")
const derechas = document.getElementsByClassName("derecha")
const centros = document.getElementsByClassName("centro")
//cogemos el navegador para el efecto del nav
const navegador = document.getElementById("navegador")

//listener de scroll para modificar el nav
window.onscroll=function(){
    cambiarNav()

    for(const item of izquierdas){
        animaciones(item, "izd")
    }
    for(const item of derechas){
        animaciones(item, "der")
    }
    for(const item of centros){
        animaciones(item, "cen")
    }

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

function animaciones(parametroRecibido01, parametroRecibido02){

    switch(parametroRecibido02){
        case "izd":
            if (estaEnlaPantalla(parametroRecibido01)==true) {
                // está en el viewport
                parametroRecibido01.classList.remove("desaparecerHaciaIzd")
                parametroRecibido01.classList.add("aparecerIzd")        
            }else{
                //no está en el viewport
                parametroRecibido01.classList.remove("aparecerIzd")
                parametroRecibido01.classList.add("desaparecerHaciaIzd")
            }
            break;
        case "der":
            if (estaEnlaPantalla(parametroRecibido01)==true) {
                // está en el viewport
                parametroRecibido01.classList.remove("desaparecerHaciaDer")
                parametroRecibido01.classList.add("aparecerDer")        
            }else{
                //no está en el viewport
                parametroRecibido01.classList.remove("aparecerDer")
                parametroRecibido01.classList.add("desaparecerHaciaDer")
            }
            break;
        default:
            if (estaEnlaPantalla(parametroRecibido01)==true) {
                // está en el viewport
                parametroRecibido01.classList.remove("desaparecer")
                parametroRecibido01.classList.add("aparecer")        
            }else{
                //no está en el viewport
                parametroRecibido01.classList.remove("aparecer")
                parametroRecibido01.classList.add("desaparecer")
            }
            break;
    }


    //vemos si el elemento 01 está o no dentro del viewport
    

    
}

function estaEnlaPantalla(parametroRecibido) {
    var distance = parametroRecibido.getBoundingClientRect();
    return (distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}

