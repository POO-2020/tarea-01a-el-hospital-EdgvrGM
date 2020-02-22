import Fecha from "./fecha.js";
import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Doctor from "./doctor.js";
import Paciente from "./paciente.js";

export default class Cita {
  constructor(fecha, hora, doctor, paciente) {
    this.fecha = fecha;
    this.hora = hora;
    this.doctor = doctor;
    this.paciente = paciente;
  }
  getCita() {
    return `-${this.fecha}
-${this.hora}
-${this.doctor}
-${this.paciente}`;
  }
}
