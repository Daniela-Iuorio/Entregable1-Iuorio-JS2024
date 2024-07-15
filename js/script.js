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


    while (cantidadProductos < 1) {
        let cursoElegido = prompt('Ingrese el código del curso al que desea anotarse: \n\n00 - Elementary \n01 - Intermediate \n02 - Advanced \n03 - Business English \n04 - Technical English \n05 - Exam Training')

        switch (cursoElegido) {
            case '00':
                alert('Ha elegido el curso Elementary por un valor de $' + elementary + '.')
                cantidadProductos++
                contadorTotal += elementary
                listadoProductos += '\nCurso Elementary $' + elementary
                break
            case '01':
                alert('Ha elegido el curso Intermediate por un valor de $' + intermediate + '.')
                cantidadProductos++
                contadorTotal += intermediate
                listadoProductos += '\nCurso Intermediate $' + intermediate
                break
            case '02':
                alert('Ha elegido el curso Advanced por un valor de $' + advanced + '.')
                cantidadProductos++
                contadorTotal += advanced
                listadoProductos += '\nCurso Advanced $' + advanced
                break
            case '03':
                alert('Ha elegido el curso Business English por un valor de $' + business + '.')
                cantidadProductos++
                contadorTotal += business
                listadoProductos += '\nCurso Business English $' + business
                break
            case '04':
                alert('Ha elegido el curso Technical English por un valor de $' + technical + '.')
                cantidadProductos++
                contadorTotal += technical
                listadoProductos += '\nCurso Technical English $' + technical
                break
            case '05':
                alert('Ha elegido el curso Exam Training por un valor de $' + exams + '.')
                cantidadProductos++
                contadorTotal += exams
                listadoProductos += '\nCurso Exam Training $' + exams
                break
            default:
                alert('No se ingresó una opción válida.')
                break
        }
    }

    let compraMaterial = confirm('¿Desea adquirir el material didáctico del curso en formato digital?')

    if (compraMaterial) {
        while (compraMaterial) {
            let materialElegido = prompt('Ingrese el código del producto que desea adquirir: \n\n06 - Libro de Curso \n07 - Audio del libro de curso \n08 - Libro de Practica')

            switch (materialElegido) {
                case '06':
                    alert('Ha elegido el Libro de Curso por un valor de $' + libroCurso + '.')
                    contadorTotal += libroCurso
                    listadoProductos += '\nLibro de Curso $' + libroCurso
                    break
                case '07':
                    alert('Ha elegido el Audio del libro de curso por un valor de $' + audioLibroCurso + '.')
                    contadorTotal += audioLibroCurso
                    listadoProductos += '\nAudio de Libro de Curso $' + audioLibroCurso
                    break
                case '08':
                    alert('Ha elegido el Libro de Práctica por un valor de $' + libroPractica + '.')
                    contadorTotal += libroPractica
                    listadoProductos += '\nLibro de Práctica $' + libroPractica
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

    let confirmacion = confirm('Do you wish to add a course?')

    while(confirmacion){
        let cursoDictado = prompt('Enter the code of the course you teach. \n\n00 - Elementary \n01 - Intermediate \n02 - Advanced \n03 - Business English \n04 - Technical English \n05 - Exam Training')
        let cantidadAlumnos = parseInt(prompt('How many students attend this course?'))

        switch(cursoDictado){
            case '00':
                ingresoParcial = cantidadAlumnos*elementary
                ingresoTotal += ingresoParcial
                listadoCursos += '\nElementary ('+cantidadAlumnos+' alumnos)'
                break
            case '01':
                ingresoParcial = cantidadAlumnos*intermediate
                ingresoTotal += ingresoParcial
                listadoCursos += '\nIntermediate ('+cantidadAlumnos+' alumnos)'
                break
            case '02':
                ingresoParcial = cantidadAlumnos*advanced
                ingresoTotal += ingresoParcial
                listadoCursos += '\nAdvanced ('+cantidadAlumnos+' alumnos)'
                break
            case '03':
                ingresoParcial = cantidadAlumnos*business
                ingresoTotal += ingresoParcial
                listadoCursos += '\nBusiness English ('+cantidadAlumnos+' alumnos)'
                break
            case '04':
                ingresoParcial = cantidadAlumnos*technical
                ingresoTotal += ingresoParcial
                listadoCursos += '\nTechnical English ('+cantidadAlumnos+' alumnos)'
                break
            case '05':
                ingresoParcial = cantidadAlumnos*exams
                ingresoTotal += ingresoParcial
                listadoCursos += '\nExam Training ('+cantidadAlumnos+' alumnos)'
                break
            default:
                alert('Invalid. You must enter the two digit code corresponding to the course you teach, one at a time.')
        }
        confirmacion = confirm('Do you wish to add another course?')
    }
    let gananciaProfe = ingresoTotal*0.7
    alert(listadoCursos+'\n\nMonthly earnings: $'+gananciaProfe)
}
