//Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), por ejemplo mifuncion("Salas") devolverá true 

//Creo la función palíndromo que tome como parámetro la variable palabra (la palabra o frase dada).
//Primero verifico que si no se ingresa nada, si viene vacía, aviso con console.warn
//Luego paso la palabra o frase guardada en la variable palabra a minúscula con .toLowerCase() ya que JavaScript es case sensitive
//Creo la variable alReves donde voy a invertir la palabra: paso la palabra a un arreglo con el método .split(), uso el método .reverse() y vuelvo a unir con el método .join() sin separador. Si la variable palabra y la variable alReves son iguales aviso por concole.info que sí es palíndromo; si no son iguales por console.info aviso que no es palíndromo.

const palindromo =(palabra="")=>{
  if(!palabra) return console.warn("No ingresaste una palabra o frase");

  palabra = palabra.toLowerCase();
  let alReves = palabra.split("").reverse().join("");

  return (palabra ===alReves)
    ?console.info(`Si es palíndromo. Palabra original ${palabra}. Palabra al revés ${alReves}`)
    :console.info(`No es palíndromo. Palabra original ${palabra}. Palabra al revés ${alReves}`)
}
//Corroboro si funciona a advertencia cuando no envío palabra o frase
palindromo();
//Corroboro ingresando una palabra que no es palíndromo
palindromo("hola mundo");
//Ingreso ocmo el ejemplo Salas
palindromo("Salas");