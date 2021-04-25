//IMDB ID, título y directos son todos de tipo String, me conviene juntor la verificación en un método.
//Comienzo construyendo la clase película, con su constructor que va a tener como key: id, titulo, director, estreno, pais, generos, calificacion.
/*Comienzo con las validaciones: 
*Que el IMDB tenga 9 caracteres( los dos primeras sean letras y los siete restantes sean números). Como es un patrón a buscar lo hago con una expresión regular creando un método que se llama calidarIMDB y recibe un id; me aseguro qeu ningún campo entre vacío. Y antes creo la función valdiarCadena que recibe dos parámetros (propiedad y valor) y hago las validaciones.
*Ceeo el método validarLongitudCadena, recibe la propiedad(título), el valor y la longitud.Y va a validar que no me exdeda de la llongitud de caracteres permitdos. Y creo validarTitulo para validar que el Título o exceda los 100 carcteres.
*Hago similar para validar que el director no rebase los 50 caracteres con validarDirector()
*Valido que el año de estreno tenga 4 dígitos con validarNumero() y validarEstreno()
*Valido que el pais o paises sea introducido en forma de arreglo (por si hay más de un país), valido que sea array, que no sea array vacío, y qeu el array tenga cadena de texto. Esta verificación me sirve para país y para género, por lo que creo el método validadArreglo.
*Valido que los géneros sean introducidos en forma de arreglo y estén dentro de los géneros aceptados. Creo un método estático que me devuelve los géneros aceptados. Creo el atributo estático del tipo get que se llama listaGEneros que me retorna la lista de los géneros permitidos
*Valido que la calificación sea entre 0 y 10 y con un decimal con validarCalificacion() y uso el método toFixed() para que solo tenga un decimal.
*Creo el método que imprima toda la ficha técnica.
*Formo un arreglo con tres películas con la variable misPelis.
*/

class Pelicula {
  constructor({id, titulo, director, estreno, pais, generos, calificacion}) {
    this.id = id;
    this.titulo = titulo;
    this.director = director;
    this.estreno = estreno;
    this.pais = pais;
    this.generos = generos;
    this.calificacion = calificacion;

    this.validarIMDB(id);
    this.validarTitulo(titulo);
    this.validarDirector(director);
    this.validarEstreno(estreno);
    this.validarPais(pais);
    this.validarGeneros(generos);
    this.validarCalificacion(calificacion);
    
  }

  static get listaGeneros() {
    return ["Action", "Adult", "Adventure", "Animation", "Biography", "Comedy", "Crime", "Documentary" ,"Drama", "Family", "Fantasy", "Film Noir", "Game-Show", "History", "Horror", "Musical", "Music", "Mystery", "News", "Reality-TV", "Romance", "Sci-Fi", "Short", "Sport", "Talk-Show", "Thriller", "War", "Western"];
  }
  static generosAceptados() {
    return console.info(`Los géneros aceptados son: ${Pelicula.listaGeneros.join(", ")}`);
  }

  validarCadena(propiedad, valor) {
    if(!valor) return console.warn( `${propiedad} "${valor}" está vacío`);

    if(typeof valor !== "string") return console.error(` ${propiedad} "${valor}" ingresada no es una cadena de texto`);

    return true;
  }

  validarLongitudCadena(propiedad,valor,longitud){
    if(valor.length>longitud) return console.error(` ${propiedad} "${valor} excede el número de caracteres permitidos (${longitud})".`);

    return true;
  }

  validarNumero(propiedad,valor){
    if(!valor) return console.warn(` ${propiedad} "${valor}" está vacío`);

    if(typeof valor !== "number") return console.error(` ${propiedad} "${valor}" ingresado no es un número.`);

    return true;
  }

  validarArreglo(propiedad,valor) {
    if(!valor) return console.warn(`${propiedad} "${valor}" está vacío`);

    if(!(valor instanceof Array)) return console.error(`${propiedad} "${valor}" ingresado, no es un arreglo`);

    if(valor.length === 0 ) return console.error(`${propiedad} "${valor}" no tiene datos`);

    for(let cadena of valor){
      if(typeof cadena !== "string") return console.error(`El valor ${cadena}, ingresado no es una cadena de texto`);
    }
    return true;
  }

  validarIMDB(id) {
    if(this.validarCadena("IMDB id",id)) 
      if(!(/^([a-z]{2}[0-9]{7})$/.test(id))) 
        return console.error(`IMDB id ${id} no es válido, debe tener 9 caracteres, los dos primeros letras minúsculas y los siete restantes números`);
  }

  validarTitulo(titulo) {
    if(this.validarCadena("Titulo",titulo)) 
      this.validarLongitudCadena("Titulo",titulo,100);
  }
  
  validarDirector(director) {
    if(this.validarCadena("Director",director)) 
      this.validarLongitudCadena("Director",director,50);
  }

  validarEstreno(estreno) {
    if(this.validarNumero("Año de estreno",estreno)) 
      if(!(/^([0-9]{4})$/.test(estreno))) 
        return console.error(`Año de estreno ${estreno} no es válido, debe ser un número de 4 dígitos.`);
  }
  validarPais(pais){
    this.validarArreglo("Pais",pais)
  }

  validarGeneros(generos){
    if(this.validarArreglo("Generos",generos)){
      for(let genero of generos) {
        console.log(genero,Pelicula.listaGeneros.includes(genero));
        if(!Pelicula.listaGeneros.includes(genero)) {
          console.error(`Generos(s) incorrectos "${generos.join(", ")}"`);
          Pelicula.generosAceptados();
        }
      }
    }
  }

  validarCalificacion(calificacion) {
    if(this.validarNumero("Calificación",calificacion)) 
      return (calificacion<0 || calificacion >10) 
        ?console.error("La calificación tiene que ser en un rango entre 0 y 10")
        :this.calificacion = calificacion.toFixed(1);
  }

  fichaTecnica(){
    console.info(`Ficha Técnica: \nTítulo: "${this.titulo}"\nDirector: "${this.directos}"\nAño: "${this.estreno}" \nPaís: "${this.pais}.join(", ")}"\nIMDB id: "${this.id}"`)
  }
}


const misPelis = [
  {
    id: "tt1675434",
    titulo: "Intouchable",
    director: "olivier Nakache",
    estreno: 2012,
    pais: ["Francia"],
    generos: ["Biography", "Comedy", "Drama"],
    calificacion: 8.5
  },  
  {
    id: "tt2380307",
    titulo: "Coco",
    director: "Lee Unkrich",
    estreno: 2017,
    pais: ["Estados Unidos"],
    generos: ["Animation", "Adventure", "Family"],
    calificacion: 8.4
  },
  {
    id: "tt3011894",
    titulo: "Relatos salvajes",
    director: "Damián Szifron",
    estreno: 2041,
    pais: ["Argentina"],
    generos: ["Comedy", "Drama", "Thriller"],
    calificacion: 8.1
  },
];

misPelis.forEach(el=>new Pelicula(el).fichaTecnica());