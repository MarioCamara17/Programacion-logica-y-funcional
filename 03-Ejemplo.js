
const nombres = {nombre: "dany", rol: "admin"};

nombres.rol = "user";

console.log(nombres);

//Freeze

const nombres2 = Object.freeze({nombre: "dany", rol: "admin"});
nombres2.rol = "user"; // Esto no tendrá efecto
console.log(nombres2);

const nombresModificados = {...nombres2, rol: "user"};
console.log(nombresModificados);

//reduce

const calificaciones = Object.freeze([80,90,100,90]);
const sumaTotal=calificaciones.reduce((acumulador, valor)=> acumulador + valor);
console.log("Suma total de calificaciones:", sumaTotal);
const promedio = sumaTotal / calificaciones.length;
console.log("Promedio de calificaciones:", promedio);