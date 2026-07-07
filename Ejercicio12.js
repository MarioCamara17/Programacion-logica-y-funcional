const historialCommits = [
    { version: 1.0, ambiente: "desarrollo" },
    { version: 1.1, ambiente: "desarrollo" },
    { version: 1.2, ambiente: "testing" },
    { version: 1.3, ambiente: "testing" },
    { version: 2.0, ambiente: "produccion" },
    { version: 2.1, ambiente: "produccion" },
    { version: 2.2, ambiente: "produccion" }
]


// Predicado atómico
// Esta función flecha recibe un objeto `commit` y devuelve:
// - `true` únicamente si `commit.ambiente` es "produccion"
// - `false` si `commit.ambiente` es "testing" (y también para cualquier otro valor distinto de "produccion")
const esProduccion = (commit) => {
    if (!commit || !commit.ambiente) return false
    if (commit.ambiente === "produccion") return true
    if (commit.ambiente === "testing") return false
    return false
}

// Búsqueda binaria guiada por un predicado atómico
// Objetivo: encontrar el primer índice en el historial donde el predicado sea `true`.
// Premisa: el arreglo está ordenado cronológicamente y existe una frontera
// entre los commits en "testing" (o anteriores) y los commits en "produccion".
// Algoritmo:
// 1. Mantener `izq` y `der` como límites de búsqueda (índices).
// 2. Mientras `izq <= der`, tomar `mid = Math.floor((izq + der) / 2)`.
// 3. Evaluar el predicado en `historial[mid]` (esta es la evaluación atómica).
//    - Si el predicado es true: registrar `mid` como `posibleRespuesta` y
//      seguir buscando a la izquierda (der = mid - 1) para hallar una producción más antigua.
//    - Si el predicado es false: moverse a la derecha (izq = mid + 1).
// 4. Al terminar, `posibleRespuesta` contiene el primer índice con `true` o -1 si no existe.
// Nota: este enfoque minimiza las evaluaciones del predicado (O(log n)).
function buscarPrimerConPredicado(historial, predicado) {
    let izq = 0
    let der = historial.length - 1
    let posibleRespuesta = -1

    while (izq <= der) {
        // Calcular punto medio
        const mid = Math.floor((izq + der) / 2)

        // Evaluación atómica del predicado en `historial[mid]`
        if (predicado(historial[mid])) {
            // Si cumple, guardamos como posible respuesta
            posibleRespuesta = mid
            // Pero seguimos buscando a la izquierda por si hay una producción anterior
            der = mid - 1
        } else {
            // Si no cumple, descartamos la mitad izquierda incluyendo mid
            izq = mid + 1
        }
    }

    return posibleRespuesta
}

// Invocación de la función y salida por consola
const indicePrimeraProduccion = buscarPrimerConPredicado(historialCommits, esProduccion)

if (indicePrimeraProduccion === -1) {
    console.log("No se encontró ningún commit en producción en el historial.")
} else {
    console.log(`Primer commit en producción encontrado en índice ${indicePrimeraProduccion}:`, historialCommits[indicePrimeraProduccion])
}

// Cálculo de la complejidad (número máximo de evaluaciones del predicado)
// Para la búsqueda binaria clásica, el número máximo de iteraciones (evaluaciones del predicado)
// en el peor caso es: floor(log2(n)) + 1, donde n = tamaño del arreglo.
// Fórmula: evaluaciones_max = floor(log2(n)) + 1
// Ejemplo: si n = 1_000_000
const n = 1000000
const evaluacionesMax = Math.floor(Math.log2(n)) + 1
console.log(`Con n = ${n}, evaluaciones máximas del predicado (peor caso): ${evaluacionesMax}`)