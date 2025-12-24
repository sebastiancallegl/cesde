const personas = [
    { nombre: "Sebastián", edad: 42, intereses: ["Cocina", "Senderismo"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Valentina", edad: 25, intereses: ["Fotografía"], ciudad: "Bogotá", genero: "Femenino" },
    { nombre: "Mateo", edad: 31, intereses: ["Programación", "Cine"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Lucía", edad: 19, intereses: ["Música", "Yoga"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Diego", edad: 54, intereses: ["Lectura"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Camila", edad: 28, intereses: ["Viajes", "Ciclismo"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Nicolás", edad: 37, intereses: ["Videojuegos"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Isabella", edad: 45, intereses: ["Pintura", "Cocina"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Andrés", edad: 22, intereses: ["Programación"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Mariana", edad: 60, intereses: ["Senderismo", "Yoga"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Felipe", edad: 33, intereses: ["Cine"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Daniela", edad: 29, intereses: ["Lectura", "Fotografía"], ciudad: "Bogotá", genero: "Femenino" },
    { nombre: "Gabriel", edad: 41, intereses: ["Música"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Elena", edad: 50, intereses: ["Pintura", "Viajes"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Lucas", edad: 24, intereses: ["Videojuegos", "Ciclismo"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Victoria", edad: 38, intereses: ["Cocina"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Javier", edad: 27, intereses: ["Programación", "Música"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Paula", edad: 35, intereses: ["Yoga"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Alejandro", edad: 48, intereses: ["Fotografía", "Lectura"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Sofía", edad: 21, intereses: ["Cine", "Pintura"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Mateo", edad: 55, intereses: ["Senderismo"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Valentina", edad: 30, intereses: ["Viajes"], ciudad: "Bogotá", genero: "Femenino" },
    { nombre: "Sebastián", edad: 26, intereses: ["Ciclismo", "Videojuegos"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Lucía", edad: 43, intereses: ["Cocina"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Diego", edad: 32, intereses: ["Programación", "Lectura"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Camila", edad: 47, intereses: ["Yoga", "Música"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Nicolás", edad: 23, intereses: ["Fotografía"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Isabella", edad: 52, intereses: ["Pintura"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Andrés", edad: 36, intereses: ["Cine", "Viajes"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Mariana", edad: 19, intereses: ["Videojuegos"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Felipe", edad: 40, intereses: ["Cocina", "Senderismo"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Daniela", edad: 58, intereses: ["Lectura"], ciudad: "Bogotá", genero: "Femenino" },
    { nombre: "Gabriel", edad: 25, intereses: ["Música", "Programación"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Elena", edad: 31, intereses: ["Fotografía"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Lucas", edad: 46, intereses: ["Ciclismo", "Yoga"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Victoria", edad: 22, intereses: ["Pintura"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Javier", edad: 39, intereses: ["Cine"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Paula", edad: 51, intereses: ["Viajes", "Cocina"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Alejandro", edad: 20, intereses: ["Lectura"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Sofía", edad: 44, intereses: ["Senderismo", "Música"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Valentina", edad: 57, intereses: ["Videojuegos", "Fotografía"], ciudad: "Bogotá", genero: "Femenino" },
    { nombre: "Sebastián", edad: 31, intereses: ["Yoga"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Lucía", edad: 49, intereses: ["Pintura", "Cine"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Diego", edad: 26, intereses: ["Viajes"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Camila", edad: 33, intereses: ["Ciclismo"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Nicolás", edad: 53, intereses: ["Cocina", "Lectura"], ciudad: "Medellín", genero: "Masculino" },
    { nombre: "Isabella", edad: 24, intereses: ["Música"], ciudad: "Sabaneta", genero: "Femenino" },
    { nombre: "Andrés", edad: 42, intereses: ["Programación", "Senderismo"], ciudad: "Bogotá", genero: "Masculino" },
    { nombre: "Mariana", edad: 30, intereses: ["Fotografía"], ciudad: "Medellín", genero: "Femenino" },
    { nombre: "Mateo", edad: 28, intereses: ["Programación"], ciudad: "Medellín", genero: "Masculino" },
];


/**
 *  Tenemos una base de datos de personas almacenada en una variable que se llama "personas" la cual puedes ver justo arriba.
 *  Un desarrollador que decidio abandonarnos dejo a medias una serie de requerimientos que el cliente nos solicito para un
 *  software en el que ellos estan trabajando que ayuda a las personas a encontrar pareja en nuestra base de datos.
 * 
 *  resulta que de los 3 requerimientos que el cliente nos pidio el desarrollador solo hizo 2 y los hizo mal, mas adelante esta
 *  el detalle de los requerimientos y de los avances que realizo nuestro desarrollador.
 */


/**
 *  el primer requerimiento fue crear una funcion llamada "encontrarParejaEnLaCiudad" que reciba por parametro un objeto de una
 *  persona (con la misma estructura de los objetos dentro del array personas), la funcion debe devolver la ultima persona del
 *  genero contrario a la persona que se le paso como parametro que este en al misma ciudad en nuestra base de datos.
 * 
 *  en este caso el desarrollador se equivoco porque si le pasamos el siguiente argumento a la funcion 
 *      { nombre: "Camilo", edad: 23, intereses: ["Arte"], ciudad: "Medellín", genero: "Masculino" }
 * 
 *  nos retorna 
 *      { nombre: "Mateo", edad: 28, intereses: ["Programación"], ciudad: "Medellín", genero: "Masculino" }
 *  
 *  pero deberia retornar
 *      { nombre: "Mariana", edad: 30, intereses: ["Fotografía"], ciudad: "Medellín", genero: "Femenino" }
 */

function encontrarParejaEnLaCiudad(personaObjetivo) {
    for (let persona of personas) {
        if (persona.ciudad === personaObjetivo.ciudad && persona.genero !== personaObjetivo.genero) return persona;
    }
}

console.log(encontrarParejaEnLaCiudad({ nombre: "Camilo", edad: 28, intereses: ["Arte"], ciudad: "Medellín", genero: "Masculino" }));


/**
 *  el segundo requerimiento fue crear una funcion llamada "encontrarParejasPotencialesPorEdad" que reciba por parametro un objeto de una
 *  persona (con la misma estructura de los objetos dentro del array personas), la funcion debe devolver un array de personas que cumplan
 *  con el siguiente criterio.
 * 
 *  1. debe estar en la misma ciudad.
 *  2. debe ser de un genero diferente.
 *  3. la diferencia de edades no debe ser mayor a 5 años.
 * 
 * 
 *  en este caso el desarrollador hizo todo mal porque el codigo solo devuelve una persona.
 */

function encontrarParejasPotencialesPorEdad(personaObjetivo) {
    let parejasPotenciales = [];

    for (let persona of personas) {
        if (persona.genero !== personaObjetivo.genero
            && persona.ciudad === personaObjetivo.edad
            && persona.edad - personaObjetivo.edad <= 5) parejasPotenciales.push(persona);
    }

    return parejasPotenciales;
}

console.log(encontrarParejasPotencialesPorEdad({ nombre: "Camilo", edad: 28, intereses: ["Arte"], ciudad: "Medellín", genero: "Masculino" }));

/**
 *  el ultimo requerimiento fue crear una funcion llamada "encontrarParejaPorInteres" que reciba por parametro un objeto de una
 *  persona (con la misma estructura de los objetos dentro del array personas), la funcion debe devolver una lista de las personas
 *  del genero contrario que al menos compartan un interes en comun con la persona que se paso como parametro de la funcion, las
 *  personas dentro de la lista deben estar en la misma ciudad.
 */

function encontrarParejaPorInteres(personaObjetivo) {
    let personasPotenciales = [];
    for(let i = 0; i < personas.length; i++) {
        if (personas[i].ciudad === personaObjetivo.ciudad && personas[i].genero !== personaObjetivo.genero) {
            for (let j = 0; j < personas[i].intereses.length; j++) {
                if (personaObjetivo.intereses.includes(personas[i].intereses[j])) {
                    personasPotenciales.push(personas[i]);
                }
            }
        }
    }

    return personasPotenciales
}


// el siguiente console.log debe imprimir 3 parejas potenciales (Daniela de 29 años, Valentina de 30 años y Daniela de 58 años)
console.log(encontrarParejaPorInteres({ nombre: "Camilo", edad: 28, intereses: ["Arte", "Programacion", "Lectura", "Viajes"], ciudad: "Bogotá", genero: "Masculino" }));