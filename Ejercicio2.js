const Hechos = [
    {padre: 'Juan', hijo: 'Luis'},
    {padre: 'Juan', hijo: 'Pedro'},
    {padre: 'Abraham', hijo: 'Juan'}
]

// DEFINICIÓN DE REGLAS
function sonHermanos(hijo1, hijo2){
    const padreHijo1 = Hechos.find(relacion => relacion.hijo === hijo1);
    const padreHijo2 = Hechos.find(relacion => relacion.hijo === hijo2);
    if (padreHijo1 && padreHijo2) {
        return padreHijo1.padre === padreHijo2.padre;
    }
    return false;
}

function esAbuelos(hijo, abuelo){
    const padreHijo = Hechos.find(relacion => relacion.hijo === hijo);
    if (padreHijo) {
        const padre = padreHijo.padre;
        const abueloHijo = Hechos.find(relacion => relacion.hijo === padre);
        if (abueloHijo) {
            return abueloHijo.padre === abuelo;
        }
    }
    return false;
}

function esPadre(padre, hijo){
    return Hechos.some(relacion => relacion.padre === padre && relacion.hijo === hijo);
}

function buscarPadre(hijo){
    const relacion = Hechos.find(relacion => relacion.hijo === hijo);
    return relacion ? relacion.padre : null;
}

function buscarHijos(padre){
    const hijos = Hechos.filter(relacion => relacion.padre === padre).map(relacion => relacion.hijo);
    return hijos;
}

// APLICACIÓN DE REGLAS (CONSULTAS)
console.log(sonHermanos('Luis', 'Pedro'));

console.log(esAbuelos('Pedro', 'Abraham'));
console.log(esAbuelos('Luis', 'Abraham'));

console.log('Abraham es padre de Juan:', esPadre('Abraham', 'Juan'));

console.log('El padre de Luis es:', buscarPadre('Luis'));

console.log('Los hijos de Juan son:', buscarHijos('Juan'));