// Ejercicio 2. Arreglo inicial de servicios
const servicios = [
  { id: 1, nombre: 'Autenticación', zona: 'us-east', consultasPorMinuto: 12000, activo: true, tecnologias: ['Node', 'Redis'] },
  { id: 2, nombre: 'Procesamiento Pagos', zona: 'us-west', consultasPorMinuto: 4500, activo: true, tecnologias: ['Java', 'Spring'] },
  { id: 3, nombre: 'Recomendaciones AI', zona: 'us-east', consultasPorMinuto: 25000, activo: false, tecnologias: ['Python', 'TensorFlow'] },
  { id: 4, nombre: 'Notificaciones', zona: 'eu-central', consultasPorMinuto: 8500, activo: true, tecnologias: ['Node', 'RabbitMQ'] },
  { id: 5, nombre: 'Reportes Históricos', zona: 'us-west', consultasPorMinuto: 500, activo: false, tecnologias: ['Python', 'MongoDB'] }
];

//1. Reglas o predicados atómicos
const estaActivo = (x) => x.activo === true;
const esZonaUS = (x) => x.zona === 'us-east' || x.zona === 'us-west';
const esAltaCarga = (x) => x.consultasPorMinuto >= 10000;
const usaNode = (x) => x.tecnologias.includes('Node');


//2. Composición de reglas
// Regla A: El servicio NO está activo Y es de Alta Carga
const requiereMantenimientoUrgente = (x) => !estaActivo(x) && esAltaCarga(x);

// Regla B: El servicio está Activo Y (corre en Zona US O es de Alta Carga)
const esServicioCriticoUS = (x) => estaActivo(x) && (esZonaUS(x) || esAltaCarga(x));

// Regla C: El servicio corre en Zona US Y usa Node, pero NO debe ser de Alta Carga
const migrarACloudflare = (x) => esZonaUS(x) && usaNode(x) && !esAltaCarga(x);


//3. Transformación y métodos de orden superior

// Filtrar y Mapear: Nombres de servicios críticos en US
const nombresServiciosCriticos = servicios.filter(esServicioCriticoUS).map(servicio => servicio.nombre);

// Filtrar y Mapear: Nombres de servicios que requieren mantenimiento urgente
const nombresMantenimientoUrgente = servicios.filter(requiereMantenimientoUrgente).map(servicio => servicio.nombre);

// Reducción de Datos: Total acumulado de consultas por minuto SOLO de servicios activos
const totalConsultasActivos = servicios.filter(estaActivo).reduce((acumulador, servicio) => acumulador + servicio.consultasPorMinuto, 0);


console.log("Servicios Críticos US:", nombresServiciosCriticos);
console.log("Requieren Mantenimiento Urgente:", nombresMantenimientoUrgente);
console.log("Total consultas por minuto (activos):", totalConsultasActivos);