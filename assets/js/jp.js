
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
    for (const item of derechas) {
        animar(item,"der")   
    }
    for (const item of centros) {
        animar(item,"cent")
    }
    for (const item of opamia) {
        daropacidad(item)        
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
            if (estaenpantalla(parametro01)==true) {
                parametro01.classList.remove("desaparecerporladerecha")
                parametro01.classList.add("aparecerdesdederecha")
               
            } else {
                parametro01.classList.remove("aparecerdesdederecha")
                parametro01.classList.add("desaparecerporladerecha")
            }
            break;
        case "cent":
            if (estaenpantalla(parametro01)==true) {
                parametro01.classList.remove("desaparecer")
                parametro01.classList.add("aparecer")    
            } else {
                parametro01.classList.remove("aparecer")
                parametro01.classList.add("desaparecer")
            }
            break;

        default:
            if (estaenpantalla(parametro01)==true) {
                parametro01.classList.remove("desaparecer")
                parametro01.classList.add("aparecer")    
            } else {
                parametro01.classList.remove("aparecer")
                parametro01.classList.add("desaparecer")
            }
            break;
    }
}

function estaenpantalla(parametro01) {
    var distance = parametro01.getBoundingClientRect();
    return (distance.top < (window.innerHeight || document.documentElement.clientHeight) && distance.bottom > 0);
}

//dar opacidad a tres imágenes que tienen una clase determinada ya puesta a priori

const opamia = document.getElementsByClassName("opacidadmia")

        //incluye un for of metido en el windows.onscroll (linea 24)

function daropacidad(parametro01) {
    if (estaenpantalla(parametro01)==true) {
        parametro01.style.opacity="1"    
    } else {
        parametro01.style.opacity="0"
        parametro01.style.transition="4s"
    }
}

//hacer que los h2 se vuelvan rojos al hacer click sobre ellos

const h2mios = document.getElementsByTagName("h2")

for(const item of h2mios){
    item.addEventListener("click", function(){
        item.classList.add("h2colorrojo")
    })
}




