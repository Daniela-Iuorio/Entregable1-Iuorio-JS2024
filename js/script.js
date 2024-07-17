//Valores de cursos y material didáctico

let elementary = 1000
let intermediate = 1500
let advanced = 2000
let business = 3000
let technical = 2500
let exams = 2500
let libroCurso = 300
let audioLibroCurso = 150
let libroPractica = 200

//solicitar información al usuario y ejecutar funciones correspondientes según el caso (alumno o profe)
let usuario = prompt('Are you a student or a teacher? Enter S for student or T for teacher').toLowerCase()

if (usuario == 's') {
    redirectStudent()
} else if (usuario == 't') {
    redirectTeacher()
} else {
    alert('Invalid. Please refresh the page and try again.')
}

//Sección ALUMNOS
function redirectStudent() {
    alert("You are being redirected to the Student's section")

    let studentName = prompt("What's your name?")

    alert('Hello, ' + studentName + '. Welcome to English Connection!')

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
                agregarCurso("Elementary", elementary)
                break
            case '01':
                agregarCurso("Intermediate", intermediate)
                break
            case '02':
                agregarCurso("Advanced", advanced)
                break
            case '03':
                agregarCurso("Business English", business)
                break
            case '04':
                agregarCurso("Technical English", technical)
                break
            case '05':
                agregarCurso("Exam Training", exams)
                break
            default:
                alert('No se ingresó una opción válida.')
                break
        }
    }

function agregarMaterial(nombreMaterial, valorMaterial){
    alert('Ha elegido el '+nombreMaterial+' por un valor de $' + valorMaterial + '.')
    contadorTotal += valorMaterial
    listadoProductos += '\n'+nombreMaterial+' - $'+valorMaterial
}


    let compraMaterial = confirm('¿Desea adquirir el material didáctico del curso en formato digital?')

    if (compraMaterial) {
        while (compraMaterial) {
            let materialElegido = prompt('Ingrese el código del producto que desea adquirir: \n\n06 - Libro de Curso \n07 - Audio del libro de curso \n08 - Libro de Practica')

            switch (materialElegido) {
                case '06':
                    agregarMaterial("Libro de Curso", libroCurso)
                    break
                case '07':
                    agregarMaterial("Audio de Libro de Curso", audioLibroCurso)
                    break
                case '08':
                    agregarMaterial("Libro de Práctica", libroPractica)
                    break
                default:
                    alert('No se ingresó una opción válida.')
            }

            compraMaterial = confirm('¿Desea agregar más productos?')
        }
    }

    alert(listadoProductos + '\n\nEl total a pagar es de $' + contadorTotal + '. \n\nThank you!')
}

//Sección PROFESORES
function redirectTeacher() {
    alert("You are being redirected to the Teacher's section")

    let teacherName = prompt("What's your name?")

    alert('Welcome ' + teacherName + '! \n\nEnter information about your courses to calculate how much you will earn.')

    let ingresoParcial = 0
    let ingresoTotal = 0
    let listadoCursos = "Courses you teach:"
    let cantidadAlumnos

    let confirmacion = confirm('Do you wish to add a course?')

    function ingresarCurso(nombreCurso, valorCurso){
        ingresoParcial = cantidadAlumnos * valorCurso
        ingresoTotal += ingresoParcial
        listadoCursos += '\n'+nombreCurso+' (' + cantidadAlumnos + ' alumnos)'
    }

    while (confirmacion) {
        let cursoDictado = prompt('Enter the code of the course you teach. \n\n00 - Elementary \n01 - Intermediate \n02 - Advanced \n03 - Business English \n04 - Technical English \n05 - Exam Training')
        cantidadAlumnos = parseInt(prompt('How many students attend this course?'))

        switch (cursoDictado) {
            case '00':
                ingresarCurso("Elementary", elementary)
                break
            case '01':
                ingresarCurso("Intermediate", intermediate)
                break
            case '02':
                ingresarCurso("Advanced", advanced)
                break
            case '03':
                ingresarCurso("Business English", business)
                break
            case '04':
                ingresarCurso("Technical English", technical)
                break
            case '05':
                ingresarCurso("Exam Training", exams)
                break
            default:
                alert('Invalid. You must enter the two digit code corresponding to the course you teach, one at a time.')
        }
        confirmacion = confirm('Do you wish to add another course?')
    }
    let gananciaProfe = ingresoTotal * 0.7
    alert(listadoCursos + '\n\nMonthly earnings: $' + gananciaProfe)
    alert("Thank you for being part of English Connection!")
}
