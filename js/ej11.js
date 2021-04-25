//Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), por ejemplo miFuncion(5) devolverá 120

//No se puede sacar factorial de números negativos ni de 0, el facctorial es para números positivos.
//Creo la función expresada factorial que va a recibir como parámetro la varaible numero.
//Primero compruebo que si no ingresa valor y aviso por consola. Luego verifico que lo que ingrese sea un valor, si no es así aviso por consola, nuevamente utilizo  el méetodo .typeof().
//Segundo verifico que no ingrese 0.
//Utilizo el método Math.sign() para verificar que no ingrese un número negativo.
//Declaro la varible factoria a la cual le asigno el valor de 1 para comenzr a multiplicar desde 1 hasta el número ingresado para calcular el factorial. Con un for la voy a ir recorriendo, inicializo en el número ingresado como parámetro y en cada iteración voy restando 1 y calculo la variable factorial como factorial * i(i es el número ingresado como parámetro en a variable numero). Voy a retornar el factorial del número ingresado.

const factorial = (numero=undefined)=>{
  if(numero === undefined) return console.warn("No ingresaste un número");

  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un número.`);

  if(numero === 0) return console.error("El número ingresado no puede ser 0.");

  if(Math.sign(numero)=== -1) return console.error("El número ingresado no puede ser negativo");

  let factorial = 1;

  for(let i = numero; i>1; i--){
    factorial*= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`);
}

//Valido la función mandando vacío factorial, sin parámetro
factorial();
//Valido la función factorial ingresando un string para que me avise que no es un número lo ingreado
factorial("5");
//Valido la función factorial ingresando un array para que me avise que no es un número lo ingreado
factorial([1,2,3]);
//Valido la función factorial ingresando 0
factorial(0);
//Valido la función factorial ingresando un número negativo
factorial(-2);
//Ingreso un número positivo para calcular el factorial
factorial(4);