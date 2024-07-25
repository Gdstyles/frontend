var opcion = prompt("¡Hola! Soy Eva, tu asistente virtual del Servicio al Cliente de Mentel." +  
    "Estoy aquí para ayudarte en lo que necesides.\n" + 
    "Escribe el número de la opción que buscas: \n" + 
    "1.- Boletas y Pagos \n" + 
    "2.- Señal y llamadas \n" +
     "3.- Oferta comercial  \n" + 
     "4.- Otras consultas")

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
        break
    default:
        alert("La opción ingresada no es válida")
        break;    
    }

        
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

function ofertaMentel() {
    
}
var ingreso = prompt("Mentel tiene una oferta comercial acorde a tus necesidades! \n" +
    "Para conocer más información y ser asesorado personalmente por un ejecutivo\n" +
    "Escribe SI si deseas ser contactado por un ejecutivo\n" +
    "Escriba NO si no deseas ser contactado"
)
var ingresoMayuscula = ingreso.toUpperCase();
if (ingresoMayuscula == "SI") {
alert("Un Ejecutivo contactara con usted")
} else if (ingresoMayuscula == "NO") {
alert ("Gracias por preferir nuestros servicios")

} else { 
alert("Opción ingresada no es válida")

}

function otrasConsultas() {

    var ingreso = prompt ("A continuación escriba su consulta")
    alert("Estimado usuario, su consulta " + ingreso + ". Ha sigo ingresada con éxito. Pronto será contactado por uno de nuestros ejecutivos"
    )


    
}


