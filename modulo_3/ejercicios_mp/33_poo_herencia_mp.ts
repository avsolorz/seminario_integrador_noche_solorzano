// Concepto puro
class Participante {
  constructor(public nombre: string) {}

  presentarse(): string {
    return `${this.nombre} se une al evento.`;
  }
}

class Ponente extends Participante {
  constructor(nombre: string, public tema: string) {
    super(nombre); // llama al constructor del padre
  }

  // override sobrescribe el método del padre
  override presentarse(): string {
    return `${this.nombre} presenta: ${this.tema}`;
  }

  exponer(recurso: string): string {
    return `${this.nombre} utiliza el ${recurso}.`;
  }
}

const p = new Participante("Asistente genérico");
const pon = new Ponente("Sofía", "TypeScript avanzado");

console.log(p.presentarse());          // Asistente genérico se une al evento.
console.log(pon.presentarse());        // Sofía presenta: TypeScript avanzado
console.log(pon.exponer("proyector")); // Sofía utiliza el proyector.
console.log(pon.tema);                 // TypeScript avanzado

class PersonalEvento {
  constructor(
    public nombre: string,
    protected salarioBase: number
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return `${this.nombre} — Salario: $${this.calcularSalario()}`;
  }
}

class Coordinador extends PersonalEvento {
  constructor(
    nombre: string,
    salarioBase: number,
    private bonificacion: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonificacion;
  }
}

class Promotor extends PersonalEvento {
  constructor(
    nombre: string,
    salarioBase: number,
    private comision: number,
    private entradasVendidas: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.comision * this.entradasVendidas;
  }
}

const staff = new PersonalEvento("Carlos", 2000);
const coord = new Coordinador("Laura", 3000, 1500);
const prom = new Promotor("Pedro", 1500, 50, 30);

console.log(staff.infoLaboral()); // Carlos — Salario: $2000
console.log(coord.infoLaboral()); // Laura — Salario: $4500
console.log(prom.infoLaboral());  // Pedro — Salario: $3000
