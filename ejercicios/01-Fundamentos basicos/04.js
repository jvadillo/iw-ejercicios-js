let edad = 12;
let mensaje;

if (edad >= 18) {
    mensaje = "Ya puedes votar";
} else {
    edadRestante = 18 - edad;
    mensaje = `Todavía te quedan ${edadRestante} años para votar.`;
}

// Alternativa aberviada
// mensaje = edad >= 18 ? "Ya puedes votar" : `Todavía te quedan ${18-edad} años para votar.`;

alert(mensaje);
