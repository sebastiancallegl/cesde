/* (30 puntos)
 * Crea una función que reciba un texto y muestre cada palabra en una línea,
 * formando un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 */



function wordFrame(text) {
    let palabraLarga = "";
    const textArray = text.split(" ")
    for (let i = 0; i < textArray.length; i++) {
        if (textArray[i].length > palabraLarga.length) {
            palabraLarga = textArray[i];
        }
    }
    console.log("*".repeat(palabraLarga.length + 4));

    for (let i = 0; i < textArray.length; i++) {
        let line = "";
        for (let j = i; j < textArray.length; j++) {
            line += textArray[j] + " "
            let lineWithNextWord = line;
            if (textArray[j+1]) {
                lineWithNextWord = line + textArray[j+1];
            }
            if (line.length <= palabraLarga.length && lineWithNextWord.length > palabraLarga.length || j === textArray.length - 1) {
                line = line + " ".repeat(palabraLarga.length - line.length);
                i = j;
                break;
            } else if (line.length > palabraLarga.length) {
                line = palabraLarga;
                break
            }
        }
        console.log("* " + line + " *");
        line = "";
    }

    console.log("*".repeat(palabraLarga.length + 4));
}


wordFrame("hola mañana bien esternocleidomastoideo es un hueso que no se donde queda")