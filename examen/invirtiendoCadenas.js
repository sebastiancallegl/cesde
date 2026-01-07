/* (30 puntos)
 * Crea un programa que invierta el orden de una cadena de texto 
 * sin usar funciones propias del lenguaje que lo hagan de forma automática.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */

const reverseString = (str) => {
    let reversedString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i]
    }

    return reversedString;
}

console.log(reverseString("hola mundo"))
