//Programa una función que valide que un texto sea un email válido, por ejemplo miFuncion("mariaeugenia1@gmail.com") devolverá verdadero
//No voy a validar que email ingresado exista, sino que tenga un patrón de correo electrónico, es decir que tenga un @, que antes del @ tenga letras, guión medio, guión bajo o punto y que luego del @ no tenga guión medio ni bajo y que luego del punto tenga al menfs dos letras
//Creo la función expresada validarEmail la cual recibe de parámetro la variable mail. Verifico que no esté vacía el parámetro y que sea String.
//Creo una expresión regular que guardo en la varaible expReg donde guardo lo que puede tener la dirección de email.
//En el return mando por consola el aviso de si es email correcto o incorrecto.

const validarEmail = (email="") => {
  if(!email) return console.warn("No ingresaste un email");

  if(typeof email !== "string") return console.error(`El valor ${email} ingresado no es una cadena de texto`);

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z]{2,15})/i.test(email);
  
  return(expReg)
    ?console.info(`${email}, es un email correcto`)
    :console.warn(`${email} es un email incorrecto`);
}
//llamo a la función validarEmail y no paso ningún parámetro para verificar la validación
validarEmail();
//llamo a la función validarEmail y paso un Number como parámetro para verificar la validación
validarEmail(10);
//Llamo a la función e ingreso como parámetros un mail pero con comas y sin el punto
validarEmail("costa,maria,eugenia,1@gmail");
//Llamo a la función e ingreso como parámetro un mail.
validarEmail("costamariaeugenia1@gmail.com");