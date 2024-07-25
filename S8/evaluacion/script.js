
// Cada uno de los clientes de nuestro banco contará con un nombre, un identificador, una
// clave y un saldo en su cuenta
// Se debe contar con al menos 3 clientes registrados


// nombre | rut | clave | saldo
// funcion constructora para instanciar ojeto cliente

function Cliente(nombre, rut, clave, saldo) {
    this.nombre = nombre
    this.rut = rut
    this.clave = clave
    this.saldo = saldo
}

var cliente1 = new Cliente("Salvador Augusto", "181003001", "1973", 150000)
var cliente2 = new Cliente("Joaquin Lavin", "171004001", "2000", 300000)
var cliente3 = new Cliente("Naruto Uzumaki", "124503101", "1999", 10678950)

var listaClientes = [cliente1, cliente2, cliente3] // listas para recorrer y buscar

// Cuando se ingrese el identificador y la clave, se revisará si coincide con alguno de los
// clientes registrados. Si no coincide, se mostrará un mensaje de error.

alert("Bienvenido a Banca en Línea")
var identificador = prompt("Ingrese su identificador") // ingreso de valores
var password = prompt("Ingrese su password") //ingreso de valores

// recorrer la lista con clientes, 
var usuario;
for (const iterator of listaClientes) {
    if (iterator.rut === identificador && iterator.clave === password) {
        usuario = iterator; // cliente existe / iterator es variable temporal
        break;
    }
}

if (usuario) {
    alert("Bienvenido " + usuario.nombre)
    menu(usuario) // llamada a la funcion menu cuando el ciente existe
} else {
    alert("Datos incorrectos")

}


// funcion menu

function menu(usuario) {
    do {
            var opcion = prompt("Seleccione que desea hacer:\n" +
                                "1.- Ver saldo. \n" +
                                "2.- Realizar Giro.\n" +
                                "3.- Realizar depósito.\n" +
                                "4.- Salir" 
            )

        switch (opcion) {
            case "1": // ver saldo
                alert("Su saldo es: " + usuario.saldo)
                break;
            case "2": // realizar deposito
            retirarSaldo()
                break;
            case "3": // deposito
            realizarDeposito()   
                break;
            case "4":
                alert("Hasta luego!")
                break;    
            default:
                alert("Opción incorrecta")
                break;
        }    
    } while (opcion !="4");
}




function retirarSaldo() {

    var retiro = prompt("Su saldo actual es : " + usuario.saldo + " Ingrese el monto que desea girar:")
                if (retiro > usuario.saldo) {
                    alert("Saldo insuficiente")                    
                } else {
                    usuario.saldo -= retiro
                    alert("Retiro completado, su nuevo saldo es: " + usuario.saldo)

                }
    
}

function realizarDeposito() {

    var deposito = parseInt(prompt("Su saldo actual es: " + usuario.saldo + " Ingrese el monto que desea depositar:"))
                usuario.saldo += deposito
                alert("Grio realizado, su nuevo saldo es " + usuario.saldo)

}

