const transacciones = [
    { id: 1, tipo: 'deposito', monto: 10000 },
    { id: 2, tipo: 'retiro', monto: 6000 },
    { id: 3, tipo: 'retiro', monto: 1500 },
    { id: 4, tipo: 'retiro', monto: 8000 }
]

//Reglas

const filtroRetiros = transacciones.filter(transaccion => transaccion.tipo === 'retiro');

const filtroRetirosMayores5000 = filtroRetiros.filter(transaccion => transaccion.monto > 5000);

const multaPenalizacion = filtroRetirosMayores5000.map(transaccion => ({ ...transaccion, multa: transaccion.monto * 0.05 }));

const montoaRecaudar = multaPenalizacion.reduce((total, transaccion) => total + transaccion.multa,0);

//Consultas

console.log("Transacciones de retiro mayores a 5000 :", filtroRetirosMayores5000);

console.log("Multa de penalización :", multaPenalizacion);

console.log("Monto a recaudar :", montoaRecaudar);
