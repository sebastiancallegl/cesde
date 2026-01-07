const fs = require('fs');

// --- CAREER SUBJECTS MAP (Spanish Names) ---
const careerSubjects = {
    'Ingeniería de Sistemas': ['Estructuras de Datos', 'Algoritmos', 'Sistemas Operativos', 'Computación en la Nube', 'Redes de Computadores', 'Bases de Datos', 'Inteligencia Artificial', 'Ciberseguridad', 'Arquitectura de Software', 'Compiladores'],
    'Derecho': ['Derecho Civil', 'Derecho Penal', 'Derechos Humanos', 'Derecho Laboral', 'Derecho Constitucional', 'Derecho Romano', 'Filosofía del Derecho', 'Derecho Internacional', 'Derecho Administrativo', 'Derecho de Familia'],
    'Medicina': ['Anatomía', 'Fisiología', 'Bioquímica', 'Patología', 'Farmacología', 'Histología', 'Embriología', 'Microbiología', 'Medicina Interna', 'Cirugía'],
    'Psicología': ['Psicología Cognitiva', 'Psicología Social', 'Psicología del Desarrollo', 'Psicopatología', 'Neurociencia', 'Psicología Clínica', 'Métodos de Investigación', 'Ética Profesional', 'Psicología Educativa', 'Terapia de Grupo'],
    'Administración de Empresas': ['Marketing', 'Finanzas', 'Contabilidad', 'Gerencia Estratégica', 'Recursos Humanos', 'Economía', 'Derecho Empresarial', 'Estadística', 'Gestión de Operaciones', 'Emprendimiento'],
    'Arquitectura': ['Taller de Diseño', 'Historia de la Arquitectura', 'Sistemas Estructurales', 'Urbanismo', 'Materiales de Construcción', 'Modelado Digital', 'Sostenibilidad', 'Diseño de Paisaje', 'Teoría de la Arquitectura', 'Gestión de Proyectos'],
    'Diseño Gráfico': ['Tipografía', 'Teoría del Color', 'Ilustración', 'Diseño UX/UI', 'Branding', 'Fotografía', 'Diseño Editorial', 'Motion Graphics', 'Comunicación Visual', 'Historia del Diseño'],
    'Contaduría Pública': ['Auditoría', 'Derecho Tributario', 'Análisis Financiero', 'Contabilidad de Costos', 'Estándares Internacionales', 'Finanzas Corporativas', 'Macroeconomía', 'Ética Empresarial', 'Finanzas Públicas', 'Sistemas de Información Contable'],
    'Comunicación Social': ['Periodismo', 'Relaciones Públicas', 'Teoría de Medios', 'Contenido Digital', 'Comunicación Política', 'Producción Audiovisual', 'Semiología', 'Identidad Corporativa', 'Derecho de Medios', 'Sociología de la Comunicación'],
    'Economía': ['Microeconomía', 'Macroeconomía', 'Econometría', 'Teoría de Juegos', 'Política Pública', 'Economía del Desarrollo', 'Política Monetaria', 'Comercio Internacional', 'Pensamiento Económico', 'Matemática Financiera'],
    'Ingeniería Industrial': ['Control de Calidad', 'Logística', 'Cadena de Suministro', 'Diseño del Trabajo', 'Seguridad Industrial', 'Investigación de Operaciones', 'Simulación', 'Ergonomía', 'Procesos de Manufactura', 'Gestión Lean'],
    'Enfermería': ['Cuidado del Paciente', 'Geriatría', 'Pediatría', 'Enfermería Quirúrgica', 'Salud Pública', 'Primeros Auxilios', 'Ética en Enfermería', 'Farmacología Clínica', 'Salud Comunitaria', 'Anatomía II'],
    'Ingeniería Civil': ['Mecánica de Suelos', 'Hidráulica', 'Topografía', 'Estructuras de Acero', 'Diseño de Concreto', 'Geotecnia', 'Impacto Ambiental', 'Vías y Transporte', 'Ingeniería Sísmica', 'Gerencia de Construcción'],
    'Artes Plásticas': ['Dibujo', 'Escultura', 'Pintura al Óleo', 'Historia del Arte', 'Arte Contemporáneo', 'Arte Conceptual', 'Estética', 'Museología', 'Composición', 'Grabado'],
    'Filosofía': ['Lógica', 'Metafísica', 'Epistemología', 'Ética', 'Filosofía Antigua', 'Filosofía Moderna', 'Filosofía Política', 'Existencialismo', 'Filosofía del Lenguaje', 'Filosofía Medieval'],
    'Biología': ['Genética', 'Ecología', 'Evolución', 'Botánica', 'Zoología', 'Biología Molecular', 'Biología Celular', 'Biología Marina', 'Bioinformática', 'Inmunología'],
    'Licenciatura en Lenguas Extranjeras': ['Fonética', 'Pedagogía', 'Literatura', 'Traducción', 'Lingüística Aplicada', 'Adquisición de Segundas Lenguas', 'Sociolingüística', 'Gramática', 'Estudios Culturales', 'Didáctica'],
    'Medicina Veterinaria': ['Anatomía Veterinaria', 'Zootecnia', 'Patología Animal', 'Cirugía Veterinaria', 'Inmunología', 'Nutrición Animal', 'Clínica de Grandes Animales', 'Clínica de Pequeños Animales', 'Salud Pública Veterinaria', 'Radiología'],
    'Sociología': ['Teoría Social', 'Sociología Urbana', 'Demografía', 'Estudios de Género', 'Sociología de la Educación', 'Etnografía', 'Movimientos Sociales', 'Sociología Cultural', 'Estudios de Desigualdad', 'Sociología Política'],
    'Ingeniería Química': ['Termodinámica', 'Química Orgánica', 'Química Inorgánica', 'Control de Procesos', 'Transferencia de Calor', 'Mecánica de Fluidos', 'Ingeniería de Reacciones', 'Procesos de Separación', 'Transferencia de Masa', 'Diseño de Plantas']
};

/**
 * @param {number} gradesPerStudent - Cantidad de notas por cada UUID
 */
function generateGrades(gradesPerStudent) {
    try {
        const students = JSON.parse(fs.readFileSync('estudiantes_db.json', 'utf8'));
        
        // Mapeo rápido para optimizar la búsqueda
        const studentMap = new Map(students.map(s => [s.userId, s.career]));
        const allGrades = [];

        students.forEach(user => {
            const career = user.career
            
            if (career && careerSubjects[career]) {
                const subjects = careerSubjects[career];

                for (let subject of subjects) {                    
                    for (let i = 0; i < gradesPerStudent; i++) {
                    const gradeValue = parseFloat((Math.random() * 5).toFixed(1));
                    
                        allGrades.push({
                            userId: user.userId,
                            grade: gradeValue,
                            subject: subject,
                            passed: gradeValue >= 3.0
                        });
                    }
                }
            }
        });

        fs.writeFileSync('grades_db.json', JSON.stringify(allGrades, null, 4));
        console.log(`✅ ¡Éxito! 'grades_db.json' generado con ${allGrades.length} registros.`);

    } catch (error) {
        console.error("❌ Error:", error.message);
    }
}

// Generamos 5 notas por cada estudiante del array de UUIDs
generateGrades(10);