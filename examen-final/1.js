// 1. Necesitamos encontrar todos los estudiantes de Mosquera que estudien en la Universidad Nacional.

const students = require('./students_db.json');
const universities = require('./universities_db.json');


const findUniversityIdByName = function(universityName) {
    return universities.find((university) => university.universityName === universityName)?.code;
}

const findStudents = function(universityName) {
    const universityCode = findUniversityIdByName(universityName);
    return students.filter((student) => student.universityCode === universityCode && student.originCity === 'Mosquera')
}


console.log(findStudents("Universidad Nacional"))