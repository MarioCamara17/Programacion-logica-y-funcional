// deepFreeze
function deepFreeze(obj) {
    Object.freeze(obj);
    Object.values(obj).forEach(value => {
        if (typeof value === 'object' && value !== null) {
            deepFreeze(value);
        }
    });
    return obj;
}

const aspirantes = deepFreeze([
    { nombre: 'Luis',  examen: 90, entrevista: 80, estudioSocioeconomico: true },  
    { nombre: 'Elena', examen: 70, entrevista: 90, estudioSocioeconomico: true },  
    { nombre: 'Pedro', examen: 95, entrevista: 90, estudioSocioeconomico: false }, 
    { nombre: 'María', examen: 85, entrevista: 95, estudioSocioeconomico: true },  
    { nombre: 'Iván',  examen: 90, entrevista: 90, estudioSocioeconomico: true }  
]);

const aspirantesConPuntaje = aspirantes.map(aspirante => ({...aspirante,puntajeFinal: (aspirante.examen * 0.70) + (aspirante.entrevista * 0.30)
}));

console.log("Aspirantes con puntaje final:")
console.log(aspirantesConPuntaje);
console.log("");

const calificaParaBeca = (e) => e.puntajeFinal >= 85 && e.estudioSocioeconomico === true;


function* filtrarBecados(iterable, predicado) {
    for (let aspirante of iterable) {
        if (predicado(aspirante)) {
            yield aspirante;
        }
    }
}

const becados = filtrarBecados(aspirantesConPuntaje, calificaParaBeca);

const primerosBecados = [];
for (let i = 0; i < 2; i++) {
    const resultado = becados.next();
    if (!resultado.done) {
        primerosBecados.push(resultado.value);
    }
}

console.log("Primeros 2 becados:");
console.log(primerosBecados);
console.log("");

// Calcular promedio de puntajes con reduce
const promedioBecados = primerosBecados.reduce((suma, aspirante, indice, arr) => {
    suma += aspirante.puntajeFinal;
    if (indice === arr.length - 1) {
        return suma / arr.length;
    }
    return suma;
}, 0);

console.log(`Promedio de puntajes de los 2 primeros becados: ${promedioBecados.toFixed(2)}`);

