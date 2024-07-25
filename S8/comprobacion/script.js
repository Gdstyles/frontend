
do {
    
var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel." +  
    "Estoy aquí para ayudarte en lo que necesides.\n" + 
    "Escribe el número de la opción que buscas: \n" + 
    "1.- Boletas y Pagos \n" + 
    "2.- Señal y llamadas \n" +
    "3.- Oferta comercial  \n" + 
    "4.- Otras consultas\n" +
    "5.- Salir")

//FUNCIONES

// estructura de control case, donde key es el valor evaluar y value los valores para cada caso

switch (opcion) {
    case "1":
       boletasPagos();
       break;

    case "2":
        reportarProblemas();
        break;
    case "3":
        ofertaMentel();
        break;
    case "4":
        otrasConsultas();
        break;
    case "5":
    alert("Hasta luego! Lo esperamos pronto");
        break;

    default:
        alert("La opción ingresada no es válida")
        break;    
    }

} while (opcion != 5); // fin do while
    


function boletasPagos() {
    var ingreso = prompt("Seleccione una opción \n" +
        "1.- Ver boleta\n" + 
        "2.- Pagar cuenta\n"
   
)

if (ingreso == "1") {
    alert("Haga click para descargar su boleta")
} else if (ingreso == "2") {
    alert("Usted está siendo transferido. Espere por favor...")
} else (
    alert("Opcion ingresada no es válida")

)
    
}

function reportarProblemas() {
    var ingreso = prompt("Seleccione una opción\n" +
        "1.- Problemas con la señal\n" +
        "2.- Problemas con las llamadas"
    )
if (ingreso == "1" || ingreso == "2") {
    var comentario = prompt("A continuacion escriba su solicitud")
    alert("Estimado usuraio, su solicitud: " + comentario + ". Ha sido ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos")        
} else {
    alert("Opcion ingresada no es válida")

}


}

function ofertaMentel()   {
    
}


function otrasConsultas() {

    var ingreso = prompt ("A continuación escriba su consulta")
    alert("Estimado usuario, su consulta " + ingreso + ". Ha sigo ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos"
    )


    
}