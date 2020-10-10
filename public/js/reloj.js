var footer = $('#relojFooter');

function startTime() {
    var html = '';
    var hoy = new Date();
    var hr = hoy.getHours();
    var min = hoy.getMinutes();
    var seg = hoy.getSeconds();
    //Añadir 0 si el numero es <10
    hr = checkTime(hr);
    min = checkTime(min);
    seg = checkTime(seg);
    var reloj = hr + ":" + min + ":" + seg;
    // document.getElementById("reloj ").innerHTML = hr + ":" + min + ":" + seg;

    var mes = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Augosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
    var dia = hoy.getDate();
    var nomMes = mes[hoy.getMonth()];
    var anio = hoy.getFullYear();
    var fecha = dia + " " + nomMes + " " + anio;
    // document.getElementById("fecha ").innerHTML = fecha;

    html += '<footer>';
    html += '    <div>';
    html += '        <div class="foot ">';
    html += '            <div>';
    html += '                <ul class="nav justify-content-center">';
    html += '                   <li class="nav-item">';
    html += '                        <a class="nav-link" href="#">';
    html += '                           <div><span> términos y condiciones</span></div>';
    html += '                        </a>';
    html += '                   </li>';
    html += '                   <li class="nav-item ">';
    html += '                       <a class="nav-link" href="# ">';
    html += '                           <div><span>Política de privacidad</span></div>';
    html += '                       </a>';
    html += '                   </li>';
    html += '                   <li class="nav-item">';
    html += '                       <a class="nav-link" href="#">';
    html += '                           <div><span><i class="fab fa-whatsapp "  style="font-size: 20px; "> </i> 5555555555 </span></div>';
    html += '                       </a>';
    html += '                   </li>';
    html += '                   <li class="nav-item ">';
    html += '                       <a class="nav-link" href="#">';
    html += '                           <div><span><i class="fab fa-facebook " style="font-size: 20px; "> </i>   EscuelaDeCodigo</span></div>';
    html += '                       </a>';
    html += '                   </li>';
    html += '               </ul>';
    html += '                <div class="clockdate-wrapper ">';
    html += '                    <div>' + fecha + '</div>';
    html += '                    <div>' + reloj + '</div>';
    html += '                </div>';
    html += '            </div>';
    html += '        </div>';
    html += '    </div>';
    html += '</footer>';
    html += '<div style="background-color: black; padding: 0.5rem; text-align: center;">';
    html += '    <img src="../img/WM.png" alt="" style="width: 3em; padding-right:  5px;">';
    html += '</div>';

    footer.html(html);

    var time = setTimeout(function() { startTime() }, 500);




}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}