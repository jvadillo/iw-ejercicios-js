
function esPar(numero) {
    let mensaje = `El número ${numero} es: `
    if (numero %2 == 0) {
        mensaje += 'par.';
    } else {
        mensaje += 'impar.'
    }
    alert(mensaje);
}

esPar(4);
esPar(9);
esPar(0);