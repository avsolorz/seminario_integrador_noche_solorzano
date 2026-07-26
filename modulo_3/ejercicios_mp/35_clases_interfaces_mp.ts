// Concepto puro
interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class Evento implements Serializable, Validable {
  constructor(
    public id: string,
    public actividades: string[],
    public presupuesto: number
  ) {}

  serializar(): string {
    return JSON.stringify({ id: this.id, actividades: this.actividades, presupuesto: this.presupuesto });
  }

  esValido(): boolean {
    return this.actividades.length > 0 && this.presupuesto > 0;
  }
}

const evento = new Evento("EVT-001", ["Charla inaugural", "Networking"], 1500);
console.log(evento.esValido());    // true
console.log(evento.serializar());
// {"id":"EVT-001","actividades":["Charla inaugural","Networking"],"presupuesto":1500}
