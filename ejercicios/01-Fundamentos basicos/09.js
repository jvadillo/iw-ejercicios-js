/**
 * Concatena los dos parámetros que recibe y los muestra en un alert.
 * @param {string} frase1 Primera frase
 * @param {string} frase2 Segunda frase
 */
function concatenar(frase1, frase2) {
    alert(`${frase1} ${frase2}`); // Lo idea sería hacer un return aquí y el alert fuera de la función.
}

concatenar("Hola, ", "¿Qué tal?");

let nombre = "Número de estudiantes: ";
let apellido = 40;

concatenar(nombre, apellido);