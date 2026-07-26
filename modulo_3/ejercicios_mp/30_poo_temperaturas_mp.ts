class Presupuesto {
  valorDolares: number;
  valorPesos : number;

  constructor(dolares: number, pesos: number) {
    this.valorDolares = dolares;
    this.valorPesos = pesos
  }

  aPesos(): number {
    return this.valorDolares * 9 / 5 + 32;
  }

  aEuros(): number {
    return this.valorDolares + 273.15;
  }

  aDolares(): number {
    return this.valorPesos - 32 / 1.8
  }

  describir(): string {
    return (
      `${this.valorDolares} USD = ` +
      `${this.aPesos()} ARS = ` +
      `${this.aEuros()} EUR` +
      `${this.aDolares()} USD = `
    );
  }
}

const presupuestoAlto = new Presupuesto(100,0);
const presupuestoBajo = new Presupuesto(0, 0);

console.log(presupuestoAlto.describir());     // 100 USD = 212 ARS = 373.15 EUR
console.log(presupuestoBajo.describir()); // 0 USD = 32 ARS = 273.15 EUR
console.log(`Alto: ${presupuestoAlto.aPesos()} ARS, ${presupuestoAlto.aEuros()} EUR`);
console.log(`Bajo: ${presupuestoBajo.aPesos()} ARS, ${presupuestoBajo.aEuros()} EUR`);
