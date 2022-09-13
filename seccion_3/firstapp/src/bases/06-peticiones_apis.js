/**
 * 
 * Fectch Api
 * 
 * las promesas pueden encadenarse
 */

const apikey = 'u42PgQiek67OG0jbrv4e8YBIdXh08hgp';


const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apikey }`);

peticion
    .then( resp => resp.json() ) // como la promesa del resp retorna una promesa de algun tipo entonces se usa .then de nuevo
    .then( ({ data }) => {            // el resultado de la promesa anterior pasa al siguiente then y asi sucesivamente
        // console.log(data.images.original.url);
        // usando desestructuracion para tomar la url de la imagen 
        const { url } = data.images.original;

        //creamos en memoria la etiqueta xml de una imagen 
        const img = document.createElement('img');
        // le asignamos dinamicamente la fuente de la imagen que es la url 
        img.src = url ;
        //
        document.body.appendChild( img );


    })
    .catch( console.warn );    // Depende el caso se pueden tener multiples catch para cada .then o uno que maneje todas las excepciones
