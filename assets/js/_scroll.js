
// cuando se detecte movimiento de scroll llamamos a la función scrollFunction
window.onscroll = function() {scrollFunction()};

//función a la que sólo entraremos cuando esta sea llamada desde el evento
function scrollFunction() {
    //si el top del scroll del body es inferior a 80 de posición, 
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("navegador").style.backgroundColor = "rgba(0, 0, 0, 0.432)";
        
        for(const item of document.getElementsByTagName("a")){
            item.style.color="pink";            
            item.style.transition="1s";
        }        

    } else {
        document.getElementById("navegador").style.backgroundColor = "rgb(216, 216, 255)";

        /* for(const item of document.getElementsByTagName("a")){
            item.style.color="white";
            item.style.transition="1s";
        } */
    }
}
