//Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, por ejemplo miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5
//Creo la función expresada contarLetras que recibe  como parámetro una String la inicializo como String vacío. Hago las validaciones: si la cadena está vacía o si no ingresa cadena de texto.
//Creo dos variables (vocales y consonantes) y las inicializo en 0.
//A la variable cadena le aplico .toLowerCase() para pasar a minúsculas todos los caracteres ingresados (asi cuando entra en los if solo calculo con minúsculas).
//Utilizo el for of para iterar (recorrer) cada letra sobre la cadena. Por cada iteración voy aumentando de 1 en 1. Con dos if y expreshiones regulares voy viendo si tengo vocales y voy sumando de 1 en 1 la variable vocal. Hago lo mismo con la variable consonante.
//Retorno un objeto con la cadena original que me indique cuantas vocales y cuantas consonantes tengo
const contarLetras = (cadena="") => {
  if(!cadena) return console.warn("No ingresaste una cadena de texto");

  if(typeof cadena !== "string") return console.error(`El valor ${cadena} ingresado no es una cadenade texto`);

  let vocales = 0,
    consonantes = 0;

  cadena = cadena.toLocaleLowerCase();

    for (let letra of cadena){
      if(/[aeiouáéíóú]/.test(letra))vocales++;
      
      if(/[bcdfghjklmnñpqrstvwzyx]/.test(letra))consonantes++;
    }
    return console.info({
      cadena,
      vocales,
      consonantes
    })
}

//Llamo a la función contarLetras sin parámetro para ver la validación
contarLetras();
//Llamo a la función contarLetras con un número como parámetro para ver la validación de que sea de tipo String
contarLetras(3);
//Llamo a la función contarLetras con un string como parámetro para ver la validación de que sea de tipo String y me devuelve un objeto y me dice cuantas vocales y cuantas consonantes tengo
contarLetras("Hola mundo");