// Concepto puro

// Tipo de función nombrado
type Transformador = (x: number) => number;
type Predicado     = (x: number) => boolean;

// Función que RECIBE una función (orden superior)
function aplicar(n: number, fn: Transformador): number {
  return fn(n);
}

// Función que DEVUELVE una función
function factorDe(factor: number): Transformador {
  return (x) => x * factor;
}

// Uso
const triple = factorDe(3);
const doble: Transformador = (x) => x * 2;

console.log(aplicar(5, triple));        // 15
console.log(aplicar(5, doble));         // 10
console.log(aplicar(5, (x) => x + 10)); // 15 (lambda inline)

// Filtrar con un predicado tipado
function filtrar(nums: number[], condicion: Predicado): number[] {
  return nums.filter(condicion);
}

const asistentesPorSala = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(filtrar(asistentesPorSala, (n) => n % 2 === 0)); // [2, 4, 6, 8]
console.log(filtrar(asistentesPorSala, (n) => n > 5));       // [6, 7, 8]


type Evento = { id: number; presupuesto: number; organizador: string };
type ProcesadorEvento = (evento: Evento) => Evento;

// Funciones que transforman un evento
const aplicarIVA: ProcesadorEvento = (e) => ({
  ...e,
  presupuesto: Number((e.presupuesto * 1.19).toFixed(2)),
});

const aplicarDescuentoVIP = (descuento: number): ProcesadorEvento =>
  (e) => ({ ...e, presupuesto: Number((e.presupuesto * (1 - descuento)).toFixed(2)) });

// Pipeline: aplica una lista de procesadores en orden
function procesarEvento(evento: Evento, pasos: ProcesadorEvento[]): Evento {
  return pasos.reduce((e, fn) => fn(e), evento);
}

const evento: Evento = { id: 101, presupuesto: 100, organizador: "Ana" };

const resultado = procesarEvento(evento, [
  aplicarDescuentoVIP(0.10),  // 10% descuento VIP → $90
  aplicarIVA,                 // + 19% IVA         → $107.10
]);

console.log(resultado);
// { id: 101, presupuesto: 107.1, organizador: 'Ana' }
