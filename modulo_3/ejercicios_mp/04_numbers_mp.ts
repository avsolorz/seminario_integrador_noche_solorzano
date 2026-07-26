// tipos-number.ts
const entradasVendidas: number = 42;
const precioEntrada:    number = 3.14;
const saldoPendiente:   number = -100;
const presupuestoTotal: number = 1_000_000;  // el _ es solo visual, no cambia el valor
const promedioPorHora:  number = 10 / 3;

console.log(entradasVendidas);
console.log(precioEntrada);
console.log(presupuestoTotal);
console.log(promedioPorHora);                   // 3.3333...
console.log(promedioPorHora.toFixed(2));        // "3.33"

// Operaciones
console.log(10 + 3);   // 13
console.log(10 - 3);   // 7
console.log(10 * 3);   // 30
console.log(10 / 3);   // 3.333...
console.log(10 % 3);   // 1  (resto de la división)
console.log(2 ** 10);  // 1024  (potencia)
