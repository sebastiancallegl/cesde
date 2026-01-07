const users = require('./user-database.json')


const usersCities = new Set(users.map((user) => user.city));

console.log(usersCities)