class Tiempo {
  /**
   *
   * @param {number} hora
   * @param {number} minutos
   * @param {string} periodo
   */
  constructor() {
    this.hora = new Date();
    this.minutos = new Date();
  }
  getFormato12() {
    let periodo 
    if (this.hora.getHours() < 12) {
      periodo = "AM";
    } else {
      periodo = "PM";
    }
    let Hora = this.hora.getHours() % 12;
    if (Hora == 0) {
      Hora = 12;
    }
    return `${Hora}:${this.minutos.getMinutes()} ${periodo}`
  }
  getFormato24() {
    return `${this.hora.getHours()}:${this.minutos.getMinutes()}`;
  }
}
