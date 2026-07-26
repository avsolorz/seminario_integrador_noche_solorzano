// Concepto puro
class Evento {
  nombre: string;
  capacidad: number;
  confirmado: boolean;

  constructor(nombre: string, capacidad: number, confirmado: boolean) {
    this.nombre = nombre;
    this.capacidad = capacidad;
    this.confirmado = confirmado;
  }

  // Método: acción que puede realizar la instancia
  describir(): string {
    const estado = this.confirmado ? "confirmado" : "pendiente";
    return `${this.nombre} — ${this.capacidad} personas (${estado})`;
  }
}

const boda = new Evento("Boda de Marta", 120, true);
const feria = new Evento("Feria de Empleo", 450, false);

console.log(boda.describir());  // Boda de Marta — 120 personas (confirmado)
console.log(feria.describir()); // Feria de Empleo — 450 personas (pendiente)
