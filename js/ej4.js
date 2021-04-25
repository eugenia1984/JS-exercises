//Programa una función que repita un texto X veces, por ejemplo miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo

//Creo la función repetirTexto que recibe los parámetros texto (lo declaro como cadena vacía) y veces (lo declaro como undefined)
//Ahora voy a poner todos los if que vayan validando los posibles errores, para que sea más expresivo va sin llaves y todo en la misma línea
//Primer validación: que la cadena no venga vacía, lee el if y finaliza en el return con un console.warn.
//Segunda validación: si no ingresa el número de veces a repetir el texto
//Tercera validación: que el número de veces a repetir el texto no sea 0
//Cuarta validación: que el número de veces a repetir el texto no sea un número negativo
const repetirTexto = (texto = "",veces=undefined)=>{
  if(!texto) return console.warn("No ingresaste un texto");

  if(veces === undefined) return console.warn("No ingresaste el número de veces a repetir el texto");
  
  if(veces = 0) return console.error("El número de veces no puede ser 0");

  if(matchMedia.toString(veces)===-1) return console.error("El número de veces no puede ser negativo");
  
  for(let i=1;i<=veces;i++)console.info(`${texto},${i}`);
}

//llamo a la función cuatro veces para ver que las comprobaciones estén bien
repetirTexto("Hola Mundo",3);
repetirTexto("Hola Mundo",0);
repetirTexto("Hola Mundo",-20);
repetirTexto("",20);