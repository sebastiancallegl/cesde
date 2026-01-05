# 🎓 Sistema Nacional de Registro Académico (SNRA)

Bienvenido al **SNRA**, el servicio centralizado que gestiona y consolida el historial académico de los estudiantes en todo el territorio nacional. Este sistema proporciona una infraestructura robusta para el seguimiento de las trayectorias educativas en las diversas universidades del país.

## 📋 Descripción General

Este servicio opera a nivel nacional y cuenta con un repositorio centralizado de todas las calificaciones de los estudiantes registrados. Los datos están organizados de forma relacional para garantizar la integridad y consistencia de la información académica nacional.

---

## 📂 Bases de Datos del Sistema

El ecosistema se divide en tres archivos principales interconectados:

### 1. Registro de Universidades (`universities_db.json`)

Este archivo actúa como el catálogo maestro de las instituciones de educación superior autorizadas.

* **Propiedades clave:**

  * `code`: Identificador único (Hash SHA-256) no entendible para el usuario, asegurando la privacidad institucional.
  * `universityName`: Nombre oficial de la institución.
  * `accreditation`: Nivel de acreditación (Alta Calidad / Estándar).
  * `offeredCareers`: Listado de las 17 carreras ofrecidas por la institución.
  * `additionalInfo`: Datos sobre fundación, tipo (Public/Private) y estado.

### 2. Registro de Estudiantes (`students_db.json`)

Contiene la información de los ciudadanos matriculados en el sistema educativo superior.

* **Propiedades clave:**

  * `userId`: Identificador único universal (UUID) del estudiante.
  * `firstName` / `lastName`: Nombres y apellidos.
  * `originCity`: Ciudad de origen del estudiante.
  * `universityCode`: Código que vincula al estudiante con su respectiva universidad.
  * `career`: Carrera en la que se encuentra matriculado.

### 3. Registro de Calificaciones (`grades_db.json`)

Centraliza el histórico de notas obtenidas por cada estudiante en las diferentes asignaturas de su plan de estudios.

* **Propiedades clave:**

  * `userId`: Referencia al identificador del estudiante.
  * `grade`: Calificación numérica (0.0 a 5.0).
  * `subject`: Nombre de la asignatura en español, vinculada directamente a la carrera del estudiante.
  * `passed`: Estado booleano que indica si el estudiante aprobó la materia (Nota ≥ 3.0).

---

## 🔗 Modelo de Relación de Datos

El sistema utiliza una arquitectura relacional basada en claves únicas para permitir consultas cruzadas eficientes:

* **Relación Universidad-Estudiante:** Vinculada a través de `universityCode` (Estudiante) y `code` (Universidad).
* **Relación Estudiante-Calificación:** Vinculada a través de `userId`.

---

## Trabajo

1. Necesitamos encontrar todos los estudiantes de Mosquera que estudien en la Universidad Nacional.

2. Nos reportaron sobre un fraude de estudiantes que estan matriculados (su status debe ser "Matriculado") en carreras que no son ofrecidas en la universidad a la que pertenecen, Necesitamos generar una lista con los siguientes datos por cada uno de los estudiantes que estan cometiendo el fraude.

    {
      fullName: "",
      userId: "",
      universityName: "",
    }

3. Necesitamos crear una funcion que nos permita identificar si un estudiante aprobo una materia, para esto la funcion debe recibir el nombre completo del estudiante y el nombre de la materia como parametros, debe retornar "true" si aprobo la materia o "false" si la reprobo. Nota: Cada estudiante tiene varias calificaciones en cada materia, para determinar si paso la materia, el promedio de las calificaciones debe ser superior a 3.

4. El pais se enfrenta a una situacion global compleja en la que requiere la mayor cantidad de medicos posible, para esto necesitamos encontrar una lista con los estudiantes de medicina que hallan aprobado 6 de las 10 materias que tiene la carrera de Medicina, la lista debe tener la siguiente estructura:

    {
      fullName: "",
      approvedSubjects: [],
      universityName: "",
    }