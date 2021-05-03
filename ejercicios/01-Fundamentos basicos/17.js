let inversiones = {
    fondos: 300,
    oro: 400
}

const multiplicarInversion = (inversiones, multiplicador) => {
    for (const clave in cuentaCorriente) {
        inversiones[clave] *= multiplicador;
    }
}

console.log(inversiones);
