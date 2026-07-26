// ternario.ts

const capacidad: number = 120;

// Forma larga
let estado: string;
if (capacidad >= 100) {
  estado = "Requiere personal extra";
} else {
  estado = "Personal estándar";
}

// Forma corta con ternario
const estado2: string = capacidad >= 100 ? "Requiere personal extra" : "Personal estándar";

console.log(estado);   // Requiere personal extra
console.log(estado2);  // Requiere personal extra

// Muy útil dentro de template literals
const presupuesto: number = 7500;
const nivel = presupuesto >= 5000 ? "Premium" : "Estándar";
console.log(`Presupuesto: ${presupuesto} — ${nivel}`);

// No anidar ternarios — difícil de leer
// ✅ Mejor usar if/else para tres o más casos
const clasificacion =
  presupuesto >= 20000 ? "Evento Elite" :
  presupuesto >= 10000 ? "Evento Premium" :
  presupuesto >= 5000  ? "Evento Estándar" : "Evento Básico";

console.log(clasificacion);  // Evento Estándar
