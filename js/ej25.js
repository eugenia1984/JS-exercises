//Programa una función que dado un arreglo de elementos, elimine los duplicados, por ejemplo miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]

//Creo la función expresada quitarDuplicados que recibe un arr como parámetro y la inicializo como undefined. Valido que no llegue un arreglo vacío y que sea un arreglo.
//En el resturn con un console.info creo un objeto con los atributos: original (que es la variable arr), sinDuplicados (con el método filter() evaluo el elemento, la posición y el mismo arreglo -self-, utilizando indexOf() busco el valor con la posición para no tener elementos repetidos).
/*Otra forma de hacer la parte de return utilizando set(), que permite generar un objeto en el cual no tiene elementos duplicados, sería así:
return console.info({
  original: arr,
  sinDuplicados:[...new Set(arr)]
})*/


const quitarDuplicados = (arr = undefined) =>{
  if(arr === undefined) return console.warn("No ingresaste un arreglo, no puede estar vacío.");

  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0) return console.error("El arreglo está vacío");

  if(arr.length === 1) return console.error("El arreglo debe tener al menos dos elementos");

  return console.info({
    original: arr,
    sinDuplicados: arr.filter((value,index,self) => self.indexOf(value)===index),
  })
}
//Llamo a la función vacía para ver mis verificaciones
quitarDuplicados();
//Llamo a la función con un objeto como parámetro  para ver mis verificaciones
quitarDuplicados({});
//Llamo a la función con un Array vacío como parámetro  para ver mis verificaciones
quitarDuplicados([]);
//Llamo a la función con un Array con un solo elemento como parámetro  para ver mis verificaciones
quitarDuplicados([10]);
//Llamo a la función
quitarDuplicados([10,2,10,"x","10",true,true]);

