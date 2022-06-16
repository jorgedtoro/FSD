class Coche {
  constructor(matricula, color, marca) {
    this.matricula = matricula;
    this.color = color;
    this.marca = marca;
    this.encendido = false;
    this.velocidad = 0;
  }
  claxon() {
    console.log("MEEEEEEEEEE");
  }
  arrancar() {
    this.encendido = true;
  }
  apagar() {
    this.encendido = false;
  }
  pedales(velocidad) {
    if (velocidad >= 0) {
      this.velocidad = velocidad;
    }
  }
  itv() {
    if (this.encendido === true) {
      console.log("apaga el coche");
    } else if (this.velocidad !== 0) {
      console.log("para el coche")
    } else {
      console.log(this.matricula, this.color, this.marca);
    }
  }
}

class Parking {
  constructor() {
    this.coches = {};
  }
  aparcar(coche) {
    if (typeof this.coches[coche.matricula] !== 'undefined') {
      console.log("no puedo aparcar coches con la misma matrícula");
    } else {
      this.coches[coche.matricula] = coche;
    }
  }
  sacar(matricula) {
    let coche;
    if (typeof this.coches[matricula] === 'undefined') {
      console.log("no encuentro ese coche");
    } else {
    	coche = this.coches[matricula];
      delete this.coches[matricula];
    }
    return coche;
  }
}

/* ITV A COCHE */
/*
const coche1 = new Coche("6462JKF", "negro", "Renault");
console.log(coche1.matricula);
console.log(coche1.encendido);
coche1.arrancar();
console.log(coche1.encendido);
console.log(coche1.velocidad);
coche1.pedales(50);
console.log(coche1.velocidad);
coche1.itv();
coche1.apagar();
coche1.itv();
coche1.pedales(0);
coche1.itv();
*/

/* Parking */
const coche1 = new Coche("6462JKF", "negro", "Renault");
const coche2 = new Coche("7682BNC", "verde", "Mercedes Benz");
const coche3 = new Coche("1234TRN", "azul", "Peugeot");
const coche4 = new Coche("7654JKF", "negro", "Renault");
const coche5 = new Coche("6462JKF", "negro", "Renault");

const parking = new Parking();
parking.aparcar(coche1);
parking.aparcar(coche2);
parking.aparcar(coche3);
parking.aparcar(coche4);
console.log(parking.coches);
parking.aparcar(coche5);

parking.sacar(coche2.matricula);
console.log(parking.coches);