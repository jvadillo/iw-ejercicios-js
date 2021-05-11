const estudiante = {
    nombre : 'Amaia',
    apellidos : 'Jainaga Urrutia',
    edad : 27,
    email : 'amaia@email.com'
}

function crearElemento(label, valor) {
    return `<li>${label} : ${valor}</li>`;
}

function crearLista(objeto){
    let lista = '<ul>'
    for(const key in objeto){
        console.log(key); // Clave
        console.log(objeto[key]); // Valor
        lista += crearElemento(key, objeto[key]); // estudiante["nombre"]
    }
    lista += '</ul>'
    return lista;
}

/* SOLUCIÓN ALTERNATIVA (MENOS REUTILIZABLE) */
/*
function crearLista(objeto){
    let lista = `
        <ul>
            <li>Nombre: ${estudiante.nombre}</li>
            <li>Apellidos: ${estudiante.apellidos}</li>
            <li>Edad: ${estudiante.edad}</li>
            <li>Email: ${estudiante.email}</li>
        </ul>`;
    return lista;
}
*/

let listaHTML = crearLista(estudiante);
document.getElementById('lista').insertAdjacentHTML('afterbegin', listaHTML);
// ALTERNATIVA: document.getElementById('lista').innerHTML = listaHTML;