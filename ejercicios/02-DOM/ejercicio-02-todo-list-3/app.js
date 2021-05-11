// Array de tareas
const tareas = [
    {
        id : 1,
        descripcion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        responsable : 'Mikel',
        fecha : '03-10-2020'
    },
    {
        id : 2,
        descripcion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        responsable : 'Unai',
        fecha : '12-08-2020'
    },
    {
        id : 3,
        descripcion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        responsable : 'Ane',
        fecha : '11-12-2020'
    },
    {
        id : 4,
        descripcion : 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        responsable : 'Nora',
        fecha : '07-06-2020'
    }
];


/**
 * Genera un string con el contenido HTML para una fila con los datos de una tabla.
 */
function crearHTMLTarea(id, descripcion, responsable, fecha){
    return `
        <tr>
            <td>${id}</td>
            <td>${fecha}</td>
            <td>${responsable}</td>
            <td>${descripcion}</td>
            <td><a class="borrar-tarea" data-id="${id}" href="">Borrar</a></td>
        </tr>`;
}

/**
 * Genera un string con el contenido HTML para la tabla de tareas
 */
function generarHTMLTablaTareas(tareas) {
    let tabla = `
        <table id="tabla-tareas">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Fecha</td>
                    <td>Responsable</td>
                    <td>Descripción</td>
                    <td>Acciones</td>
                </tr>
            </thead>
            <tbody>
    `;
    for(const tarea of tareas) {
        tabla += crearHTMLTarea(tarea.id, tarea.descripcion, tarea.responsable, tarea.fecha);
    }
    tabla += '</tbody></table>'
    return tabla;
}

/**
 * Añade un listener a cada enlace de borrado
 */
function addBorrarEventListeners(){
    let enlacesBorrar = document.getElementsByClassName('borrar-tarea'); // Todos los elementos <a>
    for(enlace of enlacesBorrar) {
        // Añadir listener:
        enlace.addEventListener('click', function(event){
            event.preventDefault(); // Detener la acción por defecto de navegar
            // Mediante el objeto dataset podemos acceder a cualquier atributo de tipo "data-" 
            let id = event.currentTarget.dataset.id; // Accedemos al atributo "data-id"
            borrarTareaById(id, tareas);
            crearTablaTareas(tareas);
        });
    }
}

/**
 * Borra de un array de objetos el objeto con el ID indicado. 
 */
function borrarTareaById(id, tareas){
    for(let i = 0; i < tareas.length; i++) {
        if(tareas[i].id == id) {
            tareas.splice(i, 1);
            break;
        }
    }
}

/**
 * Crea la tabla HTML partiendo del array de objetos.
 */
function crearTablaTareas(tareas){
    let tabla = generarHTMLTablaTareas(tareas);
    document.getElementById('tareas').innerHTML = tabla;
    addBorrarEventListeners();
}


// Controlador para añadir nuevas tareas
document.getElementById('btn-nueva-tarea').addEventListener('click', function(event){
    event.preventDefault(); // Detener el envío del formulario
    
    let formulario = event.currentTarget.parentNode; // Acceder al formulario desde el botón
    
    // Crear un objeto Tarea con los datos del formulario
    let nuevaTarea = {
        id: formulario.children["id"].value,
        descripcion: formulario.children["descripcion"].value,
        responsable: formulario.children["responsable"].value,
        fecha: formulario.children["fecha"].value
    }
    // Añadir la nueva tarea al listado de tareas
    tareas.push(nuevaTarea);
    // Volver a crear la tabla (ahora la lista ya contiene la nueva tarea)
    crearTablaTareas(tareas);
});

// Crear tabla de tareas
crearTablaTareas(tareas);