const transacciones = Object.freeze([
    { id: 101, tipo: 'deposito', monto: 60000, pais: 'México' },
    { id: 102, tipo: 'retiro',   monto: 15000, pais: 'Colombia' }, 
    { id: 103, tipo: 'retiro',   monto: 12000, pais: 'México' },
    { id: 104, tipo: 'retiro',   monto: 55000, pais: 'México' },   
    { id: 105, tipo: 'deposito', monto: 90000, pais: 'Francia' },
    { id: 106, tipo: 'retiro',   monto: 75000, pais: 'Espana' }   
]);

const esRetiro=(t)=>t.tipo.includes('retiro')
const esMontoSospechoso=(t)=>t.monto>=50000
const esZonaDeRiesgo=(t)=>t.pais != 'México'

const alertaFraude=(t)=>esRetiro(t) && (esMontoSospechoso(t)||esZonaDeRiesgo(t))

// Generador perezoso para detectar fraudes
function* detectarFraudes(iterable, predicado){
    for(let transaccion of iterable){
        if(predicado(transaccion)){
            yield transaccion
        }
    }
}

// Crear el generador
const fraudes = detectarFraudes(transacciones, alertaFraude)

// Mostrar las primeras 2 transacciones fraudulentas
console.log("Primeras 2 fraudes detectados:")
console.log(fraudes.next().value)
console.log(fraudes.next().value)



