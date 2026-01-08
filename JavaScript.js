// FUNCIÓN LEER ARCHIVO
function leerArchivo() {
    try {
        const input = document.getElementById("archivo");

        if (!input.files || input.files.length === 0) {
            throw new Error("Selecciona un archivo primero.");
        }

        const archivo = input.files[0];
        const lector = new FileReader();

        lector.onload = function (evento) {
            document.getElementById("contenido").textContent = evento.target.result;
        };

        lector.readAsText(archivo);

    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        console.log("Proceso de lectura finalizado.");
    }
}


// FUNCIÓN  GUARDAR ARCHIVO 
function guardarArchivo() {
    try {
        const texto = document.getElementById("texto").value;

        if (texto.trim() === "") {
            throw new Error("El texto está vacío.");
        }

        const blob = new Blob([texto], { type: "text/plain" });
        const enlace = document.createElement("a");

        enlace.href = URL.createObjectURL(blob);
        enlace.download = "examen3erparcialDulceJazminVictoriaGarduño";
        enlace.click();

        URL.revokeObjectURL(enlace.href);

    } catch (error) {
        alert("Error: " + error.message);
    } finally {
        console.log("Proceso de escritura finalizado.");
    }
}
