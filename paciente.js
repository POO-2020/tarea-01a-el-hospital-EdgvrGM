import Nombre from "./nombre.js";
import Fecha from "./fecha.js";

export default class Paciente {
    /**
     * 
     * @param {number} telefono 
     */
  constructor(telefono) {
    this.nombre = new Nombre("Bryan", "Guzman", "Covarrubias");
    this.fechaNacimiento = new Fecha(16, 11, 2000);
    this.telefono = telefono;
  }
  getPerfil() {
    return `-${this.nombre.getNombreCompleto()}
-${this.fechaNacimiento.getFecha()}
-${this.telefono}`;
  }
}
