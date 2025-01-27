$(document).ready(function () {
    $('#example').DataTable({
        language: tribe_l10n_datatables, // Traducciones
        paging: true, // Activar paginación
        searching: true, // Activar búsqueda
        lengthMenu: [5, 10, 25, 50], // Opciones de número de filas
        pageLength: 5 // Número de filas inicial
    });
});

var tribe_l10n_datatables = {
    aria: {
        sort_ascending: ": activar para ordenar columna ascendente",
        sort_descending: ": activar para ordenar columna descendente"
    },
    length_menu: "Mostrar _MENU_ entradas",
    empty_table: "No hay datos disponibles en la tabla",
    info: "Mostrando _START_ a _END_ de _TOTAL_ entradas",
    info_empty: "Mostrando 0 a 0 de 0 entradas",
    info_filtered: "(filtrado de _MAX_ entradas totales)",
    zero_records: "No se encontraron registros coincidentes",
    search: "Buscar:",
    all_selected_text: "Todos los elementos de esta página fueron seleccionados.",
    select_all_link: "Seleccionar todas las páginas",
    clear_selection: "Borrar selección.",
    pagination: {
        all: "Todos",
        next: "Siguiente",
        previous: "Anterior"
    },
    select: {
        rows: {
            0: "",
            _: ": Seleccionadas %d filas",
            1: ": Seleccionada 1 fila"
        }
    },
    datepicker: {
        dayNames: [
            "domingo",
            "lunes",
            "martes",
            "miércoles",
            "jueves",
            "viernes",
            "sábado"
        ],
        dayNamesShort: ["dom", "lun", "mar", "mié", "jue", "vie", "sáb"],
        dayNamesMin: ["D", "L", "M", "X", "J", "V", "S"],
        monthNames: [
            "enero",
            "febrero",
            "marzo",
            "abril",
            "mayo",
            "junio",
            "julio",
            "agosto",
            "septiembre",
            "octubre",
            "noviembre",
            "diciembre"
        ],
        monthNamesShort: [
            "ene",
            "feb",
            "mar",
            "abr",
            "may",
            "jun",
            "jul",
            "ago",
            "sep",
            "oct",
            "nov",
            "dic"
        ],
        nextText: "Siguiente",
        prevText: "Anterior",
        currentText: "Hoy",
        closeText: "Hecho",
        today: "Hoy",
        clear: "Limpiar"
    }
};