function analizadorTexto(texto) {
    const resultado = {
        totalPalabras: 0,
        promedio: 0,
        palabraLarga: ""
    }

    const arrayPalabras = texto.split(" ");

    for (let palabra of arrayPalabras) {
        resultado.totalPalabras++;
        resultado.promedio += palabra.length;
        if (palabra.length > resultado.palabraLarga.length) {
            resultado.palabraLarga = palabra;
        }
    }

    resultado.promedio = Math.floor(resultado.promedio / resultado.totalPalabras);

    return resultado;
}

console.log(analizadorTexto("hola mañana bien"))