let aplicacion = {
    nombre: "Web App Industrial"
}

aplicacion.puerto = 8000;
aplicacion.hostname = "localhost";

for (const clave in aplicacion) {
    console.log(`Propiedad / Valor: ${clave} / ${aplicacion[clave]}`);
}