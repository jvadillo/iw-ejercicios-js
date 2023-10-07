
function saludar(nombre) {
    if(nombre === undefined) {
    //if(!nombre) { // No diferencia false, 0 or "" de indefinido
        nombre = "anónimo";
    }
    alert(`Hola ${nombre}`);
}

saludar("Aritz");
saludar("Izaro");
saludar();