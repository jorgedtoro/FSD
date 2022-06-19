// Clase carrito de compras

class Carrito {
  constructor(productos = []) {
    this.productos = productos;
  }
  addProducto(producto) {
    if (!this.existeProducto(producto)) {
      this.productos.push(producto);
    } else {
      //si existe el producto lo actualiza.
      return this.actualizaUnidades(producto.SKU, producto.cantidad);
    }
  }
  obtenerProductos() {
    //obtenemos los productos del carrito
    return this.productos;
  }
  existeProducto(producto) {
    return this.existeProductoSku(producto.SKU);
  }
  existeProductoSku(sku) {
    return this.productos.find((s) => s.SKU === sku);
  }
  actualizaUnidades(sku, cantidad) {
    const productoModif = this.productos.find((s) => s.SKU === sku);
    return (productoModif.cantidad = productoModif.cantidad + 1);
  }
  RestaUnidades(sku, cantidad) {
    const productoModif = this.productos.find((s) => s.SKU === sku);
    if (productoModif.cantidad > 0) {
      return (productoModif.cantidad = productoModif.cantidad - 1);
    }
  }

  quitarProducto(sku) {
    // elimina un producto del carrito
    this.productos = this.productos.filter((producto) => producto.SKU !== sku);
  }
  totalCarrito() {
    //calcula el total del carrito
    return this.productos.reduce((acc, producto) => {
      return (acc = acc + producto.price * producto.cantidad);
    }, 0);
  }
}
