class Carrito {

    constructor() {
        this.carrito = []
    }

    agregarAcarrito(producto) {
        var productoCarrito = {
            producto: producto,
            cantidad: 1,
            subTotal: producto.precio,
        }
        this.carrito.push(productoCarrito);
        return productoCarrito;

    }

    todoElCarrito() {
        return this.carrito;
    }

    total() {
        var total = 0;
        for (var i = 0; i < this.carrito.length; i++) {
            total = total + this.carrito[i].subTotal;
        }
        return total;
    }

}

module.exports = {
    Carrito,
}