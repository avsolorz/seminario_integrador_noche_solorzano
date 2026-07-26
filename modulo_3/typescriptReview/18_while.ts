// while — comprueba la condición ANTES de cada vuelta
let buffer = 1024;       // bytes por enviar
let paquete = 0;

while (buffer > 0) {
  const tam = buffer > 256 ? 256 : buffer;
  paquete++;
  buffer -= tam;
  console.log(`Paquete ${paquete}: ${tam} bytes (quedan ${buffer})`);
}

// do-while — ejecuta AL MENOS UNA VEZ, ideal para reintentos
let intentos = 0;
let conectado = false;

do {
  intentos++;
  console.log(`Intento de conexión #${intentos}...`);
  if (intentos === 3) conectado = true;  // simula éxito al 3er intento
} while (!conectado && intentos < 5);

console.log(conectado ? `Conectado en ${intentos} intentos` : "Falló");

const paquetes: number[] = [64, 128, -1, 256, 1024, -1, 32];
//                                  ↑              ↑   corruptos (negativos)

// continue: ignora los corruptos pero sigue procesando
console.log("=== con continue ===");
for (const p of paquetes) {
  if (p < 0) {
    console.log("Paquete corrupto ignorado");
    continue;  // salta al siguiente
  }
  console.log(`Procesando ${p} bytes`);
}
