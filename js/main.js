//Valores de cursos y material didáctico

const elem = { nombre: "Elementary", precio: 1000, horario: "Monday and Wednesday, 19.00 to 21.00" }
const inter = { nombre: "Intermediate", precio: 1500, horario: "Tuesday and Thursday, 19.00 to 21.00" }
const adv = { nombre: "Advanced", precio: 2000, horario: "Friday, 18.00 to 21.00" }
const busEng = { nombre: "Business English", precio: 3000, horario: "Monday, 8.00 to 10.30" }
const techEng = { nombre: "Technical English", precio: 2500, horario: "Saturday, 9.00 to 12.30" }
const exam = { nombre: "Exam Training", precio: 2500, horario: "Monday and Wednesday, 16.30 to 18.30" }

const cursos = [elem, inter, adv, busEng, techEng, exam,]

const libro = { nombre: "Libro de Curso", precio: 300 }
const audio = { nombre: "Audio de Libro de Curso", precio: 150 }
const practica = { nombre: "Libro de Práctica", precio: 200 }

const materiales = [libro, audio, practica]

//Ingresar a sección de alumnos o profesores

let ingresoAlumnos = document.getElementById('ingreso-alumnos')
ingresoAlumnos.onclick = function() {
        window.location.href = 'pages/students.html';
    }

let ingresoProfes = document.getElementById('ingreso-profes')
ingresoProfes.onclick = function() {
        window.location.href = 'pages/teachers.html';
    }




