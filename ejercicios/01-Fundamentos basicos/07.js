
function sumarDesdeHasta(desde, hasta) {
    suma = 0;
    for (let index = desde; index <= hasta; index++){
        suma += index;   
    }
    return suma;
}


alert(sumarDesdeHasta(30, 60));