/**
 * 2. Nos reportaron sobre un fraude de estudiantes que estan matriculados (su status debe ser "Matriculado") en carreras que no son ofrecidas en la universidad a la que pertenecen, Necesitamos generar una lista con los siguientes datos por cada uno de los estudiantes que estan cometiendo el fraude.

    {
      fullName: "",
      userId: "",
      universityName: "",
      career: ""
    }

 */

const students = require('./students_db.json');
const universities = require('./universities_db.json');


const findUniversityCareers = function(code) {
    return universities.find((university) => university.code === code)?.offeredCareers;
}

const wrongStudents = []

for (let student of students) {
    const universityCareers = findUniversityCareers(student.universityCode);

    if (!universityCareers.includes(student.career) && student.status === "Matriculado") {
        wrongStudents.push({
            fullName: student.firstName + " " + student.lastName,
            userId: student.userId,
            career: student.career,
            universityName: universities.find((university) => university.code === student.universityCode).universityName,
        })
    }
}

console.log(wrongStudents.length)