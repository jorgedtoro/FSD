/************************CLASE CARRITO******************************************/

class Carrito {
  constructor(productos = []) {
    this.productos = productos;
  }
  addCarrito(producto) {
    //si tenemos el producto, no lo añadimos sumamos unidades
    if (!this.existeProducto(producto)) {
      this.actualizarUnidades(producto);
      this.productos.push(producto);
    } else {
      // console.log(producto.sku);
      // console.log(producto.cantidad);
      this.actualizarUnidades(producto);
    }
  }
  existeProducto(producto) {
    return this.existeSku(producto.sku);
  }
  existeSku(sku) {
    return this.productos.find((p) => p.sku === sku);
  }

  actualizarUnidades(producto) {
    //Actualiza el nº de unidades que se quieren comprar del producto
    return producto.cantidad++;
  }
  restaUnidades(productos) {
    return producto.cantidad--;
  }

  obtenerInformacionProducto(sku) {
    // Devuelve los datos de un producto además de las unidades seleccionadas
    //habrá que usar un método como find... usando de búsqueda sku.
  }
  obtenerCarrito() {
    // Devuelve información de los productos añadidos al carrito
    // Además del total calculado de todos los productos
    return this.productos;
  }
  calculaTotal(producto) {
    const totalValor = producto.cantidad * producto.price;
    const totalValorF = totalValor.toFixed(2) + "€";
    return totalValorF;
  }
  totalCarrito() {}
}
