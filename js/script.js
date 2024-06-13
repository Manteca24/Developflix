import peliculas from './peliculas.js'

// probando
console.log(peliculas);

// filtrando solo las pelis de acción
const filtroAccion = peliculas.filter((element) => element.genre_ids.includes(28));
console.log(filtroAccion);

// filtrando solo las pelis de thriller
const filtroThriller = peliculas.filter((element) => element.genre_ids.includes(53));
console.log(filtroThriller);

// filtrando solo las pelis de aventura 
const filtroAventura = peliculas.filter((element) => element.genre_ids.includes(12));
console.log(filtroAventura);

// las añado al DOM

function agregarPeliculas(peliculas, Id) {
    const contenedor = document.getElementById(Id);
  
    peliculas.forEach(pelicula => {
      const nuevoElementoDiv = document.createElement('div');

      const nuevoElementoImg = document.createElement('img');
      nuevoElementoImg.src = 'https://image.tmdb.org/t/p/w500/' + pelicula.poster_path; 
      nuevoElementoImg.alt = pelicula.title;

      const nuevoElementoTitulo = document.createElement('h3');
      nuevoElementoTitulo.textContent = pelicula.title;
  
      nuevoElementoDiv.appendChild(nuevoElementoImg);
      nuevoElementoDiv.appendChild(nuevoElementoTitulo);

      contenedor.appendChild(nuevoElementoDiv);
    });
  }
  
  
  agregarPeliculas(filtroAccion, 'genero-28');
  agregarPeliculas(filtroThriller, 'genero-53');
  agregarPeliculas(filtroAventura, 'genero-12');