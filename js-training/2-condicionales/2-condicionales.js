/** 
 *  A veces nos toca crear condicionales que evaluan mas de 1 condicion y para eso usaremos los operadores "||" y "&&"
 * 
 *  el operador "||" nos permite evaluar si al menos una de las dos condiciones se cumple. a continuacion vamos a revisar
 *  unos ejemplos.
 */

// tenemos 2 variables
const equipo = "televisor";
const marca = "samsung";

/**
 *  si la marca es de sumsung o apple, imprime el siguiente mensaje: "es un equipo con garantia"
 */

// crearemos nuestro condicional para ejecutar lo que nos acaban de pedir y para eso usaremos el operador ||
if (marca === 'samsung' || marca === 'apple') {
    // el condicional anterior nos permite revisar si alguna de las dos condiciones se cumple.
    console.log('es un equipo con garantia');
}

/** 
 *  ahora revisemos el operado "&&", este nos permite revisar que dos condiciones se cumplan de manera conjunta,
 *  si una de las condiciones no se cumple el bloque de codigo del "if" no se va a llevar a cabo.
 */

/**
 *  si la marca es samsung y el equipo es un celular, imprima el siguiente mensaje: "es un celular de samsung"
 */

// usaremos el operador "&&" para revisar que se cumplan las dos condiciones.
if (marca === "samsung" && equipo === 'celular') {
    console.log("es un celular de samsung");
}

/**
 *  si ejecutamos todo el codigo vamos a observar que no vamos a ver en la consola la frase "es un celular de samsung"
 *  debido a que unos de los condicionales no se cumple.
 */


// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  1.  tenemos las variables "mes" y "dia" imprime: "es imposible" solo si la variable "mes" tiene de valor "febrero" y la variable
 *      "dia" tiene de valor 30
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

const mes = "febrero";
const dia = 30;


// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************



// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  1.  tenemos dos variables "grupo1" y "grupo2" imprime: "ambos grupos son del cesde" solo si los grupos tienen los valores
 *      "throwers" y "catchers" 
 * 
 *      ten cuidado que cualquiera de las dos variables puede tener cualquiera de los dos valores
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

const grupo1 = "throwers";
const grupo2 = "catchers";





// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************
