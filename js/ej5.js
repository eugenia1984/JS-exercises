//Programa una función que invierta las palabras de una cadena de texto, por ejemplo miFuncion("Hola Mundo") devolverá "odnuM aloH"

//Creo la función invertirCadena primero verifico que si no ingresa nada advierta que está vacía. luego saparo a la cadena con el método split() , la invierto el orden con el método reverse y la junto a cadena con el método join
const invertirCadena=(cadena="")=>
  (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :console.info(cadena.split("").reverse().join(""));

//Llamo a la función y veo que corrobore si ingresa vacía
invertirCadena();
//Llamo a la función con el parámetro como da el ejemplo
invertirCadena("Hola Mundo");