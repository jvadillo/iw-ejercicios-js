let cuentaCorriente = {
    saldoInicial: 1500,
    compras: -300,
    alquiler: -500
}

const calcularSaldo = (cuenta) => {
    let resultado = 0;
    for (const clave in cuentaCorriente) {
        resultado += cuentaCorriente[clave];
    }
    return resultado;
}

alert(calcularSaldo(cuentaCorriente));
