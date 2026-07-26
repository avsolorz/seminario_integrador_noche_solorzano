// Concepto puro
class Salon {
  private _capacidad: number;

  constructor(capacidad: number) {
    this._capacidad = capacidad;
  }

  get capacidad(): number {
    return this._capacidad;
  }

  set capacidad(valor: number) {
    if (valor <= 0) throw new Error("La capacidad debe ser positiva");
    this._capacidad = valor;
  }

  get costoAlquiler(): number {
    return this._capacidad * 15;
  }
}

const s = new Salon(100);
console.log(s.capacidad);              // 100  ← usa el getter
console.log(s.costoAlquiler.toFixed(2)); // 1500.00

s.capacidad = 200;                     // usa el setter
console.log(s.costoAlquiler.toFixed(2)); // 3000.00

// s.capacidad = -3;  // Error: La capacidad debe ser positiva
