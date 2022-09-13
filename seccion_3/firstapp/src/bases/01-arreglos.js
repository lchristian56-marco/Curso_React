/**
 * 
 * No es recomendable usar el push porque el push modifica el objeto principal  
 * metodo map 
 */

const arreglo = [1,2,3,4];

const arreglo2 = [...arreglo,5];
console.log(arreglo2);

//metodo map 
//Ejecuta la Funciòn por cada indice del arreglo 
const arreglo3 = arreglo2.map(function(numero){
    return numero * 2;
});

console.log(arreglo3);