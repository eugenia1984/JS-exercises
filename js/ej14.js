//Programa una función para convertir grados Celsius a Fahrenheit y viceversa, por ejemplo miFuncion(0,"C") devolverá 32°F 

//Creo la función expresada convertirGRados la cual va a recibir los parámetros grados que lo inicializo en undefines y el parámetro unidad que lo inicializo en undefined.
// Con los if valido que ingresen no ingresen nada(vacío) o que ingrese un valor que no sea número, hago las mismas validaciones para el segundo parámetro (unidad) en este cao veo que no sea string.
//Como en la variable unidad solo espero tener la letra C o F, con un if valido que no ingrese más de un caracter con unidad.length o que ingrese otra letra que no sea la S o la G (con una expresion regular).
//Si unidad es C entonces paso de grados a Celsius, utlizo .Math.round() para redondear el resultado. Aplico la fórmula: para pasar de celsius a fharenheit : X celsius 9/5 + 32 = Y fharenheit
//Si unidad es F entonces, . Aplico la fórmula para pasar de fharenheit a celsius: Y fharenheit - 32 * 5/9 = X celsius 
//Y finalmente en el else hago con console.error, pero como antes tuve todas mis validaciones, nunca va a pasar lo de este else.

const convertirGrados = (grados = undefined, unidad=undefined)=>{
  if(grados === undefined) return console.warn( "No ingresaste grados a convertir");
  
  if(typeof grados !== "number") return console.error(`El valor asignado ${grados} no es un número`);

  if(unidad === undefined) return console.warn( "No ingresaste la unidad de grados a convertir");
  
  if(typeof unidad !== "string") return console.error(`El valor  de ${unidad} asignado no es una cadena de texto`);

  if(unidad.length !== 1 || !/(C|F)/.test(unidad)) return console.warn("Valor de unidad inválido");

  if(unidad === "C"){
    return console.info(`${grados}ºC = ${Math.round((grados*(9/5))+32)}ºF`);
  }else if(unidad === "F"){
    return console.info(`${grados}ºF = ${Math.round((grados-32)*(5/9))}ºC`);
  } else {
    return console.error("El tipo de grados a convertir no es válido");
  }
}

//Llamo a la función sin parámetros para ver si funciona la validación
convertirGrados();
//Llamo a la función con una string como primer parámetro para ver si funciona la validación
convertirGrados("2");
//Llamo a la función con un número como primer parámetro pero sin el segundo parámetro para ver si funciona la validación
convertirGrados(2);
//Llamo a la función con un número como primer parámetro y con un boolean como segundo parámetro para ver si funciona la validación
convertirGrados(2,true);
//Llamo a la función con un número como primer parámetro y con un una string que tenga más de un carater como segundo parámetro para ver si funciona la validación
convertirGrados(2,"Hola");
//Llamo a la función con un número como primer parámetro y con un una string que tiene un sol ocaracter, pero es distinto de C y F,  como segundo parámetro para ver si funciona la validación
convertirGrados(2,"e");
//Llamo a la función con dos parámetros correctos
convertirGrados(0,"C");
//Llama a la función con dos parámtros correctos
convertirGrados(32,"F");