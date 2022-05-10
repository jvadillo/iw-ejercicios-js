
// Comentario de una línea

/**
* Comentario de varias líneas
* de extensión.
*/


/* Declaración de variables */
var edad = 20;
let primerApellido = "Henry";
const PI = 3.14;

/* Diferencia let y var */
let x = 10; let y=4;
if (x > y) {
  let suma = x + y;
  var resta = x - y;
}
console.log(suma); // undefined
console.log(resta); // 6

/* Tipos de datos */

// Números
let numero = 52;
numero = -3.14;

// Strings
let nombre = 'Nora' //Comilla simple
let saludo = "I'm Nora" //Doble 
saludo = `Hola ${nombre}` //Back-tick

let telefono = null

let estudiante = true;

let email;
alert(email); // muestra "undefined"


/* Operadores */

// sumar, restar, multiplicar y dividir números
let resultado = 5 + 5; // 10
resultado = 5 - 2; // 3
resultado = 3 * 3; // 9
resultado = 14 / 2; // 7

let numero = 2;
numero  *= 3 + 5;
numero ( n ); // 16

i++; // equivalente de i = i + 1
i--; // equivalente de i = i - 1;

// concatenar dos cadenas
var frase = "Primera frase. " + "Segunda frase.";
// concatenar con +=
var frase = "I come first. ";
frase += "I come second.";
// construir cadenas con variables
var nombre = "Nora";
var frase = "Hola, me llamo " + nombre + ", y tu?";
// añadir variables a strings
var saludo = "Hola, me llamo ";
saludo += nombre;


/* Comparadores */

1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

// Solo comprueba si los valores son iguales, no los tipos
"5" == 5; // = true
// Comprobar valor y tipo:
"5" === 5; // = false

alert( 'Z' > 'A' ); // true
alert( 'Globo' > 'Gle' ); // true
alert( 'Bee' > 'Be' ); // true
alert( 'a' > 'A' ); // true

alert( '2' > 1 ); // true, string '2' se convierte a número 2
alert( '01' == 1 ); // true, string '01' se convierte a número 1

alert( true == 1 ); // true
alert( false == 0 ); // true

alert( !true ); // false
alert( !0 ); // true


/* Condicionales */

// IF-ELSE
let contador = 1;

if (contador === 3){
    // se ejecuta si contador es 3
} else if (contador === 4){
    // se ejecuta si contador es 4
} else {
    // se ejecuta si contador no es 3 ni 4
}

// Diferencias entre == y ===
const numero = 1234 
const numeroString = '1234'  

console.log(numero == numeroString) //true
console.log(numero === numeroString)  //false


// IF abreviado
let autorizacion = (edad > 18) ? true : false;

// OR
let hora = 9;

if (hora < 10 || hora > 18) {
  alert( 'La tienda está cerrada.' );
}

hora = 12;
let esDomingo = true;

if (hora < 10 || hora > 18 || esDomingo) {
  alert( 'La tienda está cerrada.' ); // es domigo
}

// AND
let nombre = 'Amaia', edad = 30, profesor = true;

if (nombre == 'Amaia' && edad == 30) {
    alert( 'Se llama Amaia y tiene 30 años' );
}
  
// WHILE
let i = 0;

while (i < 3) { // muestra 0, 1, 2
  alert( i );
  i++;
}

// DO-WHILE
let i = 0;

do {
  alert(i);
  i++;
} while (i < 3);

// FOR
for (let i = 0; i < 3; i++) { // muestra 0, luego 1, luego 2
    alert(i);
}

// BREAK
let suma = 0;

while (true) {
  suma += 2
  if (suma > 10) break; 
}
console.log(suma); // 12

suma = 0;

for (let i = 0; i < 20; i++) {
    suma += 2
    if (suma > 10) break;
}

console.log(suma); // 12

// CONTINUE
let suma = 0;

while (suma < 10) {
  suma += 1
  if (suma == 5) continue; 
  alert(suma)
}

for (let i = 0; i < 10; i++) {
    if (i == 5) continue;
	alert(i)
}

// SWITCH

let numero = 2;

switch (numero) {
    case 1:
      alert( 'Muy pequeño' );
      break;
    case 2:
      alert( '¡Exacto!' );
      break;
    case 3:
      alert( 'Muy grande' );
      break;
    default:
      alert( "No tengo ni idea" );
  }
  
/* FUNCIONES */
function saludar(nombre) {
    return 'Hola '+ nombre ;
}

saludar('Markel');
saludar('Nora');

// Variables en funciones
let nombreExterior = 'Unai';

function mostrarNombre() {
    let nombreInterior = "Amaia"; // variable local
    alert(nombreInterior);
    alert(nombreExterior); // Puede acceder 
}
mostrarNombre();
alert(nombreInterior); // Error! Es variable local

// Valor por defecto
function mostrarMensaje(nombre, texto = "no hay texto") {
    alert( nombre + ": " + texto );
}

mostrarMensaje("Aitor", "un texto cualquiera"); // Aitor: un texto cualquiera
mostrarMensaje("Aitor"); // Aitor: no hay texto

// Retorno de un valor
function sumar(a, b) {
    return a + b;
}
  
let result = sumar(1, 2);
alert( result ); // 3

// Arrow functions
let sumar = (a, b) => a + b 
alert( sumar(1, 2) ); // 3

let sum = (a, b) => {  // las llaves son necesariaslet result = a + b;// si hay llaves, hay que especificar "return"return result;};alert( sum(1, 2) ); // 3
    return a+b;
}

let estudiantes = [];
let profesores = new Array();
let frutas = ["Pera", "Limon", "Fresa"];
let primerFruta = frutas[0];
