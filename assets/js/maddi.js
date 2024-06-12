// Recogemos en constantes el navegador y los elementos que tengan la clase izquierda, derecha y centro
const navegador = document.getElementById("navegador")
const logo = document.getElementById("logo")
const izquierdas = document.getElementsByClassName("izquierda")
const derechas = document.getElementsByClassName("derecha")
const centros = document.getElementsByClassName("centro")
const abajos = document.getElementsByClassName("abajo")


// Hacemos un elemento de escucha para cuando se haga scroll en la ventana del navegador
// Cada vez que el usuario haga scroll, entrará dentro de este evento-función y se ejecutará lo que haya dentro
// SOLO PUEDE HABER UN ONSCROLL, DE OTRA FORMA UNO DE LOS DOS DEJARÁ DE FUNCIONAR, no se puede hacer uno para el cambio del navegador y otro para las animaciones.
window.onscroll = function(){
    cambiarnav()

    for(const item of izquierdas){
        animar (item, "izq")
    }
    for(const item of derechas){
        animar (item, "dch")
    }
    for(const item of centros){
        animar (item, "centro")
    }
    for(const item of abajos){
        animar (item, "abajo")
    }
}

// Creamos la función para que el navegador cambie en el valor 80 del scroll
function cambiarnav(){
    if((document.body.scrollTop > 80 || document.documentElement.scrollTop > 80)&&((window.innerWidth||document.documentElement.clientWidth)>1300)){
        navegador.style.backgroundColor="rgb(196, 69, 122)"
        navegador.style.height="5vh"
        logo.style.width="30px"
        logo.style.height="30px"
        logo.setAttribute("src", "https://dummyimage.com/30x30")
    }else{
        navegador.style.backgroundColor="black"
        navegador.style.height="8vh"
        logo.style.width="50px"
        logo.style.height="50px"
        logo.setAttribute("src", "https://dummyimage.com/50x50")
    }
}

// Creamos la función para hacer las animaciones usando un switch case que depende del 2º parámetro para elegir qué animación aplicar
function animar (parametro01, parametro02){
    // Comprobamos si ya se ha animado, y en ese caso, no entra en el switch case, dejando el elemento estático
    if(parametro01.classList.contains("animado")){
        return;
    }

    switch(parametro02){
        case "izq":
            if(estaEnPantalla(parametro01)==true){
                parametro01.classList.remove("desaparecerizq")
                parametro01.classList.add("aparecerizq")
                parametro01.classList.add("animado") // Marcar como animado
            }else{
                parametro01.classList.remove("aparecerizq")
                parametro01.classList.add("desaparecerizq")
            }
            break;
        case "dch":
            if(estaEnPantalla(parametro01)==true){
                parametro01.classList.remove("desaparecerdch")
                parametro01.classList.add("aparecerdch")
                parametro01.classList.add("animado")
            }else{
                parametro01.classList.remove("aparecerdch")
                parametro01.classList.add("desaparecerdch")
            }
            break;
        case "centro":
            if(estaEnPantalla(parametro01)==true){
                    parametro01.classList.remove("desaparecer")
                    parametro01.classList.add("aparecer")
                    parametro01.classList.add("animado")
            }else{
                    parametro01.classList.remove("aparecer")
                    parametro01.classList.add("desaparecer")
            }
            break;
        case "abajo":
            if(estaEnPantalla(parametro01)==true){
                parametro01.classList.remove("desaparecerabajo")
                parametro01.classList.add("aparecerabajo")
                parametro01.classList.add("animado")
            }else{
                parametro01.classList.remove("aparecerabajo")
                parametro01.classList.add("desaparecerabajo")
            }
            break;
        default:
            if(estaEnPantalla(parametro01)==true){
                parametro01.classList.remove("desaparecer")
                parametro01.classList.add("aparecer")
                parametro01.classList.add("animado")
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



// ---------------------------------------------

// Cambiar los colores de todos los H2 del documento al clickar un boton

// Recogemos el botón y los H2 
const botonh2 = document.getElementById("botonh2")
const h2s = document.getElementsByTagName('h2')

// Creamos el escucha para el botón
botonh2.addEventListener("click",cambiarh2)

// Creamos un array que contenga los colores que queramos aplicar
var colores = ["red","orange","yellow","green","aqua","blue","purple","pink","red"]

// Creamos la función para cambiar los colores. Declaramos una variable para que vaya recorriendo el array de los colores y usamos un for of para recorrer el array de los H2
function cambiarh2(){
    var n=0
    for(const item of h2s){
        item.style.color=colores[n]
        n++
    }
}

// Para resetear los colores de los H2
const botonh2reset = document.getElementById("botonh2reset")

botonh2reset.addEventListener("click",reseth2)

function reseth2(){
    for(const item of h2s){
        item.style.color="black"
    }
}


// ---------------------------------------------

// JS para el toggle, que al hacer click en uno de los enlaces se marque como unchecked y se repliegue el menú.

const contenido = document.getElementsByClassName("contenido"); //poner esta clase a los enlaces del menú

const toggle = document.querySelector('input[name=toggle]');

for(const item of contenido){
    item.addEventListener("click",function(){
        if(toggle){ // Verificar que toggle existe, para que no de error el JS
            toggle.checked=false;
        }
    })
}