/**
 *  ahora lo unico que vamos a revisar es logica mezclando ciclos y condicionales que previamente hemos estudiado, tenemos
 *  el siguiente ejercicio:
 * 
 *  realiza un conteo regresivo imprimiendo los respectivos numeros desde 20 hasta 0, cuando el conteo vaya en el numero 10
 *  debe imprimir la siguiente frase: "Ojo solo quedan 10 numeros" y cuando el conteo llegue a 0 debe mostrar la siguiente
 *  frase: "el conteo a llegado a 0, todo termino"
 * 
 *  vamos a analizar la situacion y vamos a definir los siguientes puntos logicos para lograr resolver el ejercicio:
 *  
 *  1.  variable de apoyo inicializada en 20.
 *  2.  la condicion del ciclo debe ser que la variable de apoyo sea mayor o igual a 0.
 *  3.  la post operacion del ciclo debe ser restarle una unidad a la variable de apoyo.
 *  4.  dentro del bloque del ciclo vamos a revisar si el numero es 10 en caso de que si imprimir la frase que nos pidieron.
 *  5.  dentro del bloque del ciclo vamos a revisar si el numero es 0 en caso de que si imprimir la frase que nos pidieron.
 *  6.  en caso de que no sea ni 10 ni 0 solo imprimir el numero
 */

// definimos nuestro ciclo con las caracteristicas expresadas en los puntos del 1 al 3
for (let contador = 20; contador >= 0; contador--) {
    // ahora vamos a realizar nuestro condicional con las especificacion del punto 4 al 6
    if (contador === 10) {
        console.log("Ojo solo quedan 10 numeros")
    } else if (contador === 0) {
        console.log("el conteo a llegado a 0, todo termino")
    } else {
        console.log(contador)
    }
}

/**
 *  si ejecutas el codigo anterior vas a ver que logramos desarrollar la logica que nos pidieron, ahora vamos a ver que podemos
 *  usar ciclos con un monton de tipos de datos para crear logicas mas complejas y elaboradas.
 * 
 * 
 *  tienes un string almacenado en una variable "frase" debes convertir las vocales de esa frase segun la siguiente especificacion.
 * 
 *      A -> 4
 *      E -> 3
 *      I -> 1
 */

    let frase = "FELIZ NAVIDAD!";

/**
 *  vamos a desarrollar los pasos logicos necesarios para resolver el ejercicio:
 * 
 *  1.  creamos una variable con un string vacio.
 *  2.  vamos a crear un objeto con los items de la conversion que nos piden convertir.
 *  3.  con un ciclo vamos a recorrer todos los caracteres de la variable "frase".
 *  4.  vamos a utilizar un condicional para checkear si el caracter en el que estamos esta incluido en el objeto que tiene nuestros
 *      items de conversion.
 *  5.  en caso de que si tenga los items agregamos el caracter convertido en el nuevo string.
 *  6.  en caso de que no sea uno de los caracteres objetivos de conversion simplemente lo agregamos al nuevo string.
 *  7.  como nos piden convertir la variable reasignamos la variable "frase" con el valor de nuestro nuevo string.
 */

// 1. creamos una variable con un string vacio.
let nuevoString = "";

// 2.  vamos a crear un objeto con los items de la conversion que nos piden convertir.
const convertidor = {
    A: "4",
    E: "3",
    I: "1",
}

 // 3.  con un ciclo vamos a recorrer todos los caracteres de la variable "frase".
for (let index = 0; index < frase.length; index++) {
    const letra = frase[index];
    // 4.  vamos a utilizar un condicional para checkear si el caracter en el que estamos esta incluido en el objeto que tiene nuestros items de conversion.
    if (letra in convertidor) {
        // 5.  en caso de que si tenga los items agregamos el caracter convertido en el nuevo string.
        nuevoString += convertidor[letra];
    } else {
         // 6.  en caso de que no sea uno de los caracteres objetivos de conversion simplemente lo agregamos al nuevo string.
        nuevoString += letra;
    }    
}

// 7.  como nos piden convertir la variable reasignamos la variable "frase" con el valor de nuestro nuevo string.
frase = nuevoString;


console.log(frase)


/**
 *  de esa manera usando pasos logico logramos resolver nuestro problema.
 * 
 *  ahora tu turno.
 */

// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  1.  tienes dos variables "contador" y "frase", ahora crea la logica necesaria para agregarle una unidad al contador por cada "a" que tenga la frase.
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

{
    let contador = 0;
    const frase = "este es un tutorial de como utilizar ciclos y condicionales para crear unas logicas bien elaboradas."




}

// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************

// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  2.  tienes un string almacenado en una variable "frase" debes revertir la frase pero cada vez que encuentres un espacio debes agregar
 *      un numero que corresponde al numero del espacio
 * 
 *  ejemplo:
 * 
 *  frase: hola mundo como estan espero que todos esten muy bien
 *  resultado: neib1yum2netse3sodot4euq5orepse6natse7omoc8odnum9aloh
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

{
    const frase = "yo se que ustedes pueden con este ejercicio ustedes son unos cracks!"

}

// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************
