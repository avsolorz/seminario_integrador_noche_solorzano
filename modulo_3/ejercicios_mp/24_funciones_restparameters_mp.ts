// Concepto puro

// El rest parameter SIEMPRE es el último
function sumarPresupuestos(...montos: number[]): number {
  return montos.reduce((acc, n) => acc + n, 0);
}

console.log(sumarPresupuestos(1000, 2000, 3000));          // 6000
console.log(sumarPresupuestos(10000, 20000, 30000, 40000)); // 100000
console.log(sumarPresupuestos());                          // 0

// Combinado con parámetros normales
function construirItinerario(base: string, ...paradas: string[]): string {
  return [base, ...paradas].join(" → ");
}

console.log(construirItinerario("Registro", "Charla inaugural", "Almuerzo", "Cierre"));
// Registro → Charla inaugural → Almuerzo → Cierre


function registrarEvento(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? ` | ${detalles.join(" · ")}` : "";
  console.log(`[${timestamp}] ${tipo.toUpperCase()}${cuerpo}`);
}

registrarEvento("creacion");
// [10:05:01] CREACION

registrarEvento("confirmacion", "organizador: ana", "lugar: auditorio central");
// [10:05:02] CONFIRMACION | organizador: ana · lugar: auditorio central

registrarEvento("cancelacion", "motivo: clima", "reembolso: sí", "reintento: sí");
// [10:05:03] CANCELACION | motivo: clima · reembolso: sí · reintento: sí
