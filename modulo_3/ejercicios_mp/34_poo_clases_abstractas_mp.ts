// Concepto puro
abstract class EspacioEvento {
  abstract area(): number;       // sin implementación — las subclases DEBEN implementarlo
  abstract perimetro(): number;

  // Los métodos concretos SÍ tienen implementación
  describir(): string {
    return (
      `Área: ${this.area().toFixed(2)} | ` +
      `Perímetro: ${this.perimetro().toFixed(2)}`
    );
  }
}

class CarpaCircular extends EspacioEvento {
  constructor(private radio: number) {
    super();
  }

  override area(): number {
    return Math.PI * this.radio ** 2;
  }

  override perimetro(): number {
    return 2 * Math.PI * this.radio;
  }
}

class SalonRectangular extends EspacioEvento {
  constructor(private ancho: number, private alto: number) {
    super();
  }

  override area(): number {
    return this.ancho * this.alto;
  }

  override perimetro(): number {
    return 2 * (this.ancho + this.alto);
  }
}

// const e = new EspacioEvento(); // Error: Cannot create an instance of an abstract class.

const carpa = new CarpaCircular(5);
const salon = new SalonRectangular(4, 6);

console.log(carpa.describir()); // Área: 78.54 | Perímetro: 31.42
console.log(salon.describir()); // Área: 24.00 | Perímetro: 20.00
