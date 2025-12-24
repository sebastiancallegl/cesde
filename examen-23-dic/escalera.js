/**
 * crea una funcion que dibuje una escalera por consola recibiendo un parametro como numero de escalones.
 */

function escalera(escalones) {
    const patron = "_|";
    for(let i = escalones; i >= 0; i--) {
        console.log(" " + patron);
    }
}

escalera(10);