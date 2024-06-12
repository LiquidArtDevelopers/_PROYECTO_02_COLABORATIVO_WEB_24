//cogemos el navegador para el efecto del nav
const navegador = document.getElementById("navegador")

//listener de scroll para modificar el nav
window.onscroll=function(){
    cambiarNav()
}
//función a la que sólo entraremos cuando esta sea llamada desde el evento
function cambiarNav() {    
        
    //si el top del scroll del body es inferior a 80 de posición, 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        navegador.style.backgroundColor = "#b37bad29";
        navegador.style.height="50px";
        
        
        /* for(const item of document.getElementsByTagName("a")){
            item.style.color="pink";            
            item.style.transition="1s";
        }  */       

    }else{

        navegador.style.backgroundColor = "rgba(9, 9, 9, 1)";
        navegador.style.height="120px";

        /* for(const item of document.getElementsByTagName("a")){
            item.style.color="white";
            item.style.transition="1s";
        } */
    }
}

/* Evento para cuando hay seleccion de contenido en el nav(movil) para plegar el menú */

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