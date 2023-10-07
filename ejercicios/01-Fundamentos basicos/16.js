let cuentaCorriente = {
    saldoInicial: 1500,
    compras: -300,
    alquiler: -500,
    facturas: -600,
    sueldo: 2000
}

const calcularSaldo = (cuenta) => {
    let resultado = 0;
    for (const clave in cuenta) {
        resultado += cuenta[clave];
    }
    return resultado;
}

alert(calcularSaldo(cuentaCorriente));
