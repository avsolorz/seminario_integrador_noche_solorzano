type EstadoProveedor = "disponible" | "demorado" | "cancelado";

interface Proveedor {
  nombre: string;
  estado: EstadoProveedor;
  tiempoRespuestaMin: number;
}

const proveedores: Proveedor[] = [
  { nombre: "catering-01", estado: "disponible", tiempoRespuestaMin: 25 },
  { nombre: "sonido-02",   estado: "demorado",   tiempoRespuestaMin: 320 },
  { nombre: "seguridad-01",estado: "cancelado",  tiempoRespuestaMin: 0 },
  { nombre: "decoracion",  estado: "disponible", tiempoRespuestaMin: 8 },
];

console.log("=== Diagnóstico ===");
let cancelados = 0;

for (const p of proveedores) {
  if (p.estado === "cancelado") cancelados++;

  // switch para traducir el estado a un ícono
  let icono: string;
  switch (p.estado) {
    case "disponible": icono = "🟢"; break;
    case "demorado":   icono = "🟡"; break;
    case "cancelado":  icono = "🔴"; break;
    default:           icono = "⚪";
  }

  // if anidado para matizar el diagnóstico
  let diagnostico: string;
  if (p.estado === "disponible") {
    if (p.tiempoRespuestaMin < 50) {
      diagnostico = `${icono} ${p.nombre}: óptimo (${p.tiempoRespuestaMin}min)`;
    } else {
      diagnostico = `${icono} ${p.nombre}: aceptable (${p.tiempoRespuestaMin}min)`;
    }
  } else {
    diagnostico = `${icono} ${p.nombre}: requiere atención (${p.estado})`;
  }

  console.log(diagnostico);
}

// while para alertar mientras haya proveedores cancelados (simulado)
let alerta = cancelados;
while (alerta > 0) {
  console.log(`🚨 Quedan ${alerta} proveedor(es) cancelado(s) — notificando...`);
  alerta--;
}
console.log(`Resumen: ${cancelados}/${proveedores.length} cancelados`);
