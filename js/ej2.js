//Creo la función recortarTexto que tome los parámetros cadena(la declaro como string vacía) y longitud(la declaro como undefined).
//Con arrow function y el operador ternario(identado, para que quede más expresivo elcódigo)

const recortarTexto = (cadena = "",longitud=undefined)=>
  (!cadena)
    ?console.warn("No ingresaste una cadena de texto")
    :(longitud === undefined)
      ?console.warn("No ingresaste la longitud para recortar el texto")
      :console.info(cadena.slice(0,longitud));

//Llamo a la función recortarTexto, con la cadena="HolaMundo" y la longitud de 4.
recortarTexto("Hola Mundo",4);
//Hago la prueba ingresando solo el string para que me corrobore que no ingrese longitud.
recortarTexto("Hola Mundo");