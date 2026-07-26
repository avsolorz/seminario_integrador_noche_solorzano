console.log("Condicional if simple");

// Con boolean
const edad: number = 19;

if (edad >= 18) {
  console.log("ES mayor de edad");
} else {
  console.log("NO puede manejar");
}

console.log("Condicional if multiple");

// Tipo correcto en TypeScript
type TipoCliente = "VIP" | "Regular" | "Editor";

const tipoCliente: TipoCliente = "VIP";

let destinoInternacional: boolean = true;
let costoEnvio: number = 0;

if (tipoCliente === "VIP") {
  console.log("Cliente VIP");

  if (destinoInternacional) {
    costoEnvio = 10;
    console.log("Envío internacional con descuento VIP: $", costoEnvio);
  } else {
    costoEnvio = 5;
    console.log("Envío nacional VIP: $", costoEnvio);
  }

} else if (tipoCliente === "Editor") {
  console.log("Puede editar contenido");
  costoEnvio = 20;

} else {
  console.log("Solo lectura");
  costoEnvio = 30;
}

console.log("Condicional If Anidado");

// Ejemplo adicional de anidado
const edadUsuario: number = 25;
const tienePermiso: boolean = true;

if (edadUsuario >= 18) {
  console.log("Es mayor de edad");

  if (tienePermiso) {
    console.log("Puede acceder al sistema");
  } else {
    console.log("No tiene permisos suficientes");
  }

} else {
  console.log("Es menor de edad, acceso denegado");
}