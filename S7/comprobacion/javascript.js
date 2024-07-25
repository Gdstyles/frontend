// Considerando los conocimientos adquiridos durante esta CUE, 
// deberás solicitar el ingreso de dos números y calcular cual es mayor o si tienen el mismo valor. En cualquier caso, debes mostrar un
// mensaje indicando cuál de los números es mayor


// solicitar el ingreso de dos numeros

var numeroUno = parseInt(prompt("ingrese un número"));
var numeroDos = parseInt(prompt("ingrese otro número"));

//calcular cual es mayor o si tienen el mismo valor
if (numeroUno > numeroDos) { 
    alert("El primer número es mayor al segundo número")
} else if(numeroUno == numeroDos) {
    alert("Son iguales")
} else { alert("El segundo número es mayor que el primer número")
    
} 