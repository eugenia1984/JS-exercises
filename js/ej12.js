//Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, por ejemplo miFuncion(7) devolverá true

//Creo una función expresada numeroPrimo qu recibe como parámetro una variable que se llama numero y la asigno a undefined.
//Primero valido que no llegue vacía, luego que efectivamente esté pasando un número, que no sea 0, 1, ni negativo.
//Creo la varaible divisible, boolean, inicializada en False
//Uso un for i lo inicializo en 2 (no se puede dividir por 0, y el 1 ya lo excluí en las validaciones), en cada iteración va aumentando de 1 en 1 hasta que llegue al número anterior al número ingresado y guardado en la variable numero.
//Dentro con un if veo si el modulo de i es 0 entonces paso la variable divisible a true y finalizo el for con un break; así corto el ciclo ya que se descarta sea primo y no quiero que siga con el for.
//Sino para a la parte del return donde si el número es divisible avisa con mensaje por consola y si no es divisible también avisa por mensaje en consola.

const numeroPrimo = (numero=undefined)=>{
  if(numero===undefined) return console.warn("No ingresaste un número");

  if(typeof numero !== "number") return console.error(`El valor ${numero} ingresado no es un número`);

  if (numero === 0) return console.error("El número ingresado no puede ser 0");

  if (numero === 1) return console.error("El número ingresado no puede ser 1");

  if(Math.sign(numero) === -1) return console.error("El número ingresado no puede ser negativo");

  let divisible = false;

  for (let i = 2; i<numero; i++){
    if((numero % i) === 0){
      divisible = true;
      break;
    }
  }
  return(divisible)
    ?console.log(`El número ${numero} no es primo`)
    :console.log(`El número ${numero} si es primo`);
}

//Pruebo llamando a la función numeroPrimo sin ningún parámetro, para corroborar la validación
numeroPrimo();
//Pruebo llamando a la función numeroPrimo con un parámetro string
numeroPrimo("320");
//Pruebo llamando a la función numeroPrimo con un parámetro boolean
numeroPrimo(true);
//Pruebo llamando a la función numeroPrimo con un parámetro 0
numeroPrimo(0);
//Pruebo llamando a la función numeroPrimo con un parámetro 1
numeroPrimo(1);
//Pruebo llamando a la función numeroPrimo con un parámetro un número negativo
numeroPrimo(-13);
//Pruebo llamando a la función numeroPrimo con un parámetro un número primo
numeroPrimo(13);
//Pruebo llamando a la función numeroPrimo con un parámetro un número no primo
numeroPrimo(200);