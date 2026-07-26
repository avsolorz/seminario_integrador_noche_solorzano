// Concepto puro
type ID = string | number;             // unión de primitivos
type Nombre = string;                  // alias de primitivo (documenta intención)
type Coordenadas = [number, number];   // alias de tupla

// Alias de objeto
type Ubicacion = {
  x: number;
  y: number;
};

const origen: Ubicacion = { x: 0, y: 0 };
const id: ID = 42;          // válido
const id2: ID = "evt-001";  // también válido

type IncidenciaID = string | number;
type Prioridad = "baja" | "media" | "alta" | "critica";

type Incidencia = {
  id: IncidenciaID;
  titulo: string;
  prioridad: Prioridad;
  resuelta: boolean;
};

function imprimirIncidencia(i: Incidencia): void {
  const estrella = i.prioridad === "critica" ? " ⚠️" : "";
  console.log(`[${i.id}] ${i.titulo} — ${i.prioridad}${estrella}`);
}

const i1: Incidencia = { id: "INC-001", titulo: "Falta de sillas",     prioridad: "critica", resuelta: false };
const i2: Incidencia = { id: 42,        titulo: "Ajuste de iluminación", prioridad: "baja",    resuelta: true  };

imprimirIncidencia(i1); // [INC-001] Falta de sillas — critica ⚠️
imprimirIncidencia(i2); // [42] Ajuste de iluminación — baja
