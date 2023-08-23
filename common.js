document.addEventListener("DOMContentLoaded", function() {
    GetLastUpdateDate();
});

function GetLastUpdateDate() {
    const months = [ "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre" ];
    const lastMoifiedDate = new Date(document.lastModified);
    const headerString = `Ultimos cambios (ultima modificacion: 22 / Agosto / 2023)`;
    document.getElementById("updates-table-header").innerHTML = headerString;
}
