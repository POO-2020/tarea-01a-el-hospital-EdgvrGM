class Nombre {
  constructor(nombre, apellidoPaterno, apellidoMaterno) {
    this.nombre = nombre;
    this.aP = apellidoPaterno;
    this.aM = apellidoMaterno;
  }
  getNombreCompleto() {
    return `${this.nombre} ${this.aP} ${this.aM}`;
  }
  getApellidoNombre() {
    return `${this.aP} ${this.aM} ${this.nombre}`;
  }
  getIniciales() {
    return `${this.nombre.charAt(0)}.${this.aP.charAt(0)}.${this.aM.charAt(0)}`;
  }
}

let name1 = new Nombre("Edgar", "Gonzalez", "Montelongo");
console.log(name1.getIniciales());
