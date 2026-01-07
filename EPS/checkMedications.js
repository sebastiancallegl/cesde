const medicamentos = [
  "Acetaminofén", "Ibuprofeno", "Amoxicilina", "Loratadina", "Omeprazol",
  "Metformina", "Atorvastatina", "Losartán", "Enalapril", "Salbutamol",
  "Diclofenaco", "Naproxeno", "Azitromicina", "Ciprofloxacina", "Esomeprazol",
  "Lansoprazol", "Metoprolol", "Amlodipino", "Hidroclorotiazida", "Furosemida",
  "Prednisolona", "Dexametasona", "Clonazepam", "Diazepam", "Sertralina",
  "Fluoxetina", "Levotiroxina", "Warfarina", "Ácido Acetilsalicílico", "Clopidogrel",
  "Buscapina", "Trimebutina", "Diosmina", "Hesperidina", "Cetirizina",
  "Desloratadina", "Montelukast", "Fluticasona", "Budesonida", "Tramadol",
  "Codeína", "Gabapentina", "Pregabalina", "Meloxicam", "Celecoxib",
  "Metoclopramida", "Domperidona", "Ranitidina", "Sucralfato", "Clotrimazol"
];

const medicationsUsed = []
const medicationsNumber = Math.round(Math.random() * 10);
console.log(medicationsNumber)

for (let i = 0; i < medicationsNumber; i++) {
    const randomNumber = Math.random() * medicamentos.length
    console.log(randomNumber)
    console.log(Math.round(randomNumber))
    medicationsUsed.push(medicamentos[Math.round(Math.random() * medicamentos.length)])
}

console.log(medicationsUsed)