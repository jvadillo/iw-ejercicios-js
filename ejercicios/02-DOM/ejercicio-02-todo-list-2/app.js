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


function crearTarea(id, descripcion, responsable, fecha){
    return `
        <tr>
            <td>${id}</td>
            <td>${fecha}</td>
            <td>${responsable}</td>
            <td>${descripcion}</td>
        </tr>`;
}

function generarHTMLTablaTareas(tareas) {
    let tabla = `
        <table id="tabla-tareas">
            <thead>
                <tr>
                    <td>ID</td>
                    <td>Fecha</td>
                    <td>Responsable</td>
                    <td>Descripción</td>
                </tr>
            </thead>
            <tbody>
    `;
    for(const tarea of tareas) {
        tabla += crearTarea(tarea.id, tarea.descripcion, tarea.responsable, tarea.fecha);
    }
    tabla += '</tbody></table>'
    return tabla;
}

function crearTablaTareas(tareas){
    let tabla = generarHTMLTablaTareas(tareas);
    document.getElementById('tareas').innerHTML = tabla;
}

// Crear tabla de tareas
crearTablaTareas(tareas);

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


/* OPCIÓN ALTERNATIVA (AÑADIR LA TAREA DIRECTAMENTE A LA TABLA, SIN METERLA EN EL ARRAY) */
/*
document.getElementById('btn-nueva-tarea').addEventListener('click', function(event){
    event.preventDefault(); // Detener el envío del formulario
    
    let formulario = event.currentTarget.parentNode; // Acceder al formulario desde el botón

    let tareaHTML = crearTarea(
        formulario.children["id"].value,
        formulario.children["descripcion"].value,
        formulario.children["responsable"].value,
        formulario.children["fecha"].value
    );
    document.getElementById('tabla-tareas').insertAdjacentHTML('beforeend', tareaHTML);
    
});
*/