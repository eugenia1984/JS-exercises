//Programa una función para contar el número de veces que se repite una palabra en un texto largo, por ejemplo miFuncion("hola mundo adios mundo", "mundo") devolverá 2

//Creo la función texto en Cadena con los parámetros cadena y texto. Luego  con dos if evalúo que los parámetros no ingresen vacíos.
//Uso el método indexOf que busca una cadena de texto dentro de otra cadena de texto y uso un ciclo while para que primero evalúe la expresión, luego la ejecute y en cada nueva iteración primero siempre evalúa.

const textoEnCadena =(cadena="",texto="")=>{
  if(!cadena) return console.warn("No ingresaste el texto largo");
  if(!texto) return console.warn("No ingresaste la palabra a evaluar");

  let i = 0,
    contador = 0;

  while(i!==-1){
    i = cadena.indexOf(texto,i);
    if(i!==-1){
      i++;
      contador++;
    }
  }
  return console.info(`La palabra ${texto} se repite ${contador} veces`);
}

//Lo pruebo llmando a la función y mandando con texto vacío
textoEnCadena();
//Lo mando con cadena vacío y palabra a evaluar
textoEnCadena("","mundo");
//No mando la palabra a evaluar
textoEnCadena("hola mundo adios mundo");
//La llamo con cadena y palabr a evaluar
textoEnCadena("hola mundo adios mundo hoi mundo chau mundo" ,"mundo");