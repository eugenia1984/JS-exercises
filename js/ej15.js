//Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 


//Creo la función expresada convertirBinarioDecimal que recibe dos parámetros: numero y base, ambos los inicializo como undefined.
//Primero valido que el parámetro sea un número y no llegue vacío. Luego valido la base ue sea un número y que no llegue vacía.
//Veo si la base es 2 entonces debo hacer la conversión usando el método parseInt().

const convertirBinarioDecimal = (numero = undefined, base = undefined)=>{
  if(numero === undefined) return console.warn("No ingresaste el número a convertir");
  
  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un número`);

  if(base === undefined) return console.warn("No ingresaste la base a convertir");

  if(typeof base !== "number") return console.error(`El valor ${base} ingresada no es un número`);

  if(base===2){
    return console.info(`${numero} base = ${parseInt(numero,base)}  base 10`)
  } else if (base ===10) {
    return console.info(`${numero} base = ${(numero.toString(base))} base 2`);
  }else{
    return console.error("El tipo de base a convertir no es válido");
  }
}

//Llamo a la función vacía para probar mis validaciones
convertirBinarioDecimal();
//Llamo a la función con el primer pa´rametro como String para probar mis validaciones
convertirBinarioDecimal("2");
//Llamo a la función con el primer parámetro con Number pero el segundo parámetro vacío para probar mis validaciones
convertirBinarioDecimal(100,);
//Llamo a la función con el primer parámetro con Number y el segundo parámetro con String para probar mis validaciones
convertirBinarioDecimal(100,"2");
//Llamo a la función con el número 100 como primer parámetro y el número 2 como segundo parámetro
convertirBinarioDecimal(100,2);
//Llamo a la función y convierto el número binario 4 a base 10
convertirBinarioDecimal(4, 10);