let inversiones = {
    fondos: 300,
    oro: 400
}

const multiplicarInversion = (inversionesObj, multiplicador) => {
    for (const clave in inversionesObj) {
        inversionesObj[clave] *= multiplicador;
    }
}

multiplicarInversion(inversiones, 2);
console.log(inversiones);
multiplicarInversion(inversiones, 3);
console.log(inversiones);
