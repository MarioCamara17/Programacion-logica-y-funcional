const paquetes = Object.freeze([
    { tracking: 'ZA1', estado: 'Tabasco', peso: 20 },
    { tracking: 'ZA2', estado: 'Veracruz', peso: 18 },
    { tracking: 'ZA3', estado: 'Chiapas', peso: 5 },
    { tracking: 'ZA4', estado: 'Yucatán',  peso: 25 }, 
    { tracking: 'ZA5', estado: 'Tabasco', peso: 10 },
    { tracking: 'ZA6', estado: 'Oaxaca',   peso: 30 } 
]);

const esDestinoLocal=(p)=>p.estado==='Tabasco'
const esPesado=(p)=>p.peso>= 15

const envioPrioritario=(p)=>!esDestinoLocal(p) && esPesado(p)

function* envios (iterable, predicado){
    for(let paquete of iterable){
        if(predicado(paquete)){
            yield paquete
        }
    }
}

const urgente = envios(paquetes,envioPrioritario)

console.log('Paquetes urgentes a enviar')
console.log(urgente.next().value)
console.log(urgente.next().value)