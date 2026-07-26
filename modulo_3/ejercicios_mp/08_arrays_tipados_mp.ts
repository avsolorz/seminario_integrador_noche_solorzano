// arrays.ts

const organizadores:  string[]  = ["Ana", "Luis", "Marta"];
const capacidades:    number[]  = [80, 150, 300];
const confirmados:    boolean[] = [true, false, true];

console.log(organizadores);
console.log(organizadores[0]);        // "Ana"
console.log(organizadores.length);    // 3

// Los métodos de array funcionan igual que en JS
organizadores.push("Carlos");
console.log(organizadores);

const mayusculas = organizadores.map(o => o.toUpperCase());
console.log(mayusculas);

const eventosGrandes = capacidades.filter(c => c >= 100);
console.log(eventosGrandes);

// TypeScript avisa si añades el tipo incorrecto
// organizadores.push(42);  // ❌ Error: 'number' no es 'string'
