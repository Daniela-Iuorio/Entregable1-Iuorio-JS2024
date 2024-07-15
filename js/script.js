// // //Pido info al usuario, lo saludo y pido confirmación de que quiere jugar
// let nombre = prompt('Ingrese su nombre')
// let genero = prompt('Ingrese F para femenino, M para masculino o x para otro').toLowerCase()
// console.log('Nombre: '+nombre+' Género: '+genero)
// switch(genero){
//     case 'f':
//         alert('Bienvenida, '+ nombre +', al juego de los números!')
//         break
//     case 'm':
//         alert('Bienvenido, '+ nombre +', al juego de los números!')
//         break
//     case 'x':
//         alert('Bienvenid@, '+ nombre +', al juego de los números!')
//         break
//     default:
//         alert('Ha ingresado una opción inválida de género. Saludos! Continuemos al juego.')
// }

// confirm ('Este juego consiste en adivinar un número de 3 dígitos diferentes en menos de 10 intentos. Yo te diré qué dígitos has adivinado y cuáles son incorrectos. ¿Comenzamos?')

// //Genero el número que se debe adivinar. Creo un array y muestro el número en consola.

// let numeroAleatorio1 = Math.floor(Math.random() * 10)

// let numeroAleatorio2
// do {
//   numeroAleatorio2 = Math.floor(Math.random() * 10)
// } while (numeroAleatorio2 === numeroAleatorio1)

// let numeroAleatorio3
// do {
//   numeroAleatorio3 = Math.floor(Math.random() * 10)
// } while (numeroAleatorio3 === numeroAleatorio1 || numeroAleatorio3 === numeroAleatorio2)

// const numeroSecreto = [numeroAleatorio1, numeroAleatorio2, numeroAleatorio3]

// console.log('El número aleatorio generado es: '+numeroSecreto.join(' ')

// )


// //Creo funciones para comparar cada variable correspondiente a un dígito del número aleatorio generado.

// let digito1, digito2, digito3

// function compararDigito1 (){
//     if(digito1 === numeroAleatorio1){
//         return ('CORRECTO.')
//     }else{
//         return('INCORRECTO.')
//     }
// }

// function compararDigito2 (){
//     if(digito2 === numeroAleatorio2){
//         return ('CORRECTO.')
//     }else{
//         return('INCORRECTO.')
//     }
// }

// function compararDigito3 (){
//     if(digito3 === numeroAleatorio3){
//         return ('CORRECTO.')
//     }else{
//         return('INCORRECTO.')
//     }
// }


// // //Creo un ciclo con un máximo de 10 intentos que pida al usuario ingresar 3 dígitos. Cotejo y devuelvo info llamando a las funciones. Repito ciclo hasta que los tres dígitos coincidan o hasta que se agoten los intentos.

// let intentosAgotados = true 

// for (let i=0; i<10; i++) {

//         digito1 = parseInt(prompt('Ingrese el primer dígito'))
//         digito2 = parseInt(prompt('Ingrese el segundo dígito'))
//         digito3 = parseInt(prompt('Ingrese el tercer dígito'))
//         const numeroIngresado = [digito1, digito2, digito3]
//         console.log('El número ingresado es: '+numeroIngresado.join(' '))
//         alert('El número ingresado es: '+numeroIngresado.join(' '))
//         compararDigito1()
//         compararDigito2()
//         compararDigito3()
//         alert('\nEl primer dígito ('+digito1+') es '+compararDigito1()+'\nEl segundo dígito ('+digito2+') es '+compararDigito2()+'\nEl tercer dígito ('+digito3+') es '+compararDigito3())

//     if(digito1 == numeroAleatorio1 && digito2 == numeroAleatorio2 && digito3 == numeroAleatorio3){
//         alert('¡Felicitaciones! \nHas adivinado el número en 10 intentos o menos. \nPuedes volver a jugar si reinicias la página.')
//         intentosAgotados = false
//         break
//     }
// }

// if(intentosAgotados){
//     alert('Lo siento, se acabaron los intentos disponibles. \nEl número era: '+numeroSecreto.join(' ')+'. \nSi lo deseas, puedes reiniciar la página y volver a intentarlo.')
// }

function generarNumeroAleatorio() {
    let numero = '';
    while (numero.length < 3) {
        let digito = Math.floor(Math.random() * 10);
        if (!numero.includes(digito.toString())) {
            numero += digito.toString();
        }
    }
    return numero;
}

function iniciarJuego() {
    const numeroSecreto = generarNumeroAleatorio();
    let intentos = 0;
    const maxIntentos = 15;
    let juegoTerminado = false;

    while (intentos < maxIntentos && !juegoTerminado) {
        let intentoUsuario = prompt(`Intenta adivinar el número de 3 dígitos (Intento ${intentos + 1} de ${maxIntentos}):`);

        if (intentoUsuario === null) {
            alert("Juego cancelado.");
            return;
        }

        if (intentoUsuario.length !== 3 || isNaN(intentoUsuario) || new Set(intentoUsuario).size !== 3) {
            alert("Ingresa un número de 3 dígitos diferentes.");
            continue;
        }

        intentos++;
        let correctos = 0;
        let pistas = [];

        for (let i = 0; i < 3; i++) {
            if (intentoUsuario[i] === numeroSecreto[i]) {
                correctos++;
                pistas.push(`${intentoUsuario[i]}: Correcto`);
            } else if (numeroSecreto.includes(intentoUsuario[i])) {
                pistas.push(`${intentoUsuario[i]}: Incorrecto pero presente`);
            } else {
                pistas.push(`${intentoUsuario[i]}: Incorrecto`);
            }
        }

        alert(`Pistas:\n${pistas.join('\n')}`);

        if (correctos === 3) {
            alert(`¡Felicidades! Has adivinado el número ${numeroSecreto} en ${intentos} intentos.`);
            juegoTerminado = true;
        } else if (intentos === maxIntentos) {
            alert(`Lo siento, has agotado los ${maxIntentos} intentos. El número era ${numeroSecreto}.`);
        }
    }
}

iniciarJuego();