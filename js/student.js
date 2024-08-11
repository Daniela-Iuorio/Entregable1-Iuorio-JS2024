//Sección ALUMNOS
function redirectStudent() {
    divPrincipal.innerHTML = `<h2>Alumn@s</h2>
                            <form action="#" method="get" class="flex-column">
    <label for="select" class="display-block">¿Qué desea hacer?</label>
    <div class="display-block">
    <input type="radio" id="ver-cursos" name="accion" value="cursos">
    <label for="ver-cursos">Ver cursos disponibles</label>
    </div>
    <div class="display-block">
    <input type="radio" id="ver-materiales" name="accion" value="materiales">
    <label for="ver-materiales">Ver precio de materiales</label>
    </div>
    <div class="display-block">
    <input type="radio" id="compra" name="accion" value="compra">
    <label for="ver-cursos">Comprar un curso y/o materiales</label>
    </div>
    <input type="submit" id="elegir" value="Elegir" class="elegir display-block">
</form>`


    const accionElegida = document.querySelector('input[name="accion"]:checked')


    let elegir = document.getElementById('elegir')
    elegir.onclick = () => {
        switch (accionElegida.value) {
            case 'cursos':
                listaCursos()
                break
            case 'materiales':
                listaMateriales()
                break
            case 'compra':
                comprarCurso()
                break
            default:
                redirectStudent()
                break
        }
    }


    function listaCursos() {
        let mensaje = ""
        for (const curso of cursos) {
            mensaje += "Curso: " + curso.nombre + "  | Precio: " + curso.precio + "  | Horario: " + curso.horario + "\n\n"
        }
        divPrincipal.innerHTML = `<h2>Alumn@s</h2>
                                    <p>Estos son los cursos disponibles:<br>
                                    ${mensaje}`
    }

    function listaMateriales() {
        let mensaje = ""
        for (const material of materiales) {
            mensaje += "Material: " + material.nombre + "  | Precio: " + material.precio + "\n\n"
        }

        // alert(mensaje)
    }

    function comprarCurso() {
        let contadorTotal = 0
        let listadoProductos = "Listado de productos:"
        let cantidadProductos = 0

        function agregarCurso(nombreCurso, valorCurso) {
            // alert('Ha elegido el curso ' + nombreCurso + ' por un valor de $' + valorCurso + '.')
            cantidadProductos++
            contadorTotal += valorCurso
            listadoProductos += '\nCurso ' + nombreCurso + ' - $' + valorCurso
        }

        while (cantidadProductos < 1) {
            // let cursoElegido = prompt('Ingrese el código del curso al que desea anotarse: \n\n00 - Elementary \n01 - Intermediate \n02 - Advanced \n03 - Business English \n04 - Technical English \n05 - Exam Training')

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
                    // alert('No se ingresó una opción válida.')
                    break
            }
        }

        function agregarMaterial(nombreMaterial, valorMaterial) {
            // alert('Ha elegido el ' + nombreMaterial + ' por un valor de $' + valorMaterial + '.')
            contadorTotal += valorMaterial
            listadoProductos += '\n' + nombreMaterial + ' - $' + valorMaterial
        }


        // let compraMaterial = confirm('¿Desea adquirir el material didáctico del curso en formato digital?')


        while (compraMaterial) {
            // let materialElegido = prompt('Ingrese el código del producto que desea adquirir: \n\n06 - Libro de Curso \n07 - Audio del libro de curso \n08 - Libro de Practica')

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

            // compraMaterial = confirm('¿Desea agregar más productos?')
        }


        // alert(listadoProductos + '\n\nEl total a pagar es de $' + contadorTotal + '. \n\nThank you!')
    }
}