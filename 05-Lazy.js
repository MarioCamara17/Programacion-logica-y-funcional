//Generar numeros primos con funcion imperativa
const primosNumero = num => {
    if(num<2) return false
    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0) return false
    }
    return true
}

//Funcion 
function* generarPrimos(){
    let evaluar = 2;
    while(true){
        if(primosNumero(evaluar)){
            yield evaluar
        }
        evaluar++
    }
}

const generador = generarPrimos()

console.log("Primo 1:", generador.next().value)
console.log("Primo 2:", generador.next().value)
console.log("Primo 3:", generador.next().value)
console.log("Primo 4:", generador.next().value)
console.log("Primo 5:", generador.next().value)
console.log("Primo 6:", generador.next().value)
console.log("Primo 7:", generador.next().value)
console.log("Primo 8:", generador.next().value)
console.log("Primo 9:", generador.next().value)
console.log("Primo 10:", generador.next().value)
console.log("Primo 11:", generador.next().value)