/**
 * 
 * Funciones
 * 
 * 
 */

// //forma correcta de crear una funcion 
// const saludar = function( nombre ){
//     return `Hola, ${ nombre }`;
// }

//funciones de flecha 
const saludar2 =  ( nombre ) => {
    return `Hola, ${ nombre }`;
}

const saludar3 =  ( nombre ) =>  `Hola, ${ nombre }`;


const getUser = () => (
{

    uuid: 'ABC123',
    username: 'ElpapiRico',
}

)

console.log(saludar2("popo de perro"));
console.log(saludar3("popo de ballena"));
console.log(getUser());
