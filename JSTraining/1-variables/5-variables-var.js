/**
 *  finalmente el ultimo tipo de declaracion de variables que vamos a ver es "var" muchos desarrolladores de manera
 *  erronea mencionan que este tipo de declaracion de variables es viejo y ya no se usa pero no es verdad, simplemente
 *  es una forma de declarar variables que existia antes de "const" y "let" pero no quiere decir que no se use o que
 *  sea malo usarse.
 * 
 *  este tipo de declaraciones usando la palabra reservada "var" tiene un conjunto de propiedades que hace que las variables
 *  tengan un comportamiento especial, vamos a revisar a profundidad algunas de esas propiedades.
 * 
 *  la propiedad mas importante en este tipo de variables es el alcance, ya que tiene un alcance global y generalmente es
 *  un superpoder al que hay que tenerle cuidado porque podemos introducir errores en nuestro codigo. vamos a revisarla a continuacion.
 */

// definimos nuestro bloque
{
    // definimos nuestra nueva variable que vamos a llamar "otroGrupo" con un valor de inicializacion tipo string que diga "Catchers"
    var otroGrupo = "Catchers";
}

// ahora estando en el bloque padre vamos a hacer uso de la variable
console.log(otroGrupo)

/**
 *  el ejemplo anterior lo vimos cuando estabamos revisando las variables declaradas con "let" y si la memoria no les falla
 *  se acordaran que este pequeño codigo fallaba con un error de referencia, es un ejemplo importantisimo para mostrar la diferencia
 *  al usar "var" que tiene un alcance global. Si ejecutas ese codigo vas a observar que corre sin problemas.
 * 
 *  ahora que ya vimos sobre el alcance global que tienen las variables declaradas con "var" vamos a revisar la segunda diferencia.
 * 
 *  en este caso tenemos una propiedad que se llama "hoisting" y se trata de un comportamiento que tiene el motor de javascript para
 *  elevar todas las declaraciones realizadas con "var" al inicio del script. revisemoslo con el siguiente codigo.
 */

// llamamos a miVariable antes de ser declarada
console.log(miVariable)

// declaramos una variable usando "let"
let miVariable = "miValor";

/**
 *  si ejecutan el codigo anterior se daran cuenta que tendremos un error de referencia (ReferenceError: Cannot access 'miVariable' before initialization)
 *  debido a que usamos la variable antes de declararla e inicializarla.
 * 
 *  ahora vamos a ver que sucede en el mismo ejemplo usando "var"
 */

// llamamos a miVariable antes de ser declarada
console.log(miVariable2);

// declaramos una variable usando "let"
var miVariable2 = "miValor";


/** 
 *  al ejecutar ese codigo se van a dar cuenta que no tuvimos ningun error, obtuvimos un "undefined" y ahi es claro hacer la precision, de que a pesar
 *  de que "var" eleva la declaracion de la variable esta no eleva la inicializacion, por lo tanto vamos a tener una variable declarada pero no inicializada.
 * 
 *  ahora vamos a la ultima e importante diferencia que vamos a ver sobre "var", se trata de la redeclaracion y es que "var" nos permite redeclarar variables sin
 *  ningun error, cosa que los otros tipos de declaraciones (let y const) no permite.
 */

// declaramos una variable usando "var".
var miVariable3 = "miValor";

// volvemos a declarar la misma variable.
var miVariable3 = "miNuevoValor";

// imprimamos el valor de la variable.
console.log(miVariable3);

/**
 *  al ejecutar el codigo anterior vamos a observar que no existe ningun error en nuestro codigo, en cambio si usaramos "let" o "const" tendriamos un error
 *  al tratar de ejecutar el codigo
 */

// ************************************************** EJERCICIO - INICIO **************************************************
/**
 *  1. revisa el siguiente codigo y realiza una pequeña modificacion para que corra sin problemas. los bloques se deben mantener como estan
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

{
    let nombre = "Globant";
}
{
    console.log(nombre);
}

// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************



// ************************************************** EJERCICIO - INICIO **************************************************
/**
 *  2. declara una variable y luego vuelve a declararla en un bloque hijo, luego de eso en el bloque global imprime la variable con el nuevo valor
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------







// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************



// ************************************************** EJERCICIO - INICIO **************************************************
/**
 *  3. utiliza (puede ser imprimir por consola) una variable antes de declararla sin que el codigo falle.
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------








// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************

