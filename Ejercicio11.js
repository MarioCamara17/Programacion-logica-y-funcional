const aduanaPuerto = Object.freeze([
    { manifiesto: "C-01", destino: "Rotterdam", pesoToneladas: 12 }, 
    { manifiesto: "C-02", destino: "Tokio",     pesoToneladas: 45 },
    { manifiesto: "C-03", destino: "Rotterdam", pesoToneladas: 60 }, 
    { manifiesto: "C-04", destino: "Rotterdam", pesoToneladas: 18 }, 
    { manifiesto: "C-05", destino: "Lisboa",    pesoToneladas: 22 }  
]);

const esDestinoRotterdam = (contenedor) => contenedor.destino === "Rotterdam";
const esPesoSeguro = (contenedor) => contenedor.pesoToneladas <= 25;

const esContenedorApto = (contenedor) => esDestinoRotterdam(contenedor) && esPesoSeguro(contenedor);

function* escanearContenedoresPerezoso(contenedores, predicado) {
  for (const contenedor of contenedores) {
    if (predicado(contenedor)) {
      yield contenedor;
    }
  }
}

const escanerPuerto = escanearContenedoresPerezoso(aduanaPuerto, esContenedorApto);

console.log("Iniciando escáner del brazo mecánico...\n");

const primerContenedor = escanerPuerto.next().value;
console.log("Primer contenedor capturado:", primerContenedor.manifiesto);

const segundoContenedor = escanerPuerto.next().value;
console.log("Segundo contenedor capturado:", segundoContenedor.manifiesto);

const contenedoresAptos = [primerContenedor, segundoContenedor].filter(Boolean);

const pesoCombinadoFinal = contenedoresAptos.reduce(
  (acumulador, contenedor) => acumulador + contenedor.pesoToneladas, 
  0 
);

console.log("Contenedores a embarcar:", contenedoresAptos);
console.log(`Peso combinado final a levantar: ${pesoCombinadoFinal} toneladas`);