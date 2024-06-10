
//recogemos en constantes los elementos que tengan clase izquierda, derecha y centro
const izquierdas = document.getElementsByClassName("izquierda")
const derechas = document.getElementsByClassName("derecha")
const centros = document.getElementsByClassName("centro")

//ahora vamos a hacer un elemento de escucha para cuando se haga scroll en la ventana del navegador
//cada vez que el usuario haga scroll entrará dentro de este evento-función y se ejecutará lo que haya dentro

window.onscroll=function() {
    for(const item of izquierdas) {
        animar(item,"izd")
    }
}

function animar(parametro01,parametro02){
    switch (parametro02) {
        case "izd":
        if (estaenpantalla(parametro01)==true) {
            parametro01.classList.remove("desaparecerporlaizquierda")
            parametro01.classList.add("aparecerdesdeizquierda")
        } else {
            parametro01.classList.remove("aparecerdesdeizquierda")
            parametro01.classList.add("desaparecerporlaizquierda")
        }

            break;
        case "der":

            break;
        default:

            break;
    }

}


function estaenpantalla(parametro01) {
    var distance = parametro01.getBoundingClientRect();
    return (distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}

