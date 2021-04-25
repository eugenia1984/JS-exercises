//Programa una función que valide que un texto sea un nombre válido, por ejemplo miFuncion("María Eugenia") devolverá verdadero.
//Creo la función expresada validarNombre que recibe el parámetro nombre el que inicializo como String vacía. Y valido que nombre no ingree vacío y que sea una String.
//Uso una expresión regular que valide letras y espacios en blancos, la guardo en la variable expReg.
//Con el return y el operadore ternario por consola muestro el texto del nombre ingresado y si es válido o no.

const validarnombre = (nombre="") => {
  if(!nombre) return console.warn("No ingresaste un nombre");

  if(typeof nombre !== "string") return console.error(`El valor ${nombre} ingresado no es una cadena de texto`);

  let expReg = /^[A-Za-zÑnÁáÉéÍíÓóÚúÃãÕõÂâÊêÎîÔôÛûÜü$\s]+$/g.test(nombre)

  return(expReg)
    ?console.info(`${nombre}, es un nombre válido`)
    :console.warn(`${nombre} no es válido`);
}
//Llamo a mi función sin parámetro para corroborar la validación
validarnombre();
//Llamo a mi función con Number parámetro para corroborar la validación
validarnombre(5);
//Llamo a mi función con una String pero que contiene un caracter no válido como una , como parámetro para corroborar la validación
validarnombre("María, Eugenia");
//Llamo a mi función con una String parámetro para corroborar la validación
validarnombre("María Eugenia");
   