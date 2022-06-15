class Producto {
  constructor(...info) {
    this.id = info[0];
    this.title = info[1];
    this.sku = info[2];
    this.price = info[3];
    this.cantidad = info[4];
  }
  getId() {
    return this.id;
  }
  getTitle() {
    return this.title;
  }
  getSku() {
    return this.sku;
  }
  getPrice() {
    return this.price;
  }
  getCantidad() {
    return this.cantidad;
  }
}
