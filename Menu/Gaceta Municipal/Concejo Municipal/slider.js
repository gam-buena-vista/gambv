// Función para aplicar los filtros
function applyFilters() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const categoryValue = document.getElementById('category').value;
    const startDateValue = document.getElementById('start-date').value;
    const endDateValue = document.getElementById('end-date').value;
    const statusValue = document.getElementById('status').value;

    const rows = document.querySelectorAll('#example tbody tr');
    
    rows.forEach(row => {
        const title = row.cells[0].textContent.toLowerCase();
        const date = row.cells[1].textContent;
        const description = row.cells[2].textContent.toLowerCase();
        const fileLink = row.cells[3].textContent.toLowerCase();
        
        // Comprobamos si la fila debe ser mostrada
        const showRow = (
            (title.includes(searchValue) || description.includes(searchValue) || fileLink.includes(searchValue)) &&
            (categoryValue === "" || row.getAttribute('data-category') === categoryValue) &&
            (startDateValue === "" || new Date(date) >= new Date(startDateValue)) &&
            (endDateValue === "" || new Date(date) <= new Date(endDateValue)) &&
            (statusValue === "" || row.getAttribute('data-status') === statusValue)
        );
        
        // Mostrar o esconder la fila
        row.style.display = showRow ? "" : "none";
    });
}

// Asignar el evento al buscar
document.getElementById('search').addEventListener('input', applyFilters);

// Asignar el evento a los filtros
document.getElementById('category').addEventListener('change', applyFilters);
document.getElementById('start-date').addEventListener('change', applyFilters);
document.getElementById('end-date').addEventListener('change', applyFilters);
document.getElementById('status').addEventListener('change', applyFilters);