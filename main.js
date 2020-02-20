import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js";
import Doctor from "./doctor.js";

class Main {
  constructor() {
    this.hora = new Tiempo(8, 56, "pm");
    this.nombre = new Nombre("Edgar", "Gonzalez", "Montelongo");
    this.fecha = new Fecha(20, 2, 2019);
    this.paciente = new Paciente(3131911815);
    this.doctor = new Doctor("Neurocirujano", 3131369606, 87654321);
  }
  probarHora() {
    console.log(this.hora.getFormato12());
    console.log(this.hora.getFormato24());
  }
  probarNombre() {
    console.log(this.nombre.getApellidoNombre());
    console.log(this.nombre.getIniciales());
    console.log(this.nombre.getNombreCompleto());
  }
  probarFecha() {
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getFecha());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getDiaFecha());
  }
  probarPaciente() {
    console.log(this.paciente.getPerfil());
  }
  probarDoctor() {
    console.log(this.doctor.getId());
  }
}

let app = new Main();
app.probarHora();
app.probarNombre();
app.probarFecha();
app.probarPaciente();
app.probarDoctor();
