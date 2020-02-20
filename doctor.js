import Nombre from "./nombre.js";

export default class Doctor {
  /**
   *
   * @param {string} especialidad
   * @param {number} telefono
   * @param {number} cedula
   */
  constructor(especialidad, telefono, cedula) {
    this.nombre = new Nombre("Ricardo", "Guzman", "Andrade");
    this.esp = especialidad;
    this.telefono = telefono;
    this.cedula = cedula;
  }
  getId() {
    return `-${this.nombre.getNombreCompleto()}
-${this.esp}
-${this.telefono}
-${this.cedula}`;
  }
}
