/**
 * necesitamos obtener informacion de la ultima cita que el paciente tuvo con nosotros,
 * para esto crea una funcion llamada userLastAppointment que reciba como parametro el
 * nombre completo del usuario o su id, la funcion debe retornar la siguiente informacion.

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
 */

const users = require('../user-database.json');
const history = require('../medical_history.json')

const userLastAppointment = function(user) {
    const userData = users.find((userData) => {
        if (user.split(" ").length > 1) {
            const [firstName, lastName] = user.split(" ");
            return userData.firstName.toLowerCase() === firstName.toLowerCase()
                && userData.lastName.toLowerCase() === lastName.toLowerCase()
        } else {
            return userData.userId === user.toLowerCase();
        }
    })

    const {
        serviceId,
        speciality,
        hospitalName,
        medicalNotes,
        medicationsUsed,
        date
    } = history.findLast((service) => service.userId === userData.userId);

    return {
        userId: userData.userId,
        fullName: userData.firstName + " " + userData.lastName,
        serviceId,
        speciality,
        hospitalName,
        medicalNotes,
        medicationsUsed,
        date
    }
}

console.log(userLastAppointment("Diana parra"));
console.log(userLastAppointment("laura betancur"));
console.log(userLastAppointment("usr_040"));
console.log(userLastAppointment("sofía Muñoz"));