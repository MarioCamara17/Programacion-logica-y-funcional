const llenadoTanque=Object.freeze([
    "01-Magna",
    "02-Premium",
    "03-Magna",
    "04-Premium",
    "05-Premium"
]);

//Definir la regla o predicado
const esPremium=id=>id.includes("Premium")

//Definir la funcion
function* filtrarTipo(iterable, predicado){
    for(let gasolina of iterable){
        //console.log("Analiza el arreglo: ", gasolina)
        if(predicado(gasolina)){
            yield gasolina
        }
    }
}

// Definir la consulta

const bombadeCarga = filtrarTipo(llenadoTanque, esPremium)

console.log("Tipo gas: ", bombadeCarga.next().value);  
console.log("Tipo gas: ", bombadeCarga.next().value);  
console.log("Tipo gas: ", bombadeCarga.next().value);  