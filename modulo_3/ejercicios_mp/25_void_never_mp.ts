// Concepto puro

// void — no hay valor de retorno significativo
function imprimirDetalleEvento(texto: string): void {
  console.log(texto);
  // No hay return, o hay un "return;" vacío
}

// never — la función nunca retorna
function lanzarErrorEvento(mensaje: string): never {
  throw new Error(mensaje);
  // TypeScript sabe que el código tras throw es inalcanzable
}

function monitorEventoContinuo(): never {
  while (true) {
    // proceso eterno de monitoreo del evento en vivo, por ejemplo
  }
}

// Inferencia — TypeScript deduce "number"
function calcularCostoTotal(precio: number, cantidad: number) {
  return precio * cantidad; // tipo inferido: number
}

// Pero el retorno explícito actúa de contrato:
function calcularPrecioPorPersona(presupuesto: number, asistentes: number): number {
  if (asistentes === 0) lanzarErrorEvento("No puede haber cero asistentes"); // never encaja en cualquier tipo
  return presupuesto / asistentes;
}
