/**
 * necesitamos saber si un usuario es de alto riesgo, para esto podemos usar la edad
 * como un factor.Crea una funcion llamada userRiskByAge que reciba como parametro el
 * nombre de un usuario y retorne "alto" si el usuario tiene mas de 60 años, "medio"
 * si el usuario tiene entre 40 y 60 años y "bajo" si el usuario tiene menos de 40 años.
 */

const users = require('../user-database.json');

const userRiskByAge = function(user) {
    const userData = users.find((userData) => {
        if (user.split(" ").length > 1) {
            const [firstName, lastName] = user.split(" ");
            return userData.firstName.toLowerCase() === firstName.toLowerCase()
                && userData.lastName.toLowerCase() === lastName.toLowerCase()
        } else {
            return userData.userId === user.toLowerCase();
        }
    })

    if (userData.age > 60) {
        return "alto"
    } else if (userData.age < 20) {
        return "bajo"
    } else {
        return "medio"
    }
}


console.log(userRiskByAge("Diana parra"));
console.log(userRiskByAge("laura betancur"));
console.log(userRiskByAge("usr_040"));
console.log(userRiskByAge("sofía Muñoz"));
