// Función para cargar contenido dinámico y filtrar elementos específicos
function loadContent(selector, file, targetClass = null) {
    fetch(file)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error al cargar ${file}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const tempDiv = document.createElement('div'); // Contenedor temporal
            tempDiv.innerHTML = data;

            let content = tempDiv;
            if (targetClass) {
                content = tempDiv.querySelector(`.${targetClass}`); // Seleccionar solo la clase deseada
                if (!content) {
                    throw new Error(`No se encontró la clase .${targetClass} en ${file}`);
                }
            }

            document.querySelector(selector).innerHTML = content.innerHTML;
        })
        .catch(error => console.error(error));
}

// Cargar solo el navbar desde menu.html
loadContent('section', '../../../html/menu.html', 'navbar');