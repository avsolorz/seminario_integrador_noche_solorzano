console.log("Condicional if simple");

// Con boolean
const asistentes: number = 120;

if (asistentes >= 100) {
  console.log("El evento requiere personal de seguridad adicional");
} else {
  console.log("No se necesita seguridad adicional");
}

console.log("Condicional if multiple");

// Tipo correcto en TypeScript
type TipoEntrada = "VIP" | "General" | "Prensa";

const tipoEntrada: TipoEntrada = "VIP";

let eventoInternacional: boolean = true;
let costoLogistica: number = 0;

if (tipoEntrada === "VIP") {
  console.log("Asistente VIP");

  if (eventoInternacional) {
    costoLogistica = 10;
    console.log("Traslado internacional con descuento VIP: $", costoLogistica);
  } else {
    costoLogistica = 5;
    console.log("Traslado nacional VIP: $", costoLogistica);
  }

} else if (tipoEntrada === "Prensa") {
  console.log("Puede acceder a la sala de prensa");
  costoLogistica = 20;

} else {
  console.log("Solo acceso general");
  costoLogistica = 30;
}

console.log("Condicional If Anidado");

// Ejemplo adicional de anidado
const capacidadSalon: number = 250;
const tienePermisoOrganizador: boolean = true;

if (capacidadSalon >= 100) {
  console.log("Es un evento grande");

  if (tienePermisoOrganizador) {
    console.log("Puede acceder al panel de administración");
  } else {
    console.log("No tiene permisos suficientes");
  }

} else {
  console.log("Es un evento pequeño, no requiere panel avanzado");
}
