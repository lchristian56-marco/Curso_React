/**
 * 
 * Desestructutaciòn 
 * Asignacion desestructurante
 * 
 */

const persona = {
    nombre : 'Tony',
    edad: 45,
    clave: 'IronMan',
}

// const { nombre, edad, clave } = persona;
// muy amenudo se utiliza la desestructuraciòn en el argumento de la funciòn
const userContext = ( { nombre, edad, clave } ) => {
// console.log( nombre + edad + clave );
    return {
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12,
            lng: -12.324
        }
    }
}

const { nombreClave, anios, latlng:{ lat, lng } } = userContext( persona );

console.log(nombreClave, anios, lat, lng);