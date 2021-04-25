//Programa una función que elimine cierto patrón de caracteres de un texto dado, por ejemplo miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5

//Creo la fncion eliminarCaracteresque recibirá los parámetros texto y patron. Primero verifico si no se ingresa texto (si viene vacío) aviso por console.warn que no se ingreso texto.Veo si no se ingreso el patrón con console.warn aviso que no se ingreso un patrón de caracteres. Y de casoo contrario (se ingresa texto y patrón) con console.info utilizo el método replace() con el que creo una expresión regular (RegExp) que evalúe el patrón; su primer parámetro: con i no distingue entre mayúscula y minúscula (deja de ser case sensitive) y con g no se detiene en la primer coincidencia(ejecuta todas las coincidencias qeu encuentra); su segundo parámetro vacío (no quiero que lo reemplace con nada).

const eliminarCaracteres=(texto="",patron="")=>
  (!texto)
    ?console.warn("No ingresaste un texto")
    :(!patron)
      ?console.warn("No ingresaste un patrón de caracteres")
      :console.info(texto.replace(new RegExp(patron,"ig"),""));

//Llamo a la función sin ingresar texto
eliminarCaracteres();
//Ingreso sólo el texto, pero no el patrón a comparar
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5");
//Ingreso texto y patrón a comparar
eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz");
//Ingreso de texto un Lorem y pido saque la letra i
eliminarCaracteres("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.","i");