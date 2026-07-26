// for-of.ts

const organizadores: string[] = ["Ana", "Luis", "Marta", "Carlos"];
const presupuestos:  number[] = [100, 250, 75, 320, 50];

// TypeScript sabe que 'organizador' es string
for (const organizador of organizadores) {
  console.log(`Hola, ${organizador}!`);
  // organizador.toUpperCase() ✅ — TypeScript sabe que es string
}

// TypeScript sabe que 'presupuesto' es number
let total: number = 0;
for (const presupuesto of presupuestos) {
  total += presupuesto;
  // presupuesto.toFixed(2) ✅ — TypeScript sabe que es number
}
console.log(`Total: ${total}€`);

// Con índice usando entries()
for (const [indice, organizador] of organizadores.entries()) {
  console.log(`${indice + 1}. ${organizador}`);
}
