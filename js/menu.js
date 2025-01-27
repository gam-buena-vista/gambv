document.addEventListener("DOMContentLoaded", () => {
    const header = document.createElement("header");
    header.innerHTML = `
        <img src="./Imagenes/logogamnegro.png" class="logo" alt="Logo del Gobierno Autónomo Municipal de Buena Vista">
        <input type="checkbox" id="menu" aria-label="Abrir menú">
        <label for="menu">
            <img class="menu-icono" src="./Imagenes/menu.png" alt="Ícono de menú">
        </label>
        <nav class="navbar">
            <ul>
                <li><a href="./index.html">Inicio</a></li>
                <li>
                    <a href="#">Gobierno Municipal ▼</a>
                    <ul>
                        <li><a href="../../../../Menu/Gobierno Municipal/Historia/historia.html">Historia</a></li>
                        <li><a href="../../../../Menu/Gobierno Municipal/Mision Vision/misionvision.html">Misión y Visión</a></li>
                        <li><a href="../../../../Menu/Gobierno Municipal/Objetivos Institucionales/objetivo.html">Objetivos Institucionales</a></li>
                        <li><a href="../../../../Menu/Gobierno Municipal/Autoridades/autoridades.html">Autoridades</a></li>
                        <li><a href="../../../../Menu/Gobierno Municipal/Organigrama/organigrama.html">Organigrama</a></li>
                        <li><a href="../../../../Menu/Gobierno Municipal/Informacion Estadistica/estadistica.html">Información Estadística</a></li>
                        <li><a href="../../../../Menu/Gobierno Municipal/Distritos y OTBs/distrito-otb.html">Distritos y OTB's</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Área Municipal ▼</a>
                    <ul>
                        <li><a href="../../../../Menu/Area Municipal/Asesoria/asesoria.html">Asesoría</a></li>
                        <li><a href="../../../../Menu/Area Municipal/Auditoria/auditoria.html">Auditoría Interna</a></li>
                        <li><a href="../../../../Menu/Area Municipal/Administrativa y Financiera/finanzas.html">Administrativa y Financiera</a></li>
                        <li><a href="../../../../Menu/Area Municipal/Planificacion y Desarrollo Humano/desarrollohumano.html">Planificación y Desarrollo Humano</a></li>
                        <li><a href="../../../../Menu/Area Municipal/Obras Publicas/obraspublicas.html">Obras Públicas</a></li>
                        <li><a href="../../../../Menu/Area Municipal/Desarrollo Productivo/desarrolloproductivo.html">Desarrollo Productivo y Medio Ambiente</a></li>
                        <li><a href="../../../../Menu/Area Municipal/Catastro/catastro.html">Catastro</a></li>
                    </ul>
                </li>
                <li>
                    <a href="#">Gaceta Municipal ▼</a>
                    <ul>
                        <li><a href="../../../../Menu/Gaceta Municipal/Concejo Municipal/legislativo.html">Concejo Municipal</a></li>
                        <li><a href="#">Gobierno Municipal</a>
                            <ul>
                                <li><a href="../../../../Menu/Gaceta Municipal/Gobierno Municipal/Decreto Edil/d-edil.html">Decreto Edil</a></li>
                                <li><a href="../../../../Menu/Gaceta Municipal/Gobierno Municipal/Resolucion Ejecutiva/r-ejecutiva.html">Resolución Ejecutivo</a></li>
                                <li><a href="../../../../Menu/Gaceta Municipal/Gobierno Municipal/Decreto Municipal/d-municipal.html">Decreto Municipal</a></li>
                                <li><a href="../../../../Menu/Gaceta Municipal/Gobierno Municipal/Resolucion Administratica/r-adm.html">Resolución Administrativa</a></li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li><a href="../../../../Menu/Noticias y Eventos/noticiaseventos.html">Noticias y Eventos</a></li>
                <li>
                    <a href="#">Mi Municipio ▼</a>
                    <ul>
                        <li><a href="../../../../Menu/Mi Municipio/Estadisticas Municipales/estadistica.html">Estadísticas Municipales</a></li>
                        <li><a href="../../../../Menu/Mi Municipio/Hospitales Municipales/hospitales.html">Salud</a></li>
                        <li><a href="../../../../Menu/Mi Municipio/Distritos Municipales/distritos.html">Educación</a></li>
                        <li><a href="../../../../Menu/Mi Municipio/Wifi Gratuito/wifi.html">Wi-Fi Gratuito</a></li>
                        <li><a href="../../../../Menu/Mi Municipio/Que Visitar En Buena Vista/visitabuenavista.html">Qué visitar en Buena Vista</a></li>
                        <li><a href="../../../../Menu/Mi Municipio/Parque Nacional Amboro/amboro.html">Parque Nacional Amboró</a></li>
                        <li><a href="../../../../Menu/Mi Municipio/Galeria de Fotos/galeriafotografica.html">Galería Fotográfica</a></li>
                    </ul>
                </li>
            </ul>
        </nav>`;
    document.body.insertBefore(header, document.body.firstChild);
});
