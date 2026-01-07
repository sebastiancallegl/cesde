const users = require("../user-database.json");

const userCity = function(user) {
    const userData = users.find((userData) => {
        if (user.split(" ").length > 1) {
            const [firstName, lastName] = user.split(" ");
            return userData.firstName.toLowerCase() === firstName.toLowerCase()
                && userData.lastName.toLowerCase() === lastName.toLowerCase()
        } else {
            return userData.userId === user.toLowerCase();
        }
    })

    return userData
        ? userData.city
        : "no existe el usuario";
};

console.log(userCity("ricardo daza"))
console.log(userCity("USR_030"))
console.log(userCity("sebastian calle"))