document.addEventListener('DOMContentLoaded', () => {
    const footerHTML = `
        <footer class="custom-footer mbr-section mbr-section-nopadding" id="footer1-3e">
            <div class="container">
                <!-- Enlace al mapa del sitio -->
                <p class="text-center">
                    <i class="fas fa-sitemap fa-lg"></i>&nbsp;&nbsp;&nbsp;
                    <strong><a href="../../../../Menu/Mapa del Sitio/mapasitio.html" class="text-warning">Mapa del Sitio</a></strong>
                </p>
                <!-- Copyright -->
                <p class="text-center">
                    Copyright (c) 2025 G.A.M.B.V. ® - Unidad de Sistemas A.M.C.
                </p>
                <!-- Línea Horizontal (Separador) -->
                <hr>
                <!-- Fecha de actualización -->
                <div class="row">
                    <div id="last-updated">
                        Última vez actualizado: <span id="update-time"></span>
                    </div>
                </div>
            </div>
        </footer>
    `;

    const footerElement = document.querySelector('footer');
    if (footerElement) {
        footerElement.innerHTML = footerHTML;

        // Añade el script actualizador.js
        const script = document.createElement('script');
        script.src = '../../../../js/actualizador.js';
        document.body.appendChild(script);
    } else {
        console.error('Elemento <footer> no encontrado.');
    }
});