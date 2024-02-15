const XLSX = require('xlsx');

// Cargar datos desde el archivo Excel
const workbook = XLSX.readFile('datos.xlsx');
const sheet_name_list = workbook.SheetNames;
const data = XLSX.utils.sheet_to_json(workbook.Sheets[sheet_name_list[0]]);

// Función para generar combinaciones aleatorias de 6 números
function generarCombinacion(datos) {
    let combinacion = [];
    for (let i = 0; i < 3; i++) {
        const indiceAleatorio = Math.floor(Math.random() * datos.length);
        combinacion.push(datos[indiceAleatorio]);
    }
    return combinacion;
}

// Función para generar las tres combinaciones con diferentes prioridades
function generarResultados(datos) {
    // Generar combinaciones
    const combinacionPrioridadAlta = generarCombinacion(datos);
    const combinacionPrioridadMedia = generarCombinacion(datos);
    const combinacionPrioridadBaja = generarCombinacion(datos);

    // Devolver las combinaciones en orden de prioridad
    return {
        alta: combinacionPrioridadAlta,
        media: combinacionPrioridadMedia,
        baja: combinacionPrioridadBaja
    };
}

// Llamar a la función para generar los resultados
const resultados = generarResultados(data);

// Imprimir los resultados en la consola
console.log("Prioridad Alta:", resultados.alta);
console.log("Prioridad Media:", resultados.media);
console.log("Prioridad Baja:", resultados.baja);
