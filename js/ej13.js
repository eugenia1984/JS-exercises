//Programa una función que determine si un número es par o impar, por ejemplo miFuncion(29) devolverá Impar

//Se que al dividir un número en 2 si el residuo es 0 es par y si es 1 es impar, para esto aplico el módulo. Y valido que entre vacío o cualquier tipo de dato qeu no sea número. 
//Creo una función expresada llamada numeroParImpar. Valido que se ingrese algo y que sea un número con if. 

const numeroParImepar = (numero = undefined)=>{
  if(!numero===undefined) return console.warn("No ingresaste un número");

  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un número`);

  return ((numero % 2) === 0)
    ?console.info(`El número ${numero} es par`)
    :console.info(`El número ${numero} es impar`)
}

//llamo a la función sin parámetro para ver si funciona bien al validación
numeroParImepar();
//llamo a la función con string como parámetro para ver si funciona bien al validación
numeroParImepar("100");
//llamo a la función con un número par negativo como parámetro
numeroParImepar(-398);
//llamo a la función con un número impar como parámetro
numeroParImepar(25);