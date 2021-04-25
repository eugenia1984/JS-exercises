//Programa una función que obtenga un numero aleatorio entre 501 y 600

// Creo una función expresada llamada aleatorio, acá no hay que chequear ningún error, uso el método random() y para pasarlo a número entero lo envuelvo en Math.round (para redondear el número) y lo mutiplico por 100 (o que me va a dar un número aleatorio entre 0 y 100). Luego le sumo 500 así me aseguro que está entre 500 y 600

const aleatorio = () => console.info(Math.round((Math.random()*100)+500));
//Llamo a la función aleatorio
aleatorio();