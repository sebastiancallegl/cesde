/**
 *  Luego de finalizar con los condicionales vamos a revisar la segunda herramienta que es fundamental para la creacion
 *  de logica de programacion: los ciclos
 * 
 *  los ciclos simplemente son bloques de codigo que me permiten repetir una accion mientras una CONDICION se cumpla, en 
 *  javascript tenemos diferentes tipos de ciclos pero vamos a revisar el ciclo mas comun y el que es mas facil de exportar
 *  a otros lenguajes de programacion, el ciclo "for"
 * 
 *  la sintaxis del ciclo "for" es muy sencilla:
 * 
 *  for(<inicializacion_de_variable>; <condicion>; <post_operacion>) {}
 * 
 *  la <inicializacion_de_variable> nos sirve para declarar una variable que nos servira de apoyo para ejecutar nuestro ciclo,
 *  generalmente esta esta variable hace parte de la <condicion> que se debe cumplir para que el ciclo continue, ahora bien en el
 *  <post_operacion> vamos a definir la operacion que queremos que se ejecute luego de cada iteracion del ciclo de ese modo acercamos
 *  a nuestra variable a que deje de cumplir la condicion del ciclo y asi el ciclo se de por terminado.
 * 
 *  vamos a revisar algunos ejemplos
 */ 


// imprime los numeros del 1 al 10

/**
 *  tenemos la tarea de imprimir los numeros del 1 al 10 para esto vamos a utilizar un ciclo y utilizaremos la variable de 
 *  apoyo del ciclo para imprimir los numeros.
 * 
 *  entonces tenemos la siguiente logica:
 * 
 *  1. inicializamos la variable de apoyo en 1.
 *  2. expresamos la condicion, en este caso la condicion es que nuestra variable de apoyo sea igual o menor a 10 (mientras esa
 *      condicion se cumpla el ciclo continuara)
 *  3. nuestra post operacion va a ser que le vamos a sumar 1 a nuestra variable de apoyo en cada iteracion del ciclo.
 */

// ahora vamos a definir nuestro ciclo "for" con los 3 puntos que acabamos de definir
for (let numero = 1; numero <= 10; numero = numero + 1) {
    // dentro de cada iteracion vamos a imprimir nuestro numero
    console.log(numero)
}

/**
 *  si ejecutas el codigo anterior vas a ver los numero del 1 al 10 justo como nos lo pidieron.
 * 
 *  ahora nos piden que imprimamos los numeros del 1 al 10 pero solo de 2 en 2 empezando en 2, es decir: 2, 4, 6 ...
 * 
 *  en este caso nuestra logica cambia un poco, de esta manera definamos los puntos logicos que nos ayudaran
 *  a definir nuestro nuevo ciclo.
 * 
 *  1. podemos seguir usando nuestra variable de apoyo numero.
 *  2. ahora iniciaremos nuestra variable de apoyo en 2 ya que es el primer numero.
 *  3. nuestra condicion seguira siendo la misma (el numero debe ser menor o igual a 10)
 *  4. nuestra post operacion cambia, ya que estamos contando de 2 en 2 debemos sumar 2 en cada iteracion del ciclo.
 */

// con nuestros nuevos puntos logicos vamos a definir nuestro nuevo ciclo
for (let numero = 2; numero <= 10; numero = numero + 2) {
    // simplemente tenemos que imprimir el numero
    console.log(numero);
}


/**
 *  si ejecutas el codigo anterior puedes observar como logramos imprimir los numeros del 2 al 10 contando de 2 en 2, pero 
 *  ahora vamos a analizar algo y es que este ejercicio se puede realizar usando el mismo ciclo for anterior al nuevo que hicimos
 *  pero agregando simplemente un condicional.
 * 
 *  observa que nos piden contar de 2 en 2 empezando desde el numero 2, si te das cuenta todos los numeros que nos piden imprimir
 *  son numeros pares por lo tanto otra solucion seria hacer el primer ciclo y juntandolo con un condicional que solo imprima los
 *  numeros pares (recuerda que para checker si un numero es par simplemente tenemos que verificar si es un numero divisible por 2
 *  y para eso podemos hacer uso de la operacion modulo para entender como funciona esta operacion busca en internet "operacion modulo en matematicas")
 * 
 *  ahora con nuestra nueva logica vamos a definir nuestros puntos logicos que nos ayudaran a definir nuestro codigo:
 * 
 *  1. inicializamos la variable de apoyo en 1.
 *  2. expresamos la condicion, en este caso la condicion es que nuestra variable de apoyo sea igual o menor a 10 (mientras esa
 *      condicion se cumpla el ciclo continuara)
 *  3. nuestra post operacion va a ser que le vamos a sumar 1 a nuestra variable de apoyo en cada iteracion del ciclo.
 *  4. solo vamos a imprimir el numero si este es par
 */

// ahora vamos a definir nuestro ciclo "for" con los 4 puntos que acabamos de definir
for (let numero = 1; numero <= 10; numero = numero + 1) {
    // dentro de cada iteracion vamos a verificar si el numero es par
    if (numero % 2 === 0) {
        // ya que sabemos que el numero es par lo imprimimos        
        console.log(numero)
    }
}

/**
 *  al ejecutar el codigo anterior pueden observar que el resultado es el mismo y la importancia de esto es demostrar que
 *  existen multiples formas logicas de resolver un ejercicio, lo unico es estructurar bien tus pasos logicos que nos lleven
 *  a resolver el ejercicio.
 */

/**
 *  ahora vamos a revisar el tema de que la declaracion de la variable de apoyo es opcional en la declaracion del ciclo "for"
 *  para esto utilizaremos una variable externa al ciclo "for"
 */

// inicializamos nuestra variable externa
let iteraciones = 0;

// definimos nuestro ciclo for sin realizar ninguna declaracion de variable
for (; iteraciones <= 10; iteraciones++) {
    console.log(iteraciones);
}


/**
 *  tambien podemos hacer exactamente lo mismo con la post operacion, mientras tengamos presente que debemos manipular la variable
 *  al interior del bloque de codigo de lo contrario podriamos obtener un ciclo infinito
 */

// inicializamos nuestra variable externa
let ciclos = 0;

// definimos nuestro ciclo for sin realizar ninguna declaracion de variable
for (; ciclos <= 10;) {
    // aqui podemos observar que ademas de que imprimimos la variable luego adicionamos una unidad.
    console.log(ciclos++);
}

/**
 *  luego de lo que acabamos de ver ya el resto es absolutamente logica, simplemente hay que definir los puntos logicos
 *  necesarios para llevar a cabo nuestro ejercicio.
 */

// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  1.  a partir del codigo que ves a continuacion genera los puntos logicos que consideres que se utilizaron para llevar a cabo
 *      dicha logica.
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

const saludo = "hola muchachos, hoy vamos a ver ciclos en javascript";

let saludoParseado = "";

for (let index = 0; index < saludo.length; index++) {
    if (saludo[index] === " ") {
        saludoParseado += "_"
    } else {
        saludoParseado += saludo[index]
    }
}

console.log(saludoParseado);


// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************


// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  2.  tenemos una variable "contador" con un valor inicial de 0, crea un ciclo que recorra los numeros del 1 al 100 y cada vez
 *      que el ciclo este recorriendo un numero que sea multiplo de 10 va a adicionar ese numero al contador.
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------


let contador = 0;





// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************
