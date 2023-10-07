
function esPar(numero) {
    resultado = (numero %2 == 0) ? true : false 
    return resultado;
        
}

function imprimirEsPar(numero) {
    let mensaje = `El número ${numero} es: `
    if (esPar(numero)) {
        mensaje += 'par.';
    } else {
        mensaje += 'impar.'
    }
    return mensaje; 
}

esPar(4);
esPar(9);
esPar(0);