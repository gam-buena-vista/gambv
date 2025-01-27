<?php
// Configuración de la base de datos
$host = "127.0.0.1";
$dbname = "leyes_db";
$username = "root";
$password = ""; // Deja esto vacío si estás usando XAMPP sin contraseña

try {
    // Conexión a la base de datos
    $conn = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Verificar si el formulario se envió
    if ($_SERVER['REQUEST_METHOD'] === 'POST') {
        $titulo = $_POST['titulo'];
        $publicacion = $_POST['publicacion'];
        $descripcion = $_POST['descripcion'];

        // Manejo del archivo PDF
        if (isset($_FILES['archivo']) && $_FILES['archivo']['error'] === UPLOAD_ERR_OK) {
            $archivoTmp = $_FILES['archivo']['tmp_name'];
            $nombreArchivo = basename($_FILES['archivo']['name']);
            $destino = "uploads/" . $nombreArchivo;

            // Crear directorio si no existe
            if (!is_dir("uploads")) {
                mkdir("uploads", 0777, true);
            }

            // Mover el archivo al directorio destino
            if (move_uploaded_file($archivoTmp, $destino)) {
                // Insertar datos en la base de datos
                $sql = "INSERT INTO leyes (titulo, publicacion, descripcion, archivo_pdf) VALUES (:titulo, :publicacion, :descripcion, :archivo_pdf)";
                $stmt = $conn->prepare($sql);
                $stmt->bindParam(':titulo', $titulo);
                $stmt->bindParam(':publicacion', $publicacion);
                $stmt->bindParam(':descripcion', $descripcion);
                $stmt->bindParam(':archivo_pdf', $destino);

                if ($stmt->execute()) {
                    echo "<p>Ley guardada con éxito.</p>";
                } else {
                    echo "<p>Error al guardar la ley.</p>";
                }
            } else {
                echo "<p>Error al subir el archivo.</p>";
            }
        } else {
            echo "<p>Error en el archivo PDF.</p>";
        }
    }
} catch (PDOException $e) {
    echo "Error de conexión: " . $e->getMessage();
}
?>
