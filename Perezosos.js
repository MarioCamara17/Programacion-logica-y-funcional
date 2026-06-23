// Generador de IDs unicos
function* generarIds() {
  let i = 1;
  while (true) { 
    yield `TEC-2026-${i}`;
    i++;
  }
}

const generadorId = generarIds();
console.log(generadorId.next().value); 
console.log(generadorId.next().value); 



// Paginacion infinita
const dbPosts = ["Post 1", "Post 2", "Post 3", "Post 4", "Post 5", "Post 6"];

function* obtenerFeedPaginado(posts, tamañoPagina = 3) {
  for (let i = 0; i < posts.length; i += tamañoPagina) {
    const chunk = posts.slice(i, i + tamañoPagina);
    console.log(`-> Procesando e indexando ${chunk.length} posts...`);
    yield chunk.map(p => `<html>${p}</html>`);
  }
}

// Uso:
const feed = obtenerFeedPaginado(dbPosts);
console.log(feed.next().value); 
console.log(feed.next().value); 


// Buscador de errores criticos
const logsServidor = ["200 OK", "200 OK", "500 ERROR", "200 OK", "500 ERROR", "404 NOT FOUND"];

function* buscarErrores(logs) {
  for (const log of logs) {
    if (log.includes("500")) {
      yield log;
    }
  }
}

const buscadorErrores = buscarErrores(logsServidor);
console.log(buscadorErrores.next().value);
console.log(buscadorErrores.next().value);



// Fibonacci
function* serieFibonacci() {
  let [prev, sig] = [0, 1];
  
  while (true) {
    yield prev;
    [prev, sig] = [sig, prev + sig]; 
  }
}

const fibonacci = serieFibonacci();
console.log(fibonacci.next().value); 
console.log(fibonacci.next().value); 
console.log(fibonacci.next().value); 
console.log(fibonacci.next().value); 
console.log(fibonacci.next().value);



// Carrito de compras
const preciosAlmacen = [100, 200, 300, 400, 500];

function* aplicarIva(precios) {
  for (const precio of precios) {
    yield precio * 1.16; 
  }
}

const caja = aplicarIva(preciosAlmacen);
console.log(caja.next().value);
console.log(caja.next().value); 