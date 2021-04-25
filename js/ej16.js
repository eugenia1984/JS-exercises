//Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, por ejemplo miFuncion(1000, 20) devolverá 800

//Creo la función expresada aplicarDescuento
//Mi primer parámetro es una cantidad la nombro con la variable monto y la inicializo como undefined y mi segundo parámetro es el descuento lo nombro con la variable descuento y lo inicializo en 0, asi no se aplica descuento y me da el mismo monto.
//Realizo las validaciones: que monto sea un número , no sea negativo ni sea 0. También valido para la variable descuento ingrese un númro y que no sea negativo (no puedo aplicar descuentos negativos).
//En el último return calculo el descuento.

const aplicarDescuento = (monto = undefined , descuento = 0) => {
  if(monto === undefined) return console.warn("No ingresaste el monto");
  
  if(typeof monto !== "number") return console.error(`El valor ${monto} ingresado no es un número`);

  if(monto === 0 ) return console.error("El monto no puede ser 0");

  if(Math.sign(monto) === -1) return console.error("El monto ingresado no puede ser negativo");

  if(typeof descuento !== "number") return console.error(`El valor ${descuento} ingresado no es un número`);

  if(Math.sign(descuento) === -1) return console.error("El descuento ingresado no puede ser negativo");

  return console.info(`$ ${monto} - $ ${descuento} % = ${monto - ((monto*descuento)/100)}`)
}

//Llamo a la función sin parámeros para aplicar las validaciones
aplicarDescuento();
//Llamo a la función con el primer parámetro como String para aplicar las validaciones
aplicarDescuento("200");
//Llamo a la función con el primer parámetro como Number pero 0 para aplicar las validaciones
aplicarDescuento(0);
//Llamo a la función con el primer parámetro como Number pero en número negativo para aplicar las validaciones
aplicarDescuento(-1000);
//Llamo a la función con el primer parámetro como Number, pero el segundo parámetro como String para aplicar las validaciones
aplicarDescuento(1000,"200");
//Llamo a la función con el primer parámetro como Number, pero el segundo parámetro como Number en número negativo para aplicar las validaciones
aplicarDescuento(1000,-200);
//Llamo a la función con el primer parámetro como Number, pero el segundo parámetro como Number 0 para aplicar las validaciones
aplicarDescuento(1000,0);
//Llamo a la función con dos parámetros
aplicarDescuento(1000,25);

