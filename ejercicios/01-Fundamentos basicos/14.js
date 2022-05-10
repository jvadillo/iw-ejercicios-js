let aplicacion = {
    nombre: "Web App Industrial"
}

aplicacion.puerto = 8000;
aplicacion.hostname = "localhost";

console.log(aplicacion.nombre);
console.log(aplicacion.puerto);
console.log(aplicacion.hostname);

/* Alternativa para mostrar todos los valores iterando*/
for (let clave in aplicacion) {
    // claves
    console.log(clave);
    // valores de las claves
    console.log(aplicacion[clave]);
}

delete aplicacion.hostname;