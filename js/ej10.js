//Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), por ejemplo miFuncion(2002) devolverá true.

//Creo la función capicua
//Evaluo que solo ingresar números, así no me ingresa los números entre comillas, por eso en el primer if la condición es !numero. Y en la segunda condición lo verifico con typeof que sea Number.
//Tengo que convertir mi Number a String con el método .toString() y lo guardo en la variable numero, luego le aplicarle los métodos .split() y .join() y lo guardo en la variable alReves
//Retorno un operador ternario para que evalue las variables numero  alReves y avise por consola si son capicua o no.
const capicua = (numero=0)=> {
  if(!numero) return console.warn("No ingresaste un número");

  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un número`);

  numero = numero.toString();
  let alReves = numero.split("").reverse().join("");

  return (numero === alReves)
    ?console.info(`Si es capicua, Número original ${numero}, número al revés ${alReves}`)
    : console.info(`No es capicua, Número original ${numero}, número al revés ${alReves}`)
}
//Llamo a la función si ingresar un número para ver la primera comprobación
capicua();
//Llamo a la función con número como string entre comillas, paraque valide que solo paso números
capicua("20");
//Llamo a la función y le paso un objeto, para que valide que solo pase números
capicua({});
//Llamo a la función con un número capicua
capicua(101);


//