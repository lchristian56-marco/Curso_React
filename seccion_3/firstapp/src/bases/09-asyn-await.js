/**
 *
 * Async - Await
 *
 * Sinonimo de Async
 *
 * tomar una funcion y con el async haga que la funcion retorne una promesa
 * para que la funcion se vuelva sincrona
 *
 * await funciona que donde se tenga el await , se espere hasta que se resuelva la promesa
 *  antes de ejecutar la siguiente linea de codigo , esta
 * es de tipo response
 *
 * para el manejo de los errores para el async y await toca manejarlo con un try catch
 */

const getImagen = async () => {
  try {
    const apikey = "u42PgQiek67OG0jbrv4e8YBIdXh08hgp";
    const peticion = await fetch(
      `https://api.giphy.com/v1/gifs/random?api_key=${apikey}`
    );
    console.log(peticion);
    const { data } = await peticion.json();
    const { url } = data.images.original;
    const img = document.createElement("img");
    img.src = url;
    document.body.appendChild(img);
  } catch (error) {}
};

getImagen();
