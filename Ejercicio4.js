const Clientes = [
    {nombre : 'Luis', historialLimpio: true, ingresosEstables: true},
    {nombre : 'Maria', historialLimpio: true, ingresosEstables: false},
    {nombre : 'Jorge', historialLimpio: false, ingresosEstables: true}
]

//reglas

const calificacionCreditoBlack = (cliente) => cliente.historialLimpio === true && cliente.ingresosEstables === true;

const reactivacionFinanciera = (cliente) => cliente.historialLimpio === false || cliente.ingresosEstables === false;

const candidatoReestructuracion = (cliente) => cliente.historialLimpio === false && cliente.ingresosEstables === true;

const riesgoCritico = (cliente) => cliente.historialLimpio === false || cliente.ingresosEstables === false;

const certificacionInternacional = () => Clientes.every(cliente => cliente.historialLimpio === true && cliente.ingresosEstables === true);

//consultas

const clientesCalificacionBlack = Clientes.filter(calificacionCreditoBlack).map(cliente => cliente.nombre);
console.log(clientesCalificacionBlack);

const clientesReactivacionFinanciera = Clientes.filter(reactivacionFinanciera).map(cliente => cliente.nombre);
console.log(clientesReactivacionFinanciera);

const clientesCandidatoReestructuracion = Clientes.filter(candidatoReestructuracion).map(cliente => cliente.nombre);
console.log(clientesCandidatoReestructuracion);

const clientesRiesgoCritico = Clientes.filter(riesgoCritico).map(cliente => cliente.nombre);
console.log(clientesRiesgoCritico);

const bancoCertificado = certificacionInternacional();
console.log(`El banco recibe certificación internacional: ${bancoCertificado}`);

