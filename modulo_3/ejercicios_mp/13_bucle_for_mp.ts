// bucle-for.ts

// For clásico
for (let i = 1; i <= 5; i++) {
  console.log(`Iteración ${i}`);
}

// Recorrer un array por índice
const lugares: string[] = ["Salón Norte", "Auditorio Central", "Parque Central", "Hotel Plaza"];

for (let i = 0; i < lugares.length; i++) {
  console.log(`${i + 1}. ${lugares[i]}`);
}

// For hacia atrás
for (let i = lugares.length - 1; i >= 0; i--) {
  console.log(lugares[i]);
}

// Tabla de costos por cantidad de invitados, tipada
function tablaCostoPorInvitados(precioPorPersona: number): void {
  console.log(`\n--- Costo por invitado: $${precioPorPersona} ---`);
  for (let i = 1; i <= 10; i++) {
    const resultado: number = precioPorPersona * i;
    console.log(`  ${precioPorPersona} x ${i.toString().padStart(2)} invitados = ${resultado.toString().padStart(3)}`);
  }
}

tablaCostoPorInvitados(7);
