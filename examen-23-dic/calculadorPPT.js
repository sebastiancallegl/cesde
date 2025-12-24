const opciones = ["piedra", "papel", "tijera"];
const rondas = [
  ["tijera", "piedra"], ["papel", "papel"], ["piedra", "tijera"], ["tijera", "papel"], ["papel", "piedra"],
  ["piedra", "piedra"], ["tijera", "tijera"], ["papel", "tijera"], ["piedra", "papel"], ["tijera", "piedra"],
  ["papel", "papel"], ["piedra", "tijera"], ["tijera", "papel"], ["papel", "piedra"], ["piedra", "piedra"],
  ["tijera", "tijera"], ["papel", "tijera"], ["piedra", "papel"], ["tijera", "piedra"], ["papel", "papel"],
  ["piedra", "tijera"], ["tijera", "papel"], ["papel", "piedra"], ["piedra", "piedra"], ["tijera", "tijera"],
  ["papel", "tijera"], ["piedra", "papel"], ["tijera", "piedra"], ["papel", "papel"], ["piedra", "tijera"],
  ["tijera", "papel"], ["papel", "piedra"], ["piedra", "piedra"], ["tijera", "tijera"], ["papel", "tijera"],
  ["piedra", "papel"], ["tijera", "piedra"], ["papel", "papel"], ["piedra", "tijera"], ["tijera", "papel"],
  ["papel", "piedra"], ["piedra", "piedra"], ["tijera", "tijera"], ["papel", "tijera"], ["piedra", "papel"],
  ["tijera", "piedra"], ["papel", "papel"], ["piedra", "tijera"], ["tijera", "papel"], ["papel", "piedra"],
  ["piedra", "piedra"], ["tijera", "tijera"], ["papel", "tijera"], ["piedra", "papel"], ["tijera", "piedra"],
  ["papel", "papel"], ["piedra", "tijera"], ["tijera", "papel"], ["papel", "piedra"], ["piedra", "piedra"],
  ["tijera", "tijera"], ["papel", "tijera"], ["piedra", "papel"], ["tijera", "piedra"], ["papel", "papel"],
  ["piedra", "tijera"], ["tijera", "papel"], ["papel", "piedra"], ["piedra", "piedra"], ["tijera", "tijera"],
  ["papel", "tijera"], ["piedra", "papel"], ["tijera", "piedra"], ["papel", "papel"], ["piedra", "tijera"],
  ["tijera", "papel"], ["papel", "piedra"], ["piedra", "piedra"], ["tijera", "tijera"], ["tijera", "tijera"],
  ["piedra", "papel"], ["tijera", "piedra"], ["papel", "papel"], ["piedra", "tijera"], ["tijera", "papel"],
  ["papel", "piedra"], ["piedra", "piedra"], ["tijera", "tijera"], ["papel", "tijera"], ["piedra", "papel"],
  ["tijera", "piedra"], ["papel", "papel"], ["piedra", "tijera"], ["tijera", "papel"], ["papel", "piedra"],
  ["piedra", "piedra"], ["tijera", "tijera"], ["papel", "tijera"], ["piedra", "papel"], ["tijera", "piedra"]
];

/**
 * escriba una funcion que reciba por parametro un array de resultados de dos jugadores en piedra, papel y 
 * tijera, cada resultado esta compuesto por un array de 2 elementos donde el primer item es el movimiento
 * del jugador 1 y el segundo item es el movimiento del jugador 2. La funcion debe retornar un objeto con 
 * la siguiente estructura:
 * 
 *  {
 *      ganador: "judador 1",
 *      partidos: 37,
 *      partidasPrimerJugador: 28,
 *      partidasSegundoJugador: 9     
 *  }
 */

function resultados(partidaActual) {
    const resultado = {
        ganador: null,
        partidos: 0,
        partidasPrimerJugador: 0,
        partidasSegundoJugador: 0,
    }

    for(let i = 0; i < partidaActual.length; i++) {
        if(partidaActual[i][0] === partidaActual[i][1]) {
            resultado.partidos++
            continue;
        }
        if((partidaActual[i][0] === 'piedra' && partidaActual[i][1] === 'tijera') 
            || (partidaActual[i][0] === 'tijera' && partidaActual[i][1] === 'papel')
            || (partidaActual[i][0] === 'papel' && partidaActual[i][1] === 'piedra')) {
            resultado.partidasPrimerJugador++;
            resultado.partidos++;
        } else {
            resultado.partidasSegundoJugador++;
            resultado.partidos++;
        }
    }

    if(resultado.partidasPrimerJugador < resultado.partidasSegundoJugador) {
        resultado.ganador = "jugador 2";
    } else if (resultado.partidasPrimerJugador > resultado.partidasSegundoJugador){
        resultado.ganador = "jugador 1";
    } else {
        resultado.ganador = "empate";
    }

    return resultado
}

console.log(resultados(rondas))