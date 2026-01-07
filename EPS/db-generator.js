const fs = require('fs');
const users = require('./user-database.json')


// 2. Hospital Mapping (Max 2 per city to respect your constraint)
const cityHospitals = {
  'Bogotá': ['Fundación Santa Fe de Bogotá', 'Hospital Universitario San Ignacio', 'Hospital San José'],
  'Medellín': ['Hospital Pablo Tobón Uribe', 'Hospital Universitario San Vicente Fundación', 'Clínica Las Américas'],
  'Cali': ['Clínica Valle del Lili', 'Centro Médico Imbanaco', 'Hospital Universitario del Valle'],
  'Barranquilla': ['Clínica Portoazul', 'Clínica General del Norte', 'Hospital Universidad del Norte'],
  'Cartagena': ['Hospital Universitario del Caribe', 'Nuevo Hospital Bocagrande', 'Clínica Medihel'],
  'Bucaramanga': ['FOSCAL (Fundación Oftalmológica de Santander)', 'Hospital Universitario de Santander', 'Clínica Chicamocha'],
  'Pereira': ['Clínica Comfamiliar', 'Hospital Universitario San Jorge', 'Clínica Los Rosales'],
  'Santa Marta': ['Hospital Universitario Julio Méndez Barreneche', 'Clínica Mar Caribe', 'Clínica Prado'],
  'Ibagué': ['Hospital Federico Lleras Acosta', 'Clínica Ibagué', 'Clínica Tolima'],
  'Pasto': ['Hospital Universitario Departamental de Nariño', 'Clínica Hispanoamérica', 'Hospital Infantil Los Ángeles'],
  'Manizales': ['SES Hospital Universitario de Caldas', 'Hospital General Santa Sofía', 'Clínica San Marcel'],
  'Cúcuta': ['Hospital Universitario Erasmo Meoz', 'Clínica Norte', 'Clínica San José'],
  'Villavicencio': ['Hospital Departamental de Villavicencio', 'Clínica Cooperativa de Colombia', 'Clínica Servimédicos'],
  'Armenia': ['Hospital Universitario San Juan de Dios', 'Clínica Central del Quindío', 'Clínica Sagrada Familia'],
  'Valledupar': ['Hospital Rosario Pumarejo de López', 'Clínica Médicos Alta Complejidad', 'Clínica Valledupar'],
  'Montería': ['Hospital Universitario San Jerónimo', 'Clínica IMAT Oncomédica', 'Clínica Montería'],
  'Sincelejo': ['Hospital Universitario de Sincelejo', 'Clínica Santa María', 'Clínica Especialistas de Sincelejo'],
  'Popayán': ['Hospital Universitario San José', 'Clínica La Estancia', 'Hospital Susana López de Valencia'],
  'Tunja': ['Hospital Universitario San Rafael de Tunja', 'Clínica Medilaser', 'Hospital Metropolitano de Tunja'],
  'Riohacha': ['Hospital Nuestra Señora de los Remedios', 'Clínica Cedes', 'Clínica Renacer'],
  'Neiva': ['Hospital Universitario Hernando Moncaleano Perdomo', 'Clínica Medilaser Neiva', 'Clínica Uros'],
  'Quibdó': ['Hospital Ismael Roldán Valencia', 'Hospital Departamental San Francisco de Asís', 'Clínica Comfachocó'],
  'Florencia': ['Hospital Comunal Malvinas', 'Hospital María Inmaculada', 'Clínica Medilaser Florencia'],
  'Yopal': ['Hospital Regional de la Orinoquía', 'Clínica Casanare', 'E.S.E. Salud Yopal'],
  'San Andrés': ['Hospital Amor de Patria', 'Clínica Villarreal', 'Hospital Clarence Lynd Newball Memorial'],
  'Arauca': ['Hospital San Vicente de Arauca', 'Clínica Arauca', 'E.S.E. Jaime Alvarado y Castilla'],
  'Mocoa': ['Hospital José María Hernández', 'Clínica Putumayo', 'E.S.E. Hospital Local de Mocoa'],
  'San José del Guaviare': ['Hospital San José del Guaviare', 'E.S.E. Red de Servicios de Salud', 'Clínica del Guaviare'],
  'Inírida': ['Hospital Manuel Elkin Patarroyo', 'E.S.E. Hospital Departamental de Inírida', 'IPS Municipal Inírida'],
  'Puerto Carreño': ['Hospital Departamental San Juan de Dios', 'E.S.E. Hospital de Puerto Carreño', 'IPS Orinoquía']
};

const specialties = [
  "Endocrinología",
  "Nefrología",
  "Reumatología",
  "Infectología",
  "Neumología",
  "Hematología",
  "Cirugía General",
  "Ortopedia y Traumatología",
  "Neurocirugía",
  "Cirugía Plástica y Reconstructiva",
  "Otorrinolaringología",
  "Oftalmología",
  "Psiquiatría",
  "Psicología Clínica",
  "Radiología e Imágenes",
  "Anestesiología",
  "Oncología",
  "Dermatología",
  "Ginecología y Obstetricia",
  "Pediatría",
  "Geriatría",
  "Medicina Física y Rehabilitación",
  "Cardiología",
  "Medicina General",
  "Gastroenterología",
  "Urología",
  "Medicina Interna",
  "Fisiatría",
  "Medicina del Deporte",
  "Alergología"
];

