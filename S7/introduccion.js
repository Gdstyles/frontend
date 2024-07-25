// este es un comentario de una sola línea

// declaración de variables en js

let nombre = "Juan"; // la variable let es un variable local
var edad = 20; // la variable var es una variable global
const PI = 3.1416; // la variable const es una constante

// tipos de datos
let mensaje = "Hola, Mundo" // string
let cadenaCaracteres = "Hola, Mundo" // string
var numero = 42; // number 
var esVerdadero = true; // boolean, true or false

//objetos

var persona = {
    nombre: "Juan", // clave, valor
    edad: 20
}; 

persona.nombre // acceder a la clave nombre


//arreglos

var colores = ["rojo", "verde", "azul"]; // va entre corchetes y cada uno de los elementos esta en una posición


//imprimir en consola
console.log("Hola, Mundo");

//leer en una ventana emergente, con la funcion prompt(variable)
var nombreIngresado = prompt("Ingrese su nombre");

// funciones, estructuras de codigo que realizan alguna tarea o ejecutan un bloque de codigo

function suma(a,b){ // funcion llamada suma que recibe dos parametros de entrada a y b, separados por coma
    // el cuerpo o proceso de la funcion
return a + b; //retorna la suma de a y b

}