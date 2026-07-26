"use strict";
// for-of.ts
const nombres = ["Ana", "Luis", "Marta", "Carlos"];
const precios = [100, 250, 75, 320, 50];
// TypeScript sabe que 'nombre' es string
for (const nombre of nombres) {
    console.log(`Hola, ${nombre}!`);
    // nombre.toUpperCase() ✅ — TypeScript sabe que es string
}
// TypeScript sabe que 'precio' es number
let total = 0;
for (const precio of precios) {
    total += precio;
    // precio.toFixed(2) ✅ — TypeScript sabe que es number
}
console.log(`Total: ${total}€`);
// Con índice usando entries()
for (const [indice, nombre] of nombres.entries()) {
    console.log(`${indice + 1}. ${nombre}`);
}