const doctors = [
  "Dr. Camilo Echeverry",
  "Dra. Claudia Restrepo",
  "Dr. Sergio Vargas",
  "Dr. Fernando Ruiz",
  "Dra. Patricia Llinás",
  "Dr. Alberto Martínez",
  "Dra. Elena Gómez",
  "Dr. Mateo Gil",
  "Dra. Lucía Bernal",
  "Dr. Nicolás Ospina",
  "Dra. Isabela Rosales",
  "Dr. Felipe Betancur",
  "Dra. Daniela Salazar",
  "Dra. Marina Castro",
  "Dr. Lucas Jaramillo",
  "Dr. Gabriel Méndez",
  "Dra. Victoria Arango",
  "Dr. Javier Pinilla",
  "Dra. Paula Holguín",
  "Dr. Alejandro Daza",
  "Dra. Sofía Muñoz",
  "Dr. Ricardo Pineda",
  "Dra. Clara Pinto",
  "Dr. Luis Burbano",
  "Dra. Mónica Ortiz",
  "Dr. Hugo Rincón",
  "Dra. Diana Parra",
  "Dr. Oscar Valencia",
  "Dra. Natalia Cárdenas",
  "Dr. Fernando Sierra",
  "Dra. Beatriz Uribe",
  "Dr. Gustavo Duarte",
  "Dra. Sandra Correa",
  "Dr. Raúl Henao",
  "Dra. Adriana Lozano",
  "Dr. Juan Castellanos",
  "Dra. Rosa Ríos",
  "Dr. Mario Vargas",
  "Dra. Patricia Giraldo",
  "Dr. Emilio Espinosa"
];

const notes = [
  "Paciente refiere cefalea tensional recurrente asociada a fatiga visual.",
  "Se evidencia evolución satisfactoria de la herida quirúrgica.",
  "Se recomienda reducir la ingesta de sodio y aumentar el consumo de líquidos.",
  "Paciente manifiesta molestias gastrointestinales tras la ingesta de alimentos grasos.",
  "Control de hipertensión arterial; se mantiene el esquema terapéutico actual.",
  "Se solicita radiografía de tórax para descartar proceso infeccioso.",
  "Resultados de laboratorios previos dentro de los rangos de normalidad.",
  "Paciente presenta cuadro alérgico cutáneo; se prescribe antihistamínico.",
  "Se observa inflamación en extremidades inferiores; se sugiere reposo y elevación.",
  "Control de crecimiento y desarrollo; parámetros acordes a la edad.",
  "Paciente reporta episodios de mareo matutino; se solicita prueba de glucemia.",
  "Se recomienda inicio de actividad física leve (caminata) 30 minutos al día.",
  "Esquema de vacunación actualizado tras la aplicación de refuerzo estacional.",
  "Paciente presenta tos seca persistente de dos semanas de evolución.",
  "Se realiza curación de primer grado; no hay signos de infección local.",
  "Se coordina interconsulta con nutrición para manejo de índice de masa corporal.",
  "Paciente refiere dolor agudo en zona lumbar tras esfuerzo físico.",
  "Control de tiroides; se ajusta dosis de medicamento según resultados de TSH.",
  "Se detecta niveles elevados de colesterol; se entrega guía de dieta saludable.",
  "Paciente en buen estado general, sin síntomas de alarma al momento del examen."
];

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


// 3. Generation Logic
const generateRecords = (count) => {
    const records = [];
    
    for (let i = 1; i <= count; i++) {
        // Pick a truly random user
        const randomUser = users[Math.floor(Math.random() * users.length)];
        
        // Get hospitals for that user's city
        const hospitals = cityHospitals[randomUser.city] || cityHospitals["Default"];
        const hospital = hospitals[Math.floor(Math.random() * hospitals.length)];

        // Random Date within the last 2 years
        const start = new Date(2023, 0, 1);
        const end = new Date();
        const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
        const medicationsUsed = []
        const medicationsNumber = Math.round(Math.random() * 10);

        for (let i = 0; i < medicationsNumber; i++) {
            medicationsUsed.push(medicamentos[Math.round(Math.random() * (medicamentos.length - 1))])
        }

        records.push({
            serviceId: `srv_${String(i).padStart(4, '0')}`,
            userId: randomUser.userId,
            date: randomDate.toISOString(),
            hospitalName: hospital,
            medicalNotes: notes[Math.floor(Math.random() * notes.length)],
            doctor: doctors[Math.floor(Math.random() * doctors.length)],
            speciality: specialties[Math.floor(Math.random() * specialties.length)],
            medicationsUsed
        });
    }
    return records;
};

// 4. Save to JSON
const historyData = generateRecords(50000);
fs.writeFileSync('medical_history.json', JSON.stringify(historyData, null, 2));

console.log("✅ 50000 random records generated in medical_history.json");