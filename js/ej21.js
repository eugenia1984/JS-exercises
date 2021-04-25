//Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, por ejemplo mi_funcion([1, 4, 5]) devolverá [1, 16, 25]
//Como con el método .typeof() tengo que un objeto es un array, pero también lo es una fecha ( Date() ) y una expresión regular ( RegExp() ), entonces voy a usar instanceof para corroborar que tenga un array.
//Creo la función expresada devolverCuadrado que recibe de parámetro a la variable arr y la inicializo como undefined. Empiezo mis validaciones para asegurarme: que no reciba un parámetro vacío(si la variable arr es undefined mando mensaje de warn), que ese parámetro no sea un array (niego que la variable arr sea instanceof Array y mando mensaje de error), que ese parámetro no sea un array vacío(verifico si el largo del array es 0 es vacío, mando mensaje de error), con for of recorro la variable arr para ver que ingrese siempre números en el array (uso una variable num oara recorrer a arr y pongo de condición si la varaible num no es de tipo número entonces ya corto el for y no es array numérico, devuelvo mensaje de eror por consola).
//Creo la variable newArr para crear el nuevo arreglo que tendrá el resultado de los números elevados al cuadrado, uso el método .map().
//Mi último return de la función es un console.info con la variable arr y newArr.

const devolverCuadrado = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arreglo de números.");
  
  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0) return console.error("El arreglo está vacío");

  for(let num of arr) {
    if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un número`);
  }

  const newArr = arr.map(el=>el*el);

  return console.info(`Arreglo original ${arr}.\n Arreglo elevado al cuadrado: ${newArr}`);
}

//llamo a mi función devolvercuadrados vacía (sin parámetro) para corroborar las verificaciones.
devolverCuadrado();
//llamo a mi función devolvercuadrados con un parámetro boolean para corroborar las verificaciones.
devolverCuadrado(true);
//llamo a mi función devolvercuadrados con un parámetro que es un objeto para corroborar las verificaciones.
devolverCuadrado({});
//llamo a mi función devolvercuadrados con un parámetro que es un arr vacío para corroborar las verificaciones.
devolverCuadrado([]);
//llamo a mi función devolvercuadrados con un parámetro que es un arr que tenga Number pero otro tipo de dato para corroborar las verificaciones.
devolverCuadrado([1,"3",5]);
//llamo a mi función devolvercuadrados con un parámetro que es un arr con tiene Number pero otro tipo de dato vacíopara corroborar las verificaciones.
devolverCuadrado([1,5, {}]);
//llamo a mi función devolvercuadrados con un parámetro que es un arr de Number
devolverCuadrado([1,4,8]);