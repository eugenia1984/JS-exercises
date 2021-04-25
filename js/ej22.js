//Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, por ejemplo miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]

//Creo la función expresada arrMinMax que recibe como parámetro la varaible arr y lo inicializo como undefined.
//Hago las verificaciones: que no ingrese nada (que esté vacío), que ingrese un array, que no sea un array vacío.
//Con el return y console.info mando mensaje, utilizo los métodos .Math.min() y .Math.max() pasándole arr con el  spread operator (...arr)

const arrayMinMax = (arr = undefined) =>{
  if(arr === undefined) return console.warn("No ingresaste un arreglo de números.");

  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0) return console.error("El arreglo está vacío");

  for(let num of arr) {
    if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un número`);
  }
  return console.info(`Arreglo original${arr}.\n Valor mayor: ${Math.max(...arr)}.\n Valor menor: ${Math.min(...arr)}`);
}

//Verifico la función llamandola sin parámetro para ver las verificaciones
arrayMinMax();
//Verifico la función llamandola con un valor boolean como parámetro para ver las verificaciones
arrayMinMax(true);
//Verifico la función llamandola sin parámetro para ver las verificaciones
arrayMinMax();
//Verifico la función llamandola con un array vacío como parámetro para ver las verificaciones
arrayMinMax([]);
//Verifico la función llamandola con un array con Numbers pero que el último element sea un boolean como parámetro para ver las verificaciones
arrayMinMax([2,8,9,4,true]);
//Llamo a la función con array de Number
arrayMinMax([1,4,5,-20,85,-10])