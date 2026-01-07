/**
 *  Ahora que terminamos de revisar los conceptos de declaracion de variables vamos a empezar con condicionales.
 * 
 *  Los condicionales son una de las herramientas mas poderosas para crear logica al interior de nuestros progamas
 *  y por eso es DEMASIADO importante aprender a usarlos.
 * 
 *  empezaremos por un "if" sencillo, esta palabra reservada ("if") nos permite evaluar una condicion al interior de
 *  unos parentesis que le siguen al "if" luego de eso vamos a tener un bloque ("{}") el cual nos servira para definir
 *  que debe suceder si la condificion al interior de los parentesis se cumple.
 * 
 *  vamos a revisar un ejemplo
 */ 

// tenemos dos variables, un nombre y una edad.
let nombre = "jorge", edad = 19

/**
 *  ahora nos piden lo siguiente:
 * 
 *  1. si la persona es mayor de edad imprima "<NOMBRE> es una persona mayor de edad"
 *  2. si se llama "jorge" imprima "<NOMBRE> el curioso"
 */

// la primera nos pide que imprimamos un string si la persona es mayor de edad, entonces nuestro condicional seria el siguiente.
if (edad >= 18) {
    // aqui en este bloque escribimos el codigo que queremos que se ejecute solo cuando la condicion se cumpla
    console.log(`${nombre} es una persona mayor de edad`);
}

// ahora vamos por la siguiente pregunta que solo nos pide que imprimamos un string si el nombre es jorge
if (nombre === 'jorge') {
    console.log(`${nombre} el curioso`);
}

// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  1. Tenemos una variable llamada "color", utiliza condicionales para imprimir "positivo" solo si el valor de la variable es azul.
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

const color = "azul";



// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************



// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  2. duplica el valor de la variable "numero" solo si es mayor a 20.
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

let numero = 30;



// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************


// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  3. imprime la variable "comida" solo si es diferente de "sancocho"
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

const comida = "frijoles";



// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************
