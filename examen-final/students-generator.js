const fs = require('fs');
const crypto = require('crypto');

// --- CATÁLOGOS DE DATOS ---
const data = {
    nombres: [
        'Alejandro', 'Beatriz', 'Carlos', 'Daniela', 'Eduardo', 'Fernanda', 'Gabriel', 'Helena', 'Iván', 'Julieta',
        'Kevin', 'Laura', 'Mateo', 'Natalia', 'Oscar', 'Patricia', 'Quique', 'Rosa', 'Santiago', 'Teresa',
        'Uriel', 'Valeria', 'Walter', 'Ximena', 'Yahir', 'Zoé', 'Adrián', 'Blanca', 'César', 'Diana',
        'Esteban', 'Fabiola', 'Guillermo', 'Hilda', 'Ignacio', 'Jacqueline', 'Leonardo', 'Mónica', 'Néstor', 'Olga',
        'Pablo', 'Raquel', 'Sergio', 'Tatiana', 'Ulises', 'Verónica', 'Wilmer', 'Xenia', 'Yolanda', 'Zacarías'
    ],
    apellidos: [
        'Alarcón', 'Barragán', 'Castaño', 'Delgado', 'Espinosa', 'Figueroa', 'Gallego', 'Hernández', 'Ibarra', 'Jiménez',
        'Lozano', 'Montoya', 'Navarro', 'Ochoa', 'Pacheco', 'Quintana', 'Ramírez', 'Salazar', 'Téllez', 'Uribe',
        'Valencia', 'Zapata', 'Aguirre', 'Beltrán', 'Cardona', 'Duarte', 'Estrada', 'Fuentes', 'Giraldo', 'Holguín',
        'Jaramillo', 'López', 'Mendoza', 'Noguera', 'Ortega', 'Peña', 'Quintero', 'Rojas', 'Suárez', 'Trujillo',
        'Upegui', 'Vargas', 'Willington', 'Ximénez', 'Yepes', 'Zuluaga', 'Abadía', 'Bermúdez', 'Correa', 'Daza'
    ],
    ciudades: [
        'Medellín', 'Bogotá', 'Cali', 'Barranquilla', 'Cartagena', 'Pereira', 'Bucaramanga', 'Manizales', 'Montería', 'Pasto',
        'Ibagué', 'Villavicencio', 'Santa Marta', 'Valledupar', 'Cúcuta', 'Neiva', 'Sincelejo', 'Popayán', 'Tunja', 'Quibdó',
        'Envigado', 'Itagüí', 'Sabaneta', 'Bello', 'Rionegro', 'Apartadó', 'Turbo', 'Caucasia', 'Chigorodó', 'Sogamoso',
        'Duitama', 'Zipaquirá', 'Facatativá', 'Fusagasugá', 'Girardot', 'Chía', 'Madrid', 'Funza', 'Mosquera', 'Soacha',
        'Palmira', 'Tulúa', 'Buenaventura', 'Cartago', 'Buga', 'Yumbo', 'Jamundí', 'Ipiales', 'Tumaco', 'Pitalito'
    ],
    carreras: [
        'Ingeniería de Sistemas', 
        'Derecho', 
        'Medicina', 
        'Psicología', 
        'Administración de Empresas',
        'Arquitectura', 
        'Diseño Gráfico', 
        'Contaduría Pública', 
        'Comunicación Social', 
        'Economía',
        'Ingeniería Industrial', 
        'Enfermería',
        'Ingeniería Civil',
        'Artes Plásticas',
        'Filosofía',
        'Biología',
        'Licenciatura en Lenguas Extranjeras',
        'Medicina Veterinaria',
        'Sociología',
        'Ingeniería Química'
    ],
    universidades: [
        "Universidad Nacional", "Universidad de Antioquia", "Universidad de los Andes", 
        "Universidad Javeriana", "Universidad del Rosario", "Universidad del Valle", 
        "Universidad EAFIT", "Universidad Pontificia Bolivariana", "Universidad de Medellín", 
        "Universidad Externado", "Universidad de La Sabana", "Universidad Industrial de Santander", 
        "Universidad del Norte", "Universidad de Caldas", "Universidad de Córdoba", 
        "Universidad de Nariño", "Universidad del Cauca", "Universidad de Cartagena", 
        "Universidad de Pamplona", "Universidad del Quindío", "Universidad del Tolima", 
        "Universidad de Magdalena", "Universidad de La Guajira", "Universidad del Chocó", 
        "Universidad de la Amazonía", "Universidad de los Llanos", 
        "Universidad Francisco de Paula Santander", "Universidad Distrital", 
        "Universidad Pedagógica", "Universidad CES"
    ]
};

// --- MAPEO DE UNIVERSIDADES A CÓDIGOS ---
const univMapping = {};
data.universidades.forEach(u => {
    univMapping[u] = crypto.createHash('sha256').update(u).digest('hex').substring(0, 10).toUpperCase();
});

// --- FUNCIÓN GENERADORA ---
function generarEstudiantes(n) {
    const estudiantes = [];

    for (let i = 0; i < n; i++) {
        const uniNombre = data.universidades[Math.floor(Math.random() * data.universidades.length)];
        
        estudiantes.push({
            userId: crypto.randomUUID(),
            firstName: data.nombres[Math.floor(Math.random() * data.nombres.length)],
            lastName: data.apellidos[Math.floor(Math.random() * data.apellidos.length)],
            originCity: data.ciudades[Math.floor(Math.random() * data.ciudades.length)],
            universityCode: univMapping[uniNombre],
            career: data.carreras[Math.floor(Math.random() * data.carreras.length)],
            age: Math.floor(Math.random() * (35 - 17 + 1)) + 17,
            // Campos extra para realismo
            email: `std_${i}@universidad.edu.co`,
            status: Math.random() > 0.1 ? 'Matriculado' : 'Inactivo',
            entryYear: 2020 + Math.floor(Math.random() * 6)
        });
    }

    // Guardar en archivo JSON
    fs.writeFileSync('estudiantes_db.json', JSON.stringify(estudiantes, null, 4));
    console.log(`✅ Archivo 'estudiantes_db.json' generado con ${n} registros.`);
}

// Ejecutar para generar 1000 estudiantes
generarEstudiantes(1000);