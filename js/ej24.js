//Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, por ejemplo miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }
//Creo la función expresada ordenarArreglo con la variable arr como  parámetro que lo inicializo como undefined. Realizo todas las validaciones.
//En el return con console.info creo el objeto que va a tener el atributo asc de ascendiente y desc de descendiente. Utilizo el métoco .map() y los ordeno con el método .sort() para ordenarlos de forma ascendente y para los que deben estar de forma descendente le agrego el método .reverse()


const ordenarArreglo = (arr = undefined) =>{
  if(arr === undefined) return console.warn("No ingresaste un arreglo de números.");

  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0) return console.error("El arreglo está vacío");

  for(let num of arr) {
    if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un número`);
  }
  return console.info({
    arr,
    asc: arr.map(el => el).sort(),
    desc: arr.map(el => el).sort().reverse(),
  })
}
//Llamo a mi función ordenarArreglo sin parámetro para verificar las validaciones
ordenarArreglo();
//Llamo a mi función ordenarArreglo con una String como parámetro para verificar las validaciones
ordenarArreglo("Hola");
//Llamo a mi función ordenarArreglo con un Array vacío como parámetro para verificar las validaciones
ordenarArreglo([]);
//Llamo a mi función ordenarArreglo con un Array de números como parámetro para verificar las validaciones
ordenarArreglo([7,2,8,9,6,7]);