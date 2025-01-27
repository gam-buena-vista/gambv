// Obtener el elemento donde se mostrará la fecha
const updateTimeElement = document.getElementById('update-time');

// Crear un objeto de fecha
const currentDate = new Date();

// Formatear la fecha de forma legible (DD/MM/YYYY)
const formattedDate = `${currentDate.getDate()}/${currentDate.getMonth() + 1}/${currentDate.getFullYear()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

// Insertar la fecha formateada en el HTML
updateTimeElement.textContent = formattedDate;