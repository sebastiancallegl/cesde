const servicesDb = require('./medical_history.json');

const userServices = servicesDb.filter((service) => service.userId === 'usr_035')

console.log(userServices);