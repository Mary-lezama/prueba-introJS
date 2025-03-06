// functions.js very good
//Declarar 2 variables 
let nombre = "sofia"
let edad = 15
let peso = 65
//usando las variables
let nombredeUsuario = prompt('Ingrese su nombre:');
console.log(nombredeUsuario)
let edadUsuario = prompt('Ingrese su edad:');
console.log(edadUsuario)
let pesoUsuario = prompt('Ingrese su peso:');
console.log(pesoUsuario)
let datosUsuario = 'Hola ${nombredeUsuario} ${edadUsuario} ${pesoUsuario}';
console.log = (datosUsuario)
//Ejercicio 3 – Constantes / Validación de Edad: 
//Más adelante vamos a querer validar que nuestros encuestados sean de 18 años de edad mínima y 99 años de edad máxima. 
/* Nadie puede cambiar esas definiciones, por lo tanto, vamos a escribirlas en dos constantes (asignándoles los valores numéricos 18 y 99 respectivamente). Por último, deberás pedirle al usuario que ingrese su edad para validarla usando parseInt.

Desglosando el ejercicio deberás:

Crea una constante llamada EDAD_MINIMA y otra llamada EDAD_MAXIMA, a las cuales les asignamos los valores numéricos 18 y 99 respectivamente.
Pide al usuario que ingrese su edad.
Usa “parseInt” para convertir la entrada del usuario a un número entero.
Valida si la edad ingresada está dentro del rango permitido y muestra un mensaje adecuado. */

const EDAD_MINIMA = 18
console.log(EDAD_MINIMA)

