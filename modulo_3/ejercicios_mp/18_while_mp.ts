// while — comprueba la condición ANTES de cada vuelta
let invitadosPorTrasladar = 1024;       // invitados por trasladar en buses
let bus = 0;

while (invitadosPorTrasladar > 0) {
  const cupo = invitadosPorTrasladar > 256 ? 256 : invitadosPorTrasladar;
  bus++;
  invitadosPorTrasladar -= cupo;
  console.log(`Bus ${bus}: ${cupo} invitados (quedan ${invitadosPorTrasladar})`);
}

// do-while — ejecuta AL MENOS UNA VEZ, ideal para reintentos
let intentos = 0;
let proveedorConfirmado = false;

do {
  intentos++;
  console.log(`Intento de contacto con el proveedor #${intentos}...`);
  if (intentos === 3) proveedorConfirmado = true;  // simula éxito al 3er intento
} while (!proveedorConfirmado && intentos < 5);

console.log(proveedorConfirmado ? `Confirmado en ${intentos} intentos` : "Falló");

const confirmacionesAsistentes: number[] = [64, 128, -1, 256, 1024, -1, 32];
//                                                ↑              ↑   canceladas (negativas)

// continue: ignora las canceladas pero sigue procesando
console.log("=== con continue ===");
for (const c of confirmacionesAsistentes) {
  if (c < 0) {
    console.log("Confirmación cancelada, se ignora");
    continue;  // salta al siguiente
  }
  console.log(`Procesando ${c} invitados`);
}
