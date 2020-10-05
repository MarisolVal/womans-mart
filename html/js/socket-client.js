var socket = io();

var params = new URLSearchParams(window.location.search);
var divCatalogo = $('#divCatalogo');
var divCarrito = $('#divCarrito');
var divTotal = $('#divTotal');
var refresh = $('#refresh');

var producto = {
    nombre: params.get('nombre'),
    precio: parseInt(params.get('precio')),
    descripcion: params.get('descripcion'),
}

socket.on('connect', function(productos) {
    console.log('Conectado al servidor');
});

socket.emit('crearProducto', producto, function(resp) {
    console.log(producto);
});

socket.on('crearProducto', function(productos) {
    renderizarProductos(productos);
});

socket.on('crearCarrito', function(carritoP) {
    renderizarCarrito(carritoP);
});

socket.on('cuenta', function(total) {
    totalCarrito(total);
});

function renderizarProductos(productos) { //[{},{},{}]
    var html = '';
    divCatalogo.html(html);
    for (var i = 0; i < productos.length; i++) {

        html += '<div class="card-deck" style="padding-top: 20px; padding-left:10px;">';
        html += '   <div class="card" style="padding-top: 10px;">';
        html += '       <img src="../img/' + (i + 1) + '.png" class="card-img-top" style="width: 70%; align-self: center;" alt="...">';
        html += '       <div class="card-body" style="text-align: center;">';
        html += '           <p class="card-text">' + productos[i].nombre + '</p>';
        html += '           <p class="card-text">' + productos[i].descripcion + '</p>';
        html += '           <h5 class="card-title">$' + productos[i].precio + '</h5>';
        html += '       </div>';
        html += '       <div class="card-footer" style="text-align: right;">';
        html += '           <button type="button" class="btn btn-light"><i class="fas fa-eye" style="font-size: 15px; padding-right: 5px;"></i>Detalles</button>';
        html += '           <button data-id="' + productos[i].nombre + '" type="button" class="btn btn-light"><i class="fas fa-shopping-cart" style="font-size: 15px; padding-right: 5px;"></i>Agregar</button>';
        html += '       </div>';
        html += '   </div>';
        html += '</div>';

    }

    divCatalogo.html(html);
}


function renderizarCarrito(productosCarrito) { //[{},{},{}]
    var html = '';
    divCarrito.html(html);
    for (var i = 0; i < productosCarrito.length; i++) {

        html += '<div class="card-deck" style="padding-top: 20px; padding-left:10px;">';
        html += '   <div class="card" style="padding-top: 10px;">';
        html += '       <img src="../img/' + (i + 1) + '.png" class="card-img-top" style="width: 70%; align-self: center;" alt="...">';
        html += '       <div class="card-body" style="text-align: center;">';
        html += '           <p class="card-text">' + productosCarrito[i].producto.nombre + '</p>';
        html += '           <p class="card-text">' + productosCarrito[i].producto.descripcion + '</p>';
        html += '           <h5 class="card-title">$' + productosCarrito[i].producto.precio + '</h5>';
        html += '       </div>';
        html += '       <div class="card-footer" style="text-align: right;">';
        html += '           <p class="card-text">Cantidad:  ' + productosCarrito[i].cantidad + '</p>';
        html += '           <p class="card-text">Subtotal:  $ ' + productosCarrito[i].subTotal + '</p>';
        // html += '           <button type="button" class="btn btn-light"><i class="fas fa-eye" style="font-size: 15px; padding-right: 5px;"></i>Detalles</button>';
        // html += '           <button data-id="' + productosCarrito[i].nombre + '" type="button" class="btn btn-light"><i class="fas fa-shopping-cart" style="font-size: 15px; padding-right: 5px;"></i>Agregar</button>';
        html += '       </div>';
        html += '   </div>';
        html += '</div>';

    }

    divCarrito.html(html);
}

function totalCarrito(total) {
    var html = '';
    html += '<img src="../img/total.png" alt="" style="width: 200px;"> ' + total + '';
    divTotal.html(html);

}

divCatalogo.on('click', 'button', function() {
    var nombre = $(this).data('id');
    if (nombre) {
        socket.emit('agregaCarrito', nombre);
        console.log(nombre);
    }
});