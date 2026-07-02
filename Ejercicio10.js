const chunksVideo = Object.freeze([
    { n: 1, sizeMb: 4,  codec: "h264" },
    { n: 2, sizeMb: 25, codec: "raw" },   
    { n: 3, sizeMb: 12, codec: "h265" },
    { n: 4, sizeMb: 40, codec: "raw" },   
    { n: 5, sizeMb: 50, codec: "webm" }  
]);


const esPesado = (chunk) => chunk.sizeMb > 20;
const esNoOptimizado = (chunk) => chunk.codec === "raw";

const requiereOptimizacion = (chunk) => esPesado(chunk) && esNoOptimizado(chunk);

const reducirCalidad = (chunk) => ({
  idChunk: chunk.n,
  sizeMbOriginal: chunk.sizeMb,
  sizeMbOptimizado: chunk.sizeMb * 0.5,
  codec: "h264_comprimido",
  estado: "Optimizado"
});


function* optimizarStreamPerezoso(chunks, predicado, transformacion) {
  for (const chunk of chunks) {
    if (predicado(chunk)) {
      yield transformacion(chunk);
    }
  }
}

const stream = optimizarStreamPerezoso(
  chunksVideo, 
  requiereOptimizacion, 
  reducirCalidad
);

console.log("Primer chunk optimizado: ",stream.next().value)
console.log("Segundo chunk optimizado: ",stream.next().value)