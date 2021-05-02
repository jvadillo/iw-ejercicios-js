let animales = ["Perro", "Gato", "Tortuga", "Tigre"];
let colores = ["Rojo", "Verde", "Azul"];

// Muestra por pantalla el segundo elemento de cada array.
console.log(`Segundo elemento de animales: ${animales[1]}`);
console.log(`Segundo elemento de colores: ${colores[1]}`);

// Obtén el número de elementos de cada array y muéstralo por pantalla.
console.log(`Tamaño de animales: ${animales.length}`);
console.log(`Tamaño de colores: ${colores.length}`);

// Añade un elemento al final del array animales utilizando una función.
animales.push("Erizo")
console.log(`Último elemento de animales: ${animales[animales.length-1]}`);

// Añade un elemento al principio del array colores utilizando una función.
colores.unshift("Gris")
console.log(`Primer elemento de animales: ${colores[0]}`);

// Recorre el array animales mostrando por pantalla cada uno de sus elementos.
for (let index = 0; index < animales.length; index++) {
    console.log(`Elemento en posición ${index}: ${animales[index]}`);
}