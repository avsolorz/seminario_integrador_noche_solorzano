// Concepto puro

// Opcional: el parámetro puede no llegarse a pasar
function crearEtiquetaEvento(texto: string, mayusculas?: boolean): string {
  // Dentro, mayusculas es boolean | undefined
  if (mayusculas) {
    return `[${texto.toUpperCase()}]`;
  }
  return `[${texto}]`;
}

console.log(crearEtiquetaEvento("info"));          // [info]
console.log(crearEtiquetaEvento("alerta", true));  // [ALERTA]

// Por defecto: si no se pasa, usa el valor indicado
function repetirAnuncio(texto: string, veces: number = 3): string {
  return texto.repeat(veces);
}

console.log(repetirAnuncio("ha"));     // hahaha  (usa el default 3)
console.log(repetirAnuncio("ha", 15)); // hahahahaha

type Nivel = "info" | "warn" | "error";

function log(
  mensaje: string,
  nivel: Nivel = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<Nivel, string> = {
    info:  "ℹ️  INFO ",
    warn:  "⚠️  WARN ",
    error: "❌ ERROR",
  };

  const hora = timestamp ? ` [${new Date().toISOString()}]` : "";
  return `${prefijos[nivel]}${hora}: ${mensaje}`;
}

console.log(log("Evento creado"));
// ℹ️  INFO : Evento creado

console.log(log("Presupuesto excedido", "warn"));
// ⚠️  WARN : Presupuesto excedido

console.log(log("Proveedor no responde", "error", true));
// ❌ ERROR [2026-06-23T...]: Proveedor no responde
