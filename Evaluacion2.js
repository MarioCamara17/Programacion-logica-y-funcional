//Caso de estudio 1
//Deepfreeze general
const deepFreeze = (obj) => {
    Object.freeze(obj);
    Object.values(obj).forEach(val => {
        if (typeof val === "object" && val !== null) {
            deepFreeze(val);
        }
    });
    return obj;
};

const peticionesHttp = deepFreeze([
    { id: "REQ-01", metodo: "GET",  ipOrigen: "192.168.1.50", latenciaMs: 45,   tamanioPayloadKb: 2,    payload: "SELECT * FROM users" },
    { id: "REQ-02", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 2500, tamanioPayloadKb: 1500, payload: "DROP TABLE users;--" }, 
    { id: "REQ-03", metodo: "GET",  ipOrigen: "192.168.1.55", latenciaMs: 12,   tamanioPayloadKb: 1,    payload: "ping" },
    { id: "REQ-04", metodo: "POST", ipOrigen: "185.220.10.1", latenciaMs: 1800, tamanioPayloadKb: 950,  payload: "normal_profile_update" },
    { id: "REQ-05", metodo: "POST", ipOrigen: "192.168.1.70", latenciaMs: 3100, tamanioPayloadKb: 1200, payload: "upload_heavy_image" },   
    { id: "REQ-06", metodo: "GET",  ipOrigen: "172.16.25.40", latenciaMs: 50,   tamanioPayloadKb: 500,  payload: "exec MaliciousScript" } 
]);

//Predicados atomicos
const esMetodoEscritura=(x)=>x.metodo==="POST"
const esLatenciaAlta=(x)=>x.latenciaMs>=2000
const esPayloadSospechoso=(x)=>x.payload.includes("DROP"||"SELECT"||"MaliciousScript")

//Reglas logicas
const detectarAmenazaPotencial=(x)=>esMetodoEscritura(x)&&(esLatenciaAlta(x)||esPayloadSospechoso(x))

//Funcion Generador
function* analizadorSeguridadLazy(flujo,regla){
    for(let peticion of flujo){
        if(regla(peticion)){
            yield peticion
        }
    }
}

const consultaPeticion = analizadorSeguridadLazy(peticionesHttp,detectarAmenazaPotencial)

//Consultas
console.log("Amenaza 1: ",consultaPeticion.next().value)
console.log("Amenaza 2: ",consultaPeticion.next().value)

// Reduccion de datos funcional
const amenazasCapturadas = Array.from(analizadorSeguridadLazy(peticionesHttp, detectarAmenazaPotencial)).slice(0, 2)

const promedioPayloadKb = amenazasCapturadas.reduce((suma, amenaza) => suma + amenaza.tamanioPayloadKb, 0) / amenazasCapturadas.length

console.log("Promedio de tamaño de payload (KB) de amenazas:", promedioPayloadKb.toFixed(2),"KB")


//Caso de estudio 2

const ordenesEnvio = deepFreeze([
    { id: "ORD-101", tipo: "estandar", destino: "Tabasco", pesoKg: 4,   distanciaKm: 8,   asegurado:
false },
    { id: "ORD-102", tipo: "express",  destino: "Veracruz", pesoKg: 22,  distanciaKm: 120, asegurado:
true },  
    { id: "ORD-103", tipo: "estandar", destino: "Tabasco", pesoKg: 1.5, distanciaKm: 15,  asegurado:
false },
    { id: "ORD-104", tipo: "express",  destino: "Tabasco", pesoKg: 5,   distanciaKm: 3,   asegurado: false
},
    { id: "ORD-105", tipo: "express",  destino: "Yucatán",  pesoKg: 18,  distanciaKm: 250, asegurado:
false }, 
    { id: "ORD-106", tipo: "express",  destino: "Chiapas",  pesoKg: 35,  distanciaKm: 190, asegurado:
true }   
]);

//Predicados atomicos
const esEnvioExpress=(x)=>x.tipo==="express"
const esPaquetePesado=(x)=>x.pesoKg >= 15
const esRutaForanea=(x)=>x.destino!="Tabasco"

//Reglas
const esDespachoPrioritario=(x)=>esEnvioExpress(x)&&(esPaquetePesado(x)||esRutaForanea(x))

//Funcion Generadora
function* despachadorOrdenesLazy(flujo,regla){
    for(let envio of flujo){
        if(regla(envio)){
            yield envio
        }
    }
}

const paquetesaEnviar = despachadorOrdenesLazy(ordenesEnvio,esDespachoPrioritario)

//Consultas
console.log("Paquete Urgente a enviar 1: ",paquetesaEnviar.next().value)
console.log("Paquete Urgente a enviar 2: ",paquetesaEnviar.next().value)

//Reduccion de datos funcional
const paquetesEnviados = Array.from(despachadorOrdenesLazy(ordenesEnvio,esDespachoPrioritario)).slice(0, 2)
const promedioDistanciaKm = paquetesEnviados.reduce((suma,distancia)=>suma + distancia.distanciaKm, 0) / paquetesEnviados.length

console.log ("Promedio de distancia de los paquetes enviados: ",promedioDistanciaKm.toFixed(2),"Km")