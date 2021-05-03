let aplicacion = {
    nombre: "Web App Industrial"
}

aplicacion.puerto = 8000;
aplicacion.hostname = "localhost";

console.log(aplicacion.nombre);
console.log(aplicacion.puerto);
console.log(aplicacion.hostname);

delete aplicacion.hostname;