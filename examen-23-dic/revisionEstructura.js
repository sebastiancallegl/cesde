/**
 *  Crea una funcion llamada "revisarEstructura" que reciba como parametro un string // con una serie de parentesis (solo parentesis)
 *  la funcion debe devolver true si la estructura de parentesis es valida (es decir que cada simbolo de apertura
 *  tenga un simbolo de cierre adecuado) si la estructura no es valida se debe devolver un false.
 * 
 *  a continuacion vas a ver una serie de ejemplos sobre lo que se debe retornar:
 * 
 *  revisarEstructura("()") -> true
 *  revisarEstructura("()  ()") -> true
 *  revisarEstructura("())") -> false
 *  revisarEstructura("( (((( ())( ))") -> false
 *  revisarEstructura("( ( ( ()) ) () (()) ())") -> true
 */


function revisarEstructura(estructura) {
    let contador = 0;
    for(let i = 0; i < estructura.length; i++) {
        if (estructura[i] === "(") contador++;
        if (estructura[i] === ")") contador--;
        if (contador < 0) return false;
    }

    return !contador;
}

//  console.log(revisarEstructura("()"))
//  console.log(revisarEstructura("()  ()"))
//  console.log(revisarEstructura("())"))
//  console.log(revisarEstructura("( (((( ())( ))"))
//  console.log(revisarEstructura("( ( ( ()) ) () (()) ())"))


  console.log(revisarEstructura(")("))
