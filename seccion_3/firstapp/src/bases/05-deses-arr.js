/**
 * 
 * Desestructuraciòn de Arreglos 
 * 
 */

const personajes = ['Goku', 'Vegeta', 'Trunks'];

const [ , personaje2, personaje3 ] = personajes;

// console.log(personaje2, personaje3);

//Tarea

const mierda = ( valor ) =>{
    return [ valor, ()=>{ console.log("hola mundo") } ];
}

const [nombre, setNombre] = mierda( 'Goku' );



console.log(nombre);
setNombre();