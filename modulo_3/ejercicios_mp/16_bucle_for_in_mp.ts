// Concepto puro
const precioPorTipoEntrada: Record<string, number> = {
  VIP: 150,
  GENERAL: 50,
  ESTUDIANTE: 30,
};

for (const tipo in precioPorTipoEntrada) {
  console.log(`${tipo} → $${precioPorTipoEntrada[tipo]}`);
}
// VIP → $150, GENERAL → $50, ESTUDIANTE → $30

const configuracionEvento = {
  lugar: "Auditorio Central",
  capacidad: 300,
  requiereRegistro: true,
  presupuestoMax: 20000,
};

console.log("=== Configuración activa ===");
for (const clave in configuracionEvento) {
  const valor = configuracionEvento[clave as keyof typeof configuracionEvento];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}
