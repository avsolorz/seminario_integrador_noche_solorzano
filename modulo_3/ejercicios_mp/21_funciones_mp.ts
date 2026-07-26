// Concepto puro
function sumarAsistentes(a: number, b: number): number {
  return a + b;
}

function saludarOrganizador(nombre: string): string {
  return `Hola, ${nombre}`;
}

// TypeScript verifica el argumento Y el retorno
console.log(sumarAsistentes(3, 4));        // 7
console.log(saludarOrganizador("Sofía")); // Hola, Sofía

// Error de compilación — a propósito (descoméntalo para verlo):
// sumarAsistentes("3", 4);  // Argument of type 'string' is not assignable to 'number'

function calcularDescuentoEntrada(precio: number, porcentaje: number): number {
  const descuento = precio * (porcentaje / 100);
  return Number((precio - descuento).toFixed(2));
}

function resumenEntrada(tipoEntrada: string, precio: number, descuento: number): string {
  const final = calcularDescuentoEntrada(precio, descuento);
  return `${tipoEntrada}: $${precio} → $${final} (${descuento}% off)`;
}

console.log(resumenEntrada("VIP", 120, 15));      // VIP: $120 → $102 (15% off)
console.log(resumenEntrada("General", 350, 20));  // General: $350 → $280 (20% off)
console.log(resumenEntrada("Estudiante", 45, 0));  // Estudiante: $45 → $45 (0% off)
