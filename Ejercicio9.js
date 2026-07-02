const lecturasSensor = Object.freeze([
    { id: 1, tempC: 150, estado: "estable" },
    { id: 2, tempC: 850, estado: "estable" },  
    { id: 3, tempC: 920, estado: "mantenimiento" }, 
    { id: 4, tempC: 120, estado: "estable" },
    { id: 5, tempC: 1100, estado: "estable" }, 
    { id: 6, tempC: 1300, estado: "crítico" }  
]);

const esTemperaturaCritica = (lectura) => lectura.tempC > 800;
const esOperativo = (lectura) => lectura.estado !== "mantenimiento";


const esAnomaliaValida = (lectura) => esTemperaturaCritica(lectura) && esOperativo(lectura);

const celsiusAFahrenheit = (celsius) => (celsius * 9/5) + 32;

const formatearAlerta = (lectura) => ({
  idSensor: lectura.id,
  alerta: "ANOMALÍA TÉRMICA",
  tempF: celsiusAFahrenheit(lectura.tempC)
});

function* analizarAlertasPerezoso(lecturas, predicado, transformacion, limite) {
  let alertasEncontradas = 0;
  
  for (const lectura of lecturas) {
    if (predicado(lectura)) {
      yield transformacion(lectura); 
      
      alertasEncontradas++;
      if (alertasEncontradas >= limite) {
        return; 
      }
    }
  }
}

const motorDeAnalisis = analizarAlertasPerezoso(
  lecturasSensor, 
  esAnomaliaValida, 
  formatearAlerta, 
  2
);

console.log("Primera alerta: ",motorDeAnalisis.next().value)
console.log("Segunda alerta: ",motorDeAnalisis.next().value)