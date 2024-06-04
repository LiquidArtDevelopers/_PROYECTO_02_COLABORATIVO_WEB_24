
// cuando se detecte movimiento de scroll llamamos a la función scrollFunction
window.onscroll=function(){
    mifuncion()
};

//función a la que sólo entraremos cuando esta sea llamada desde el evento
function mifuncion() {

    const navegador = document.getElementById("navegador")
        
    //si el top del scroll del body es inferior a 80 de posición, 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {

        navegador.style.backgroundColor = "pink";
        navegador.style.height="50px";
        
        /* for(const item of document.getElementsByTagName("a")){
            item.style.color="pink";            
            item.style.transition="1s";
        }  */       

    } else {

        navegador.style.backgroundColor = "rgb(216, 216, 255)";
        navegador.style.height="100px";

        /* for(const item of document.getElementsByTagName("a")){
            item.style.color="white";
            item.style.transition="1s";
        } */
    }
}
