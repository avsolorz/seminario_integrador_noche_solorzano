const confirmacionesAsistentes2: number[] = [64, 128, -1, 256, 1024, -1, 32];
//                                                 ↑              ↑   canceladas (negativas)

// continue: ignora las canceladas pero sigue procesando
console.log("=== con continue ===");
for (const c of confirmacionesAsistentes2) {
  if (c < 0) {
    console.log("Confirmación cancelada, se ignora");
    continue;  // salta al siguiente
  }
  console.log(`Procesando ${c} invitados`);
}

// break: se detiene al primer error crítico
console.log("=== con break ===");
for (const c of confirmacionesAsistentes2) {
  if (c < 0) {
    console.log("Error crítico — deteniendo");
    break;  // sale del bucle
  }
  console.log(`Procesando ${c} invitados`);
}
