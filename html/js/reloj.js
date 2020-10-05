function startTime() {
    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var seg = hoy.getSeconds();
    //Añadir 0 si el numero es <10
    hr = checkTime(hr);
    min = checkTime(min);
    seg = checkTime(seg);
    document.getElementById("reloj ").innerHTML = hr + ":" + min + ":" + seg;

    var mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var dia = hoy.getDate();
    var nomMes = mes[hoy.getMonth()];
    var anio = hoy.getFullYear();
    var fecha = dia + " " + nomMes + " " + anio;
    document.getElementById("fecha ").innerHTML = fecha;

    var time = setTimeout(function() { startTime() }, 500);
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}