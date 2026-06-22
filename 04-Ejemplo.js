const datos = {
    nombre: "Dany", 
    edad: 40,
    ciudad: "Balancan",
    intereses:["React", "JS"]
}

//Ocultar propiedades
Object.defineProperty(datos, "edad", {enumerable: false})
//console.log(Object.keys(datos))
//console.log(Object.getOwnPropertyNames(datos))

'use strict'

function deepFreeze(obj) {
    //Validar que sea un objeto, que no sea null y que no esté congelado
    if (obj === null || typeof obj !== 'object' || Object.isFrozen(obj)) {
        return obj
    }
    //Pbtener todo el objeto
    const propiedadesObjeto = Object.getOwnPropertyNames(obj);
    //Recorrer cada propiedad del objeto
    for(let nombres of propiedadesObjeto){
        const propiedadHijo = obj[nombres]

        //Aplicamos la funcion recursiva 
        if(propiedadHijo && typeof propiedadHijo === 'object'){
            deepFreeze(propiedadHijo)
        }
    }
    //Congelamos todo el objeto con sus hijos
    return Object.freeze(obj)
}

//Pasar el objeto a la funcion recursiva
const datosInmutable = deepFreeze(datos)

//Intentar modificar el objeto
const newNombre = datosInmutable.nombre = "Daniela"
const newIntereses = datosInmutable.intereses.push("Java")
const newEdad = datosInmutable.edad = 30

console.log(newNombre)
console.log(newIntereses)
console.log(newEdad)

