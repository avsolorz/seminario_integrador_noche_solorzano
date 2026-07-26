// Concepto puro

// Declaración tradicional
function capacidadDoble(n: number): number {
  return n * 2;
}

// Flecha equivalente — con cuerpo explícito
const capacidadDobleFlecha = (n: number): number => {
  return n * 2;
};

// Flecha con retorno implícito (una expresión, sin llaves)
const capacidadDobleCorta = (n: number): number => n * 2;

// Sin parámetros
const ahora = (): string => new Date().toLocaleTimeString();

// Un solo parámetro (paréntesis opcionales, pero recomendados en TS)
const triple = (n: number): number => n * 3;

console.log(capacidadDoble(5));        // 10
console.log(capacidadDobleFlecha(5));  // 10
console.log(capacidadDobleCorta(5));   // 10
console.log(triple(7));                // 21
console.log(ahora());                  // e.g. "10:34:22"

const trim          = (s: string): string => s.trim();
const aMinusculas    = (s: string): string => s.toLowerCase();
const capitalizar    = (s: string): string =>
  s.charAt(0).toUpperCase() + s.slice(1);
const quitarEspacios = (s: string): string => s.replace(/\s+/g, "_");

// Encadenar transformaciones manualmente
function normalizarOrganizador(nombre: string): string {
  return quitarEspacios(capitalizar(aMinusculas(trim(nombre))));
}

const organizadoresRegistrados = ["  ANA GARCÍA  ", " luis rodríguez", "PEDRO  LÓPEZ "];
organizadoresRegistrados.forEach((o) => console.log(normalizarOrganizador(o)));
// Ana_garcía
// Luis_rodríguez
// Pedro__lópez  (doble espacio interno → doble guión)
