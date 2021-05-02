
function saludar(nombre) {
    if(!nombre) {
        nombre = "anónimo";
    }
    alert(`Hola ${nombre}`);
}

saludar("Aritz");
saludar("Izaro");
saludar();