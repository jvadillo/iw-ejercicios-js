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
 * Devuelve un string con el contenido HTML de una fila de la tabla
 */
function crearTarea(id, descripcion, responsable, fecha){
    return `
        <tr>
            <td>${id}</td>
            <td>${fecha}</td>
            <td>${responsable}</td>
            <td>${descripcion}</td>
        </tr>`;
}

function crearTablaTareas(tareas) {
    let tabla = `
        <table>
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

    // Recorrer el listado de tareas para crear una fila por cada tarea
    for(const tarea of tareas) {
        tabla += crearTarea(tarea.id, tarea.descripcion, tarea.responsable, tarea.fecha);
    }
    tabla += '</tbody></table>'
    return tabla;
}


let tabla = crearTablaTareas(tareas); // Devuelve la tabla para insertar en el DIV
document.getElementById('tareas').innerHTML = tabla;