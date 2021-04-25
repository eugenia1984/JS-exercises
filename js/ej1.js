//Programa una función que cuente el número de caracteres de una cadena de texto.
//Por ejemplo: miFunción("Hola Mundo") devolverá 10.


// Creo la función expresada contarCadena (la guardo en varaible) que primero va a fijarse si la cadena está vacía y lo avisa, sino informa que cadena se ingreso y cuántos caracteres tiene. La escribo como arrow function
const contarCaracteres = (cadena ="")=>(!cadena)?console.log("No ingresaste ninguna cadena"):console.log(`La cadena "${cadena}" tiene ${cadena.length} caracteres.`);

// Con console.log llamo a la función contarCaracteres y la apaso por parámetro la string "Hola mundo" que se ve por consola
console.log(contarCaracteres("Hola mundo"));

