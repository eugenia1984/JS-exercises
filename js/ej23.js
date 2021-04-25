//Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, por ejemplo miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}
//Creo la función expresada separarParesImpares que recibe como parámetro la variable arr que la inicializo como undefined. Hago las validaciones para que ingrese un array y de números, si son otros casos tengo los console.
//Con el return en console.info creo mi nuevo objeto utilizando el método .filter()


const separarParesImpares = (arr = undefined) =>{
  if(arr === undefined) return console.warn("No ingresaste un arreglo de números.");

  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0) return console.error("El arreglo está vacío");

  for(let num of arr) {
    if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un número`);
  }
  return console.info({
    pares: arr.filter(num=>num%2===0),
    impares: arr.filter(num=>num%2===1)
  })
}

//Llamo a la función sin parámetro para probar la validación
separarParesImpares();
//Llamo a la función con String como parámetro para probar la validación
separarParesImpares("Hola");
//Llamo a la función con array vacío como parámetro para probar la validación
separarParesImpares([]);
//Llamo a la función con array de númros como parámetro
separarParesImpares([1,2,3,4,5,6,7,8,9]);