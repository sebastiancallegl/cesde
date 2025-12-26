# Tareas

1. necesitamos obtener la ciudad de un usuario dado, para esto crea una funcion llamada userCity que retorne el nombre de la ciudad del usuario. la funcion puede recibir el id del usuario o el nombre completo del usuario, si el usuario no existe en nuestros registros debe retornar "usuario no existe".

2. necesitamos saber si un usuario es de alto riesgo, para esto podemos usar la edad como un factor.Crea una funcion llamada userRiskByAge que reciba como parametro el nombre de un usuario y retorne "alto" si el usuario tiene mas de 60 años, "medio" si el usuario tiene entre 40 y 60 años y "bajo" si el usuario tiene menos de 40 años.

3. necesitamos obtener informacion de la ultima cita que el paciente tuvo con nosotros, para esto crea una funcion llamada userLastAppointment que reciba como parametro el nombre completo del usuario o su id, la funcion debe retornar la siguiente informacion.

    {
        userId: "",
        fullName: "",
        serviceId: ""
        speciality: "",
        hospitalName: "",
        medicalNotes: "",
        medicationsUsed: "",
        date: ""
    }
