export default class Nombre {
  /**
   *
   * @param {string} nombre
   * @param {string} apellidoPaterno
   * @param {string} apellidoMaterno
   */
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
