
function esPar(numero) {
    let mensaje = `El número ${numero} es: `
    if (numero %2 == 0) {
        mensaje += 'par.';
    } else {
        mensaje += 'impar.'
    }
    alert(mensaje); // Lo idea sería hacer un return aquí y el alert fuera de la función.
}

esPar(4);
esPar(9);
esPar(0);