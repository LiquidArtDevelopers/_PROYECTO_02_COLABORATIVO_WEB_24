// Recogemos en constantes los elementos que tengan la clase izquierda, derecha y centro
const izquierdas = document.getElementsByClassName("izquierda")
const derechas = document.getElementsByClassName("derecha")
const centros = document.getElementsByClassName("centro")


// Hacemos un elemento de escucha para cuando se haga scroll en la ventana del navegador
// Cada vez que el usuario haga scroll, entrará dentro de este evento-función y se ejecutará lo que haya dentro
window.onscroll = function(){
    for(const item of izquierdas){
        animar (item, "izq")
    }
    for(const item of derechas){
        animar (item, "dch")
    }
    for(const item of centros){
        animar (item, "centro")
    }
}


// Creamos la función para hacer las animaciones usando un switch case que depende del 2º parámetro para elegir qué animación aplicar
function animar (parametro01, parametro02){
    switch(parametro02){
        case "izq":
            if(estaEnPantalla(parametro01)==true){
                parametro01.classList.remove("desaparecerizq")
                parametro01.classList.add("aparecerizq")
            }else{
                parametro01.classList.remove("aparecerizq")
                parametro01.classList.add("desaparecerizq")
            }
            break;
        case "dch":
            if(estaEnPantalla(parametro01)==true){
                parametro01.classList.remove("desaparecerdch")
                parametro01.classList.add("aparecerdch")
            }else{
                parametro01.classList.remove("aparecerdch")
                parametro01.classList.add("desaparecerdch")
            }
            break;
        default:
            if(estaEnPantalla(parametro01)==true){
                parametro01.classList.remove("desaparecer")
                parametro01.classList.add("aparecer")
            }else{
                parametro01.classList.remove("aparecer")
                parametro01.classList.add("desaparecer")
            }
            break;
    }
}


// Creamos la función para comprobar si el elemento ha entrado en pantalla
function estaEnPantalla(parametroRecibido){
    var distance = parametroRecibido.getBoundingClientRect();
    return (distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}