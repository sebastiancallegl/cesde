/**
 *  ahora vamos a revisar la segunda forma de declarar variables que es usando la palabra reservada "const", este tipo de
 *  declaracion se usa para definir variables que van a mantener un valor constante en el flujo de ejecucion del script.
 *  aqui es muy importante tener claro el concepto de mutabilidad, debido a que el comportamiento de las variables sera diferente
 *  dependiendo del tipo de dato que usemos.
 */

/**
 *  primero que todo es importante aclarar que no se puede declarar una variable usando "const" sin inicializar su valor.
 *  por lo que un codigo como el siguiente va a arrojar un error al momento de ejecutarse.
 */

// declaramos una variable usando "const" sin un valor inicial
const miNumero;


/**
 *  si ejecutamos el codigo anterior vamos a ver que obtenemos un error de sintaxis (SyntaxError: Missing initializer in const declaration)
 *  por lo que nos debe quedar muy claro que este tipo de declaraciones siempre debe tener un valor de inicio.
 */

/**
 *  ahora bien vamos a ver el factor mas importante del uso de variables declaradas con "const", este factor se trata de la
 *  mutabilidad, como ya sabemos existen dos grandes grupos de tipos de datos en javascript:
 * 
 *  1. tipos de datos primitivos
 *  2. tipos de datos no-primitivos
 * 
 *  y una de las diferencias entre estos grupos es la mutabilidad siendo los tipos de datos no-primitivos los que presentan
 *  este comportamiento, ahora un pequeño recordatorio de los que es la mutabilidad, en palabras mas claras un tipo de dato
 *  mutable es aquel que puede transformarse sin modificar su referencia en memoria y en ese grupo de tipos de datos tenemos
 *  a los objetos y a los arrays, estos dos tipos de datos pueden agregar y remover atributos o items de su interior sin la
 *  necesidad de modificar su referencia en memoria, por lo tanto este tipo de datos al ser declarados con "const" nos va a
 *  permitir que podamos modificar su interior, pero vamos a verlo en mas detalle a continuacion.
 */


// declaramos una variable usando "const"
const miNumero2 = 5;

// ahora miremos que pasa si intentamos modificar ese valor
miNumero2++;

/**
 *  al ejecutarlo vamos a tener un error de tipo (TypeError: Assignment to constant variable.) debido a que no podemos modificar
 *  el valor ya que es un tipo de dato primitivo (Numero) el cual es inmutable.
 * 
 *  ahora usemos un tipo de dato mutable.
 */

// declaramos una variable usando "const"
const miNumero3 = [5];

// ahora miremos que pasa si intentamos modificar ese valor
miNumero3[0]++;

console.log(miNumero3);

/**
 *  en este caso no vamos a ver ningun error y por lo contrario la operacion salio bien debido a que declaramos un array
 *  que es un tipo de datos mutable.
 */


/**
 *  ahora antes de finalizar es importante anotar que al igual que "let" las variables declaradas con "const" van a tener
 *  un alcance de bloque, por lo tanto se debe prestar mucha atencion en que lugares y de que forma se emplea este tipo de
 *  declaracion 
 */

// ************************************************** EJERCICIO - INICIO **************************************************
/**
 *  1. defina una variable de tipo array que este vacio usando "const", luego en otro bloque diferente agregue 3 items al array.
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------








// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************



// ************************************************** EJERCICIO - INICIO **************************************************
/**
 *  2. cree 3 variables de tipos diferentes usando 1 sola vez la palabra "const".
 */

// -------------------------------------------------- CREA TU CODIGO AQUI --------------------------------------------------








// -------------------------------------------------- FINAL DE TU CODIGO --------------------------------------------------
// ************************************************** EJERCICIO - FIN **************************************************
