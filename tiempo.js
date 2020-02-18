class Tiempo {
    /**
     * 
     * @param {number} hora 
     * @param {number} minutos 
     * @param {string} periodo 
     */
  constructor(hora, minutos, periodo) {
    this.hora = hora;
    this.minutos = minutos;
    this.periodo = periodo;
  }
  getFormato12() {}
  getFormato24() {}
}
