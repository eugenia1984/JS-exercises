//Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, por ejemplo miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020)

//Hay que recordar que los meses son un array por lo cual comienzan desde el 0, por lo que el 4 es el mes de Mayo
//Creo la función expresada calcularAnios que va a tener de parámetro fecha, la que inicializo como undefined.
//Hago mi validación con el parámetro fecha para que no sea vacía y que sea un objeto (y no un array vacío) utilizando la negación el método instanceof() con Date.
//Creo una nueva variable (hoyMenosFecha) instanciando un nuevo objeto de Date como new Date y la convierto a fecha con el método getTime() que me da un número expresado en milisegundos desde esa fecha al día de hoy. A este número en milisegundos debo restarle los milisegundos de la fecha que indique para compararla con la fecha actual. Todo esto queda expresado en milisegundos.
//Me falta crear la varible para expresar en años con la variable aniosEnMS y voy calculando pasando de milisegundos a segundos minutos horas dias y años (en el caso de años lo tomo como 365 días, no tengo en cuenta los bisiestos)
//Creo la variable aniosHumanos

const calcularAnios = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste fecha");

  if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha válida");

  let hoyMenosFecha = new Date().getTime() - fecha.getTime(),
    aniosEnMS = 1000 * 60 * 60 * 24 * 365
  aniosHumanos = Math.floor(hoyMenosFecha/aniosEnMS);
  
  return (Math.sign(aniosHumanos) === -1)
    ?console.info(`Faltan ${Math.abs(aniosHumanos)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(aniosHumanos === 1)
      ?console.info(`Han pasado ${aniosHumanos} años, desde ${fecha.getFullYear()}.`)
      :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
    )}

//Llamo a la función calcularAnios sin parámetro para corroborar las validaciones
calcularAnios();
//Llamo a la función calcularAnios con {} como parámetro para corroborar las validaciones
calcularAnios({});
//Llamo a la función calcularAnios con un valor boolean como parámetro para corroborar las validaciones
calcularAnios(false);
//Llamo a la función calcularAnios con la fecha de hoy como parámetro para corroborar las validaciones
calcularAnios(new Date);
//Llamo a la función calcularAnios con una fecha pasada como parámetro para corroborar las validaciones
calcularAnios(new Date(1984,4,23));
//Llamo a la función calcularAnios con una fecha que todavçia no pasó como parámetro para corroborar las validaciones
calcularAnios(new Date(2050,4,23));