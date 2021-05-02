
function sumarConInteres(cantidad1, cantidad2) {
    let suma = cantidad1 + cantidad2;
    if (suma <= 10) {
        suma += 1;
    } else {
        suma += 2;
    }
    return suma;
}

alert(sumarConInteres(5, 3));
alert(sumarConInteres (7,9));