const { io } = require('../server');

const { Catalogo } = require('../class/catalogo');
const { Carrito } = require('../class/carrito');

const catalogo = new Catalogo();
const carrito = new Carrito();

io.on('connection', (client) => {
    client.on('crearProducto', (data, callback) => {
        if (!data.nombre || !data.precio || !data.descripcion) {
            return;
        }
        var catalogoArray = catalogo.todosLosProductos();
        var buscar = catalogoArray.find(producto => producto.nombre === data.nombre);
        if (!buscar) {
            catalogo.agregarProducto(data.nombre, data.precio, data.descripcion);
        }
        client.emit('crearProducto', catalogo.todosLosProductos());
        callback(console.log(catalogo.todosLosProductos()));
    });

    client.emit('crearProducto', catalogo.todosLosProductos());

    client.on('agregaCarrito', data => {
        var catalogoArray = catalogo.todosLosProductos();
        var producto = catalogoArray.find(producto => producto.nombre === data);
        var carritoArray = carrito.todoElCarrito();

        var buscar = carritoArray.find((prod, index) => {
            if (prod.producto.nombre === producto.nombre) {
                carrito.carrito[index].cantidad += 1;
                carrito.carrito[index].subTotal = carrito.carrito[index].cantidad * producto.precio;
                return prod;
            }
        });
        if (!buscar) {
            carrito.agregarAcarrito(producto);
        }
        console.log(carrito.todoElCarrito());
        console.log(carrito.total());
    });

    client.emit('crearCarrito', carrito.todoElCarrito());
    client.emit('cuenta', carrito.total());

})