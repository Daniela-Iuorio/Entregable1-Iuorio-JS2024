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

//Solicito información al usuario y ejecuto funciones correspondientes según el caso (alumno o profe)
let usuario = prompt("Welcome to English Connection! \nIngrese 'A' para alumn@s o 'P' para profesor@s").toLowerCase()

if (usuario == 'a') {
    redirectStudent()
} else if (usuario == 'p') {
    redirectTeacher()
} else {
    alert('Ha ingresado una opción inválida. Por favor, actualice la página e intente de nuevo.')
}

//Sección ALUMNOS
function redirectStudent() {
    alert("Está siendo redirigido a la sección Alumn@s")

    let studentName = prompt("¿Cuál es su nombre?").toUpperCase()

    let elegir

    while (true) {
        elegir = prompt('Hello, ' + studentName + '! \n¿Qué desea hacer? (Escriba 1, 2, 3 o 4) \n1- Ver cursos disponibles, sus horarios y valores \n2- Ver precio de materiales \n3- Comprar un curso y/o materiales \n4- Cerrar sesión')

        switch (elegir) {
            case '1':
                listaCursos()
                break
            case '2':
                listaMateriales()
                break
            case '3':
                comprarCurso()
                break
            case '4':
                alert('¡Gracias por visitar English Connection!')
                break
            default:
                alert('Por favor ingrese el número de la opción deseada: 1, 2, 3 o 4.')
                break
        }
        if (elegir === '4') {
            break
        }
    }

    function listaCursos() {
        let mensaje = ""
        for (const curso of cursos) {
            mensaje += "Curso: " + curso.nombre + "  | Precio: " + curso.precio + "  | Horario: " + curso.horario + "\n\n"
        }

        alert(mensaje)
    }

    function listaMateriales() {
        let mensaje = ""
        for (const material of materiales) {
            mensaje += "Material: " + material.nombre + "  | Precio: " + material.precio + "\n\n"
        }

        alert(mensaje)
    }

    function comprarCurso() {
        let contadorTotal = 0
        let listadoProductos = "Listado de productos:"
        let cantidadProductos = 0

        function agregarCurso(nombreCurso, valorCurso) {
            alert('Ha elegido el curso ' + nombreCurso + ' por un valor de $' + valorCurso + '.')
            cantidadProductos++
            contadorTotal += valorCurso
            listadoProductos += '\nCurso ' + nombreCurso + ' - $' + valorCurso
        }

        while (cantidadProductos < 1) {
            let cursoElegido = prompt('Ingrese el código del curso al que desea anotarse: \n\n00 - Elementary \n01 - Intermediate \n02 - Advanced \n03 - Business English \n04 - Technical English \n05 - Exam Training')

            switch (cursoElegido) {
                case '00':
                    agregarCurso("Elementary", elem.precio)
                    break
                case '01':
                    agregarCurso("Intermediate", inter.precio)
                    break
                case '02':
                    agregarCurso("Advanced", adv.precio)
                    break
                case '03':
                    agregarCurso("Business English", busEng.precio)
                    break
                case '04':
                    agregarCurso("Technical English", techEng.precio)
                    break
                case '05':
                    agregarCurso("Exam Training", exam.precio)
                    break
                default:
                    alert('No se ingresó una opción válida.')
                    break
            }
        }

        function agregarMaterial(nombreMaterial, valorMaterial) {
            alert('Ha elegido el ' + nombreMaterial + ' por un valor de $' + valorMaterial + '.')
            contadorTotal += valorMaterial
            listadoProductos += '\n' + nombreMaterial + ' - $' + valorMaterial
        }


        let compraMaterial = confirm('¿Desea adquirir el material didáctico del curso en formato digital?')


        while (compraMaterial) {
            let materialElegido = prompt('Ingrese el código del producto que desea adquirir: \n\n06 - Libro de Curso \n07 - Audio del libro de curso \n08 - Libro de Practica')

            switch (materialElegido) {
                case '06':
                    agregarMaterial("Libro de Curso", libro.precio)
                    break
                case '07':
                    agregarMaterial("Audio de Libro de Curso", audio.precio)
                    break
                case '08':
                    agregarMaterial("Libro de Práctica", practica.precio)
                    break
                default:
                    alert('No se ingresó una opción válida.')
            }

            compraMaterial = confirm('¿Desea agregar más productos?')
        }


        alert(listadoProductos + '\n\nEl total a pagar es de $' + contadorTotal + '. \n\nThank you!')
    }
}

//Sección PROFESORES
function redirectTeacher() {
    alert("You are being redirected to the Teacher's section")

    let teacherName = prompt("What's your name?").toUpperCase()

    while (true) {
        let choice = prompt('Welcome ' + teacherName + '! \n\nWhat would you like to do? (Enter 1, 2 or 3) \n\n1- See the list of courses and their timetables \n2-Calculate your earnings \n3- Exit')

        switch (choice) {
            case '1':
                listaCursos()
                break
            case '2':
                calculadora()
                break
            case '3':
                alert("Thank you for being part of English Connection!")
                break
            default:
                alert('Please enter the number of your choice: 1 or 2')
                break
        }
        if (choice === '3') {
            break
        }
    }

    function listaCursos() {
        let mensaje = ""
        for (const curso of cursos) {
            mensaje += "Course: " + curso.nombre + "  |  Timetable: " + curso.horario + "\n\n"
        }

        alert(mensaje)
    }


    function calculadora() {
        let ingresoParcial = 0
        let ingresoTotal = 0
        let listadoCursos = "Courses you teach:"
        let cantidadAlumnos

        let confirmacion = confirm("Let's calculate how much you'll earn per month, shall we?")

        function ingresarCurso(nombreCurso, valorCurso) {
            ingresoParcial = cantidadAlumnos * valorCurso
            ingresoTotal += ingresoParcial
            listadoCursos += '\n' + nombreCurso + ' (' + cantidadAlumnos + ' alumnos)'
        }

        while (confirmacion) {
            let cursoDictado = prompt('Enter the code of the course you teach. \n\n00 - Elementary \n01 - Intermediate \n02 - Advanced \n03 - Business English \n04 - Technical English \n05 - Exam Training')
            cantidadAlumnos = parseInt(prompt('How many students attend this course?'))

            switch (cursoDictado) {
                case '00':
                    ingresarCurso("Elementary", elem.precio)
                    break
                case '01':
                    ingresarCurso("Intermediate", inter.precio)
                    break
                case '02':
                    ingresarCurso("Advanced", adv.precio)
                    break
                case '03':
                    ingresarCurso("Business English", busEng.precio)
                    break
                case '04':
                    ingresarCurso("Technical English", techEng.precio)
                    break
                case '05':
                    ingresarCurso("Exam Training", exam.precio)
                    break
                default:
                    alert('Invalid. You must enter the two-digit code corresponding to the course you teach, one at a time.')
            }
            confirmacion = confirm('Do you wish to add another course?')
        }
        let gananciaProfe = ingresoTotal * 0.7
        alert(listadoCursos + '\n\nMonthly earnings: $' + gananciaProfe)
    }
}


