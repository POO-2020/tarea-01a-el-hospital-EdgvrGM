import Nombre from "./nombre.js";
import Fecha from "./fecha.js";

export default class Paciente {
 /**
  * 
  * @param {string} nombre 
  * @param {number} fecha 
  * @param {number} telefono 
  */
  constructor(nombre, fecha, telefono) {
    this.nombre = nombre
    this.fechaNacimiento = fecha
    this.telefono = telefono;
  }
  getPerfil() {
    return `-${this.nombre.getNombreCompleto()}
-${this.fechaNacimiento.getFecha()}
-${this.telefono}`;
  }
}
