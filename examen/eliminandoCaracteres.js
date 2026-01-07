/* (30 puntos)
 * Crea una función que reciba dos cadenas como parámetro (str1, str2)
 * e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO
 *   estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO
 *   estén presentes en str1.
 */

const removingChars = (str1, str2) => {
    const strLengths = [str1.length, str2.length];
    let out1 = "", out2 = "";

    for (let i = 0; i < Math.max(...strLengths); i++) {
        if (str1[i] && !str2.includes(str1[i])) {
            out1 += str1[i];
        }
        if (str2[i] && !str1.includes(str2[i])) {
            out2 += str2[i];
        }
    }

    return {
        out1,
        out2
    }
}

console.log(removingChars("hola", "como estas"))