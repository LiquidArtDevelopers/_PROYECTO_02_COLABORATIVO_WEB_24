

/* variables de ambito global para este script */
var a
var b
var total

/* variables ambito local (donde esten anidadas) */
let nombre, apellido, persona

/* operaciones con numeros */
a=10
b=5
total= a+b

/* para ver que mi scrip funciona, me lo dice en la consola */
console.log(total)
console.log(a-b)
console.log(a*b)
console.log(a/b)


/* Trabajar texto */

/* string , el + concatena y para hacer espacios poner entre''*/
nombre= 'Manolo'
apellido= 'Garcia'
persona= nombre +' '+ apellido + ' Perez'
//Tambien se puede esta sintaxis(mas moderno)
persona= `${nombre} ${apellido} Perez`

console.log(persona)


/* Modificar un Html y modificarle algo */
var portada
portada= document.getElementById('portadaH1')
portada.innerText="Cambio el nombre de h1"
portada.style.color="red"


console.log(portada)

