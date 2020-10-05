class Catalogo {

    constructor() {
        this.catalogo = []
    }

    agregarProducto(nombre, precio, descripcion) {
        let producto = { nombre, precio, descripcion };
        this.catalogo.push(producto);
        return this.producto;
    }

    todosLosProductos() {
        return this.catalogo;
    }

}

module.exports = {
    Catalogo,
}