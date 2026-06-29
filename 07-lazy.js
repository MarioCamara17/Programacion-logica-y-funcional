//Combinar programacion lazy con funcional
//Definir los predicado atomicos
const esPar=n=>n%2===0;
const multiploCinco=n=>n%5===0;
//Definir la funcion
function* filtrarNumeros(iterable,predicado){
    for(let dato of iterable){
        if(predicado(dato)){
            yield dato;
        }
    }
}

function* generarNumeros(){
    let i = 1
    while(true) yield i++
}

//Generar los numeros a traves de una variable
const numerosAleatorios=generarNumeros()

const generarPares=filtrarNumeros(numerosAleatorios, esPar)

console.log("Primer numero par: ",generarPares.next().value)
console.log("Primer numero par: ",generarPares.next().value)
console.log("Primer numero par: ",generarPares.next().value)
console.log("Primer numero par: ",generarPares.next().value)

const generarCincos=filtrarNumeros(numerosAleatorios, multiploCinco)

console.log("Primer multiplo de 5: ",generarCincos.next().value)
console.log("Primer multiplo de 5: ",generarCincos.next().value)
console.log("Primer multiplo de 5: ",generarCincos.next().value)