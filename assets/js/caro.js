//Recogemos en constantes los elementos que tengan clase izquierda, derecha y centro
const izquierdas= document.getElementsByClassName("izquierda")
const derechas= document.getElementsByClassName("derecha")
const centros= document.getElementsByClassName("centro")

// Ahora vamos a hacer un elemento de escucha para cuando se haga scroll en la ventana del navegador
// Cada vez que el usuario haga scroll entrara dentro de este evento-funcion y se ejecutara lo que hay adentro.


window.onscroll=function(){
    //Carol: Te he metido el FOR OF dentro de esta función, que es donde debe estar
    //el for of se ejecuta SÓLO cuando el usuario haga scroll
    for (const item of izquierdas){
        animar (item,"izd")
    }
    for (const item of derechas){
        animar (item,"der")
    }
    for (const item of centros){
        animar (item,"cen")
    }
}
//función a la que sólo entraremos cuando esta sea llamada desde el evento
function cambiarNav() {    
        
    //si el top del scroll del body es inferior a 80 de posición, 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        navegador.style.backgroundColor = "rgb(156, 143, 143)";
        navegador.style.height="50px";    
    }else{
        navegador.style.backgroundColor = "rgb(185, 155, 185)";
        navegador.style.height="100px";
    }
}

function animar(parametro01, parametro02){
    switch(parametro02){
        case "izd":
            if(estaenpantalla(parametro01)==true){
                parametro01.classList.remove("desaparecerporlaizquierda")
                parametro01.classList.add("aparecerdesdeizquierda")
            }else{
                parametro01.classList.remove("aparecerdesdeizquierda")
                parametro01.classList.add("desaparecerporlaizquierda")
            }
            break; 
        case "der":
            if(estaenpantalla(parametro01)==true){
                parametro01.classList.remove("desaparecerporladerecha")
                parametro01.classList.add("aparecerdesdederecha")
            }else{
                parametro01.classList.remove("aparecerdesdederecha")
                parametro01.classList.add("desaparecerporladerecha")
            }
            break;
        case "cen":
            if(estaenpantalla(parametro01)==true){
                parametro01.classList.remove("desaparecer")
                parametro01.classList.add("aparecer")
            }else{
                parametro01.classList.remove("aparecer")
                parametro01.classList.add("desaparecer")
            }
            break;
        default:
            if(estaenpantalla(parametro01)==true){
                parametro01.classList.remove("desaparecer")
                parametro01.classList.add("aparecer")
            }else{
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

    /* Evento para cuando hay selección de contenido en el nav (movil) para plegar el menú */
const contenido = document.getElementsByClassName("contenido");
const toggle = document.querySelector('input[name=toggle]');

for(const item of contenido){
    item.addEventListener("click", function(){
        console.log(item)    
        if(toggle){
            toggle.checked=false;
        }
    });
}

