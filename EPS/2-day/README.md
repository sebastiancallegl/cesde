# Tareas

1. Por orden del gobierno debemos informar cuales hospitales del pais estan atendiendo la mayor cantidad de pacientes, para esto crea una funcion llamada busiestHospitals que retorne una lista de los 3 hospitales mas usados, los objetos de la lista deben tener la siguiente estrucutra:

    {
        hospitalName: "Clínica Especialistas de Sincelejo"
        usersServed: 1200
    }

2. Por control medico debemos informar sobre la ultima vez que un usuario se le administro cierto medicamento, para esto crea una funcion llamada medicationUsedTracker, la funcion debe recibir 2 parametros, el primer parametro puede ser el id del usuario o su nombre completo y el segundo parametro debe ser el nombre del medicamento, la respuesta de la funcion debe dar la siguiente informacion:

    {
        userId: "",
        fullName: "",
        date: "",
        hospitalName: ""
        doctor: ""
    }

    esos datos deben ser de la ultima vez que se le suministro el medicamento al usuario.

## Investigacion

1. El gobierno nacional nos acaba de informar sobre una irregularidad en nuestros centros de atencion, resulta que por ley ningun doctor puede atender mas de 4 especialidades diferentes entonces el gobierno nos esta pidiendo un informe sobre los doctores que han atendido mas de 4 especialidades, crea un script para encontrar una lista de esos doctores y las especialidades que han impartido. (nota: debes crear una lista con objetos donde cada objeto tenga el nombre del doctor y una lista con las especialidades que ha dado).
