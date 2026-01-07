/**
 *  el uso de "let" para la declaracion de una variable esta limitado por el bloque donde se declara, que quiere decir esto ?
 *  en javascript tenemos algo que se llama scope que al español se traduce como alcance y es que las variables dependiendo de
 *  la forma en que se declaren van a tener un alcance diferente, en este caso "let" tiene un alcance de bloque por lo tanto
 *  solo puede ser usado en el bloque que se declara o en un bloque "hijo".
 * 
 *  vamos a ver el siguiente ejemplo para entender mas a profundidad esto.
 */ 

// vamos a definir una variable llamada grupo que inicializaremos con un valor tipo string que dice "Throwers"
let grupo = "Throwers";

// ahora vamos a crear un bloque "hijo" usando llaves {}
{
    // dentro de nuestro bloque "hijo" podemos hacer uso de la variable grupo ya que esta en un bloque superior o "padre"
    console.log(grupo);
}

// si ejecutamos el anterior codigo (linea 33 a linea 41) vamos a visualizar en el output el valor de la variable grupo.

// ahora intentemos el contrario, definir una variable dentro de un bloque hijo y usarlo en un bloque padre.

// definimos nuestro bloque
{
    // definimos nuestra nueva variable que vamos a llamar "otroGrupo" con un valor de inicializacion tipo string que diga "Catchers"
    let otroGrupo = "Catchers";
}

// ahora estando en el bloque padre vamos a hacer uso de la variable
console.log(otroGrupo)

/**
 * luego de correr ese codigo (linea 46 a linea 54) pudieron observar que obtuvimos un error de referencia "ReferenceError"
 * con un menjase que dice "otroGrupo is not defined", con esto podemos observar que en el bloque padre no podemos hacer uso 
 * de una variable declarada con "let" en un bloque hijo.
 */



// ************************************************** EJERCICIO - INICIO **************************************************

/**
 *  1. Ejecuta el siguiente codigo y analiza el resultado
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

let dia = "Domingo";

{
    dia = "Lunes"
}

console.log(dia);


// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************



// ************************************************** EJERCICIO - INICIO **************************************************
/**
 *  2. Ejecuta el siguiente codigo y analiza el resultado
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------

let segundoDia = "Domingo";

{
    let segundoDia = "Lunes"
}

console.log(segundoDia);


// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************



// ************************************************** EJERCICIO - INICIO **************************************************
/**
 *  3. Crea 3 variables usando let, cada variable debe estar en un bloque diferente a las demas.
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------




// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************
