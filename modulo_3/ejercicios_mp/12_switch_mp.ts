// switch.ts

const diaEvento: number = 3;

switch (diaEvento) {
  case 1:
    console.log("Lunes");
    break;
  case 2:
    console.log("Martes");
    break;
  case 3:
    console.log("Miércoles");  // ← este se ejecuta
    break;
  case 4:
    console.log("Jueves");
    break;
  case 5:
    console.log("Viernes");
    break;
  case 6:
  case 7:
    console.log("Fin de semana");
    break;
  default:
    console.log("Día no válido");
}

// Switch con string
type EstadoEvento = "planificado" | "confirmado" | "finalizado" | "cancelado";

function mensajeEvento(estado: EstadoEvento): string {
  switch (estado) {
    case "planificado":
      return "El evento está siendo organizado";
    case "confirmado":
      return "El evento está confirmado y en marcha";
    case "finalizado":
      return "El evento ha finalizado";
    case "cancelado":
      return "El evento fue cancelado";
  }
}

// TypeScript sabe que los 4 casos son todos los posibles
// No necesita default — si añades un estado nuevo, exige manejarlo

console.log(mensajeEvento("confirmado"));  // El evento está confirmado y en marcha
console.log(mensajeEvento("finalizado"));  // El evento ha finalizado
