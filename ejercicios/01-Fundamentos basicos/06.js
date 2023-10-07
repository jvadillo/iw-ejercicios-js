
const LONGITUD = 30;

function anadirPuntos(frase, longitud) {
    while (indice <= longitud) {
        frase += ".";
        indice++;
        console.log("La frase es: "+frase);
        console.log(indice);
    }
    return frase;
}


let frase = prompt("Introduce tu frase: ");
let indice = frase.length;
alert(anadirPuntos(frase, LONGITUD));