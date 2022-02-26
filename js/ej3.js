//Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, por ejemplo miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal']

/*Creo una funcion cadenaAArreglo que tomoe como parámetros cadena que la declaro como string vacía y separador que lo declaro como undefined. Primero veo si ingreso uan cdena, sino con console.warn aviso.Segundo veo si ingreso un separador, sino con console.warn aviso que no ingreso el caracter saprador. Si está todo bien con .split separo la cadena*/
const cadenaArreglo = (cadena = "",separador=undefined)=>
  (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :(separador === undefined)
      ?console.warn("No ingresaste el caracter separador")
      :console.info(cadena.split(separador));
//Llamo a la función cadenaAArreglo, como string ingreso los meses del año y como separador ingreso una ,
cadenaArreglo("Ene,Feb,Mar,Apr,May,Jun;Jul;Ago,Sep,Oct,Nov,Dic",",");
//Hago la validación de que no ingrese una cadena de texto
cadenaArreglo();
// Hago la validación de que no ingreso el caracter separaor
cadenaArreglo("Hola Mundo");
