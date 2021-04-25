//Programa una función que dado un arreglo de números obtenga el promedio, por ejemplo promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5

//Creo una función promedio que recibe como parámetro la varaible arr que la inicializo como undefined. HAgo todas las validaciones. Y finalmente en return con un console.info aplico el método .reduce() que va a recibir como parámetros un acumulador (total), lo que está recorriendo (num), la posición en ese momento (index) y el arreglo como tal (arr)

const promedio = (arr = undefined) => {
  if(arr === undefined) return console.warn("No ingresaste un arraglo de números");

  if(!(arr instanceof Array)) return console.error("El valor que ingresaste no es un arreglo");

  if(arr.length === 0) return console.error("El arreglo está vacío");

  for(let num of arr) {
    if(typeof num !== "number") return console.error(`El valor ${num} ingresado no es un número`);
  }
  return console.info(
    arr.reduce((total,num,index,arr)=>{
      total += num;
      if(index === arr.length-1){
        return `El promedio de ${arr.join(" + ")} es igual a ${total / arr.length}`; 
      }else{
        return total
      }
    })
  )
}

//Llamo a la función vacía para corroborar al validación
promedio();
//Llamo a la función con un parámetro que no es un arreglo para corroborar al validación
promedio({});
//Llamo a la función con un arreglo vacío de parámetro para corroborar al validación
promedio([]);
//Llamo a la función con un arreglo que tiene Number y valor boolean de parámetro para corroborar al validación
promedio([2,5,8,true]);
//Llamo a la función con un arreglo de Number como parámetro
promedio([1,2,3,4,5,6,7,8,9]);