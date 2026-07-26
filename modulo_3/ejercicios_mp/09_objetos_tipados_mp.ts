// objetos.ts

// Declarar el tipo del objeto
const evento: { nombre: string; capacidad: number; activo: boolean } = {
  nombre:    "Conferencia Tech Summit",
  capacidad: 300,
  activo:    true
};

console.log(evento.nombre);
console.log(evento.capacidad);

// TypeScript avisa si falta una propiedad o tiene el tipo incorrecto
// const evento2: { nombre: string; capacidad: number } = {
//   nombre: "Feria de Empleo"
//   // ❌ Error: falta 'capacidad'
// };

// Propiedad opcional — se añade ? después del nombre
const entrada: { nombre: string; precio: number; descuento?: number } = {
  nombre:  "Entrada General",
  precio:  50
  // descuento es opcional, no hace falta incluirlo
};

console.log(entrada.descuento); // undefined — no se lanza error
