var global;
export default class Fecha {
  /**
   *
   * @param {number} dia
   * @param {number} mes
   * @param {number} año
   */
  constructor(dia, mes, año) {
    this.fechas = new Date(año, mes - 1, dia);
    this.diasSemana = [
      "Domingo",
      "Lunes",
      "Martes",
      "Miercoles",
      "Jueves",
      "Viernes",
      "Sabado"
    ];
    this.años = [
      "Enero",
      "Febrero",
      "Marzo",
      "Abril",
      "Mayo",
      "Junio",
      "Julio",
      "Agosto",
      "Septiembre",
      "Octubre",
      "Noviembre",
      "Diciembre"
    ];
  }
  getAños() {
    let años;
    años = 2020 - this.fechas.getFullYear();
    global = años;
    return `${años}`;
  }
  getMeses() {
    let meses;
    meses = global * 12;
    global = meses;
    return `${meses}`;
  }
  getSemanas() {
    let semanas;
    semanas = global * 4;
    global = semanas;
    return `${semanas}`;
  }
  getDias() {
    let dias;
    dias = global * 7;
    global = dias;
    return `${dias}`;
  }
  getFecha() {
    let mesDelAño;
    mesDelAño = this.años[this.fechas.getMonth()];
    return `${this.fechas.getDate()}/${mesDelAño}/${this.fechas.getFullYear()}`;
  }
  getDiaFecha() {
    let diaDeSemana;
    diaDeSemana = this.diasSemana[this.fechas.getDay()];
    return `${diaDeSemana}`;
  }
}
