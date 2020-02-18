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
    let periodo = ["AM", "PM"];
    if (this.hora.getHours() < 12) {
      periodo = [0];
    } else {
      periodo = [1];
    }
    Hora = this.hora.getHours() % 12;
    if (Hora == 0) {
      Hora = 12;
    }
  }
  getFormato24() {
    return `${this.hora.getHours()}:${this.minutos.getMinutes()}`;
  }
}

let h = new Tiempo();
console.log(h.getFormato24());
