import Tiempo from "./tiempo.js";
import Nombre from "./nombre.js";
import Fecha from "./fecha.js";
import Paciente from "./paciente.js";
import Doctor from "./doctor.js";
import Cita from "./cita.js";

class Main {
  constructor() {
    this.hora = new Tiempo(8, 56, "pm");
    this.nombre = new Nombre("Edgar", "Gonzalez", "Montelongo");
    this.fecha = new Fecha(20, 2, 2019);
    this.paciente = new Paciente(
      new Nombre("Leo", "Leo", "Leo"),
      new Fecha(18, 2, 2004),
      3122291890
    );
    this.doctor = new Doctor(
      new Nombre("Doctor", "Simi", "Economico"),
      "Neurocirujano",
      3131369606,
      87654321
    );
    this.cita = new Cita(
      this.fecha.getFecha(),
      this.hora.getFormato12(),
      this.doctor.getId(),
      this.paciente.getPerfil()
    );
  }
  probarHora() {
    console.log(this.hora.getFormato12());
    console.log(this.hora.getFormato24());
  }
  probarNombre() {
    console.log("--------------------------------------");
    console.log(this.nombre.getApellidoNombre());
    console.log(this.nombre.getIniciales());
    console.log(this.nombre.getNombreCompleto());
  }
  probarFecha() {
    console.log("--------------------------------------");
    console.log(this.fecha.getAños());
    console.log(this.fecha.getMeses());
    console.log(this.fecha.getSemanas());
    console.log(this.fecha.getFecha());
    console.log(this.fecha.getDias());
    console.log(this.fecha.getDiaFecha());
  }
  probarPaciente() {
    console.log("--------------------------------------");
    console.log(this.paciente.getPerfil());
  }
  probarDoctor() {
    console.log("--------------------------------------");
    console.log(this.doctor.getId());
  }
  probarCita() {
    console.log("--------------------------------------");
    console.log(this.cita.getCita());
  }
}

let app = new Main();
app.probarHora();
app.probarNombre();
app.probarFecha();
app.probarPaciente();
app.probarDoctor();
app.probarCita();
