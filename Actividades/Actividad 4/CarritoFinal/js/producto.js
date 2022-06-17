class Producto {
  constructor({ id, SKU, title, price, cantidad }) {
    this.id = id;
    this.SKU = SKU;
    this.title = title;
    this.price = Number(price);
    this.cantidad = cantidad;
  }
  getID() {
    return this.id;
  }
  getSku() {
    return this.SKU;
  }
  getTitle() {
    return this.title;
  }
  getPrice() {
    return this.price;
  }
  getCantidad() {
    return this.cantidad;
  }
  getTotal(tprice, cantidad) {
    return this.price * this.cantidad;
  }
}
