// Concepto puro
interface Organizador {
  readonly id: number;      // no se puede cambiar después de crear el objeto
  nombre: string;           // obligatoria
  email: string;            // obligatoria
  avatar?: string;          // opcional: puede estar o no
}

const o: Organizador = { id: 1, nombre: "Ana", email: "ana@mail.com" };

// o.id = 99; // ERROR: no se puede asignar a 'id' porque es de solo lectura

// La propiedad opcional puede omitirse sin error:
const o2: Organizador = { id: 2, nombre: "Luis", email: "luis@mail.com", avatar: "avatar.png" };

interface Entrada {
  readonly sku: string;
  nombre: string;
  precio: number;
  descripcion?: string;   // texto largo, no siempre presente
  disponible: boolean;
}

function mostrarEntrada(e: Entrada): void {
  const desc = e.descripcion ? ` — ${e.descripcion}` : "";
  const stock = e.disponible ? "Disponible" : "Agotada";
  console.log(`[${e.sku}] ${e.nombre} $${e.precio}${desc} (${stock})`);
}

const vip: Entrada = {
  sku: "ENT-001",
  nombre: "Entrada VIP",
  precio: 1299,
  descripcion: "Acceso a zona VIP y meet & greet",
  disponible: true,
};

const general: Entrada = {
  sku: "ENT-042",
  nombre: "Entrada General",
  precio: 25,
  disponible: false,
};

mostrarEntrada(vip);     // [ENT-001] Entrada VIP $1299 — Acceso a zona VIP y meet & greet (Disponible)
mostrarEntrada(general); // [ENT-042] Entrada General $25 (Agotada)


interface Personal {
  readonly sku: string;
  nombre: string;
  apellido: string;
  cargo: string;
  ubicacion: string;
}

function mostrarPersonal(p: Personal): void {
  const cargo = p.cargo ? ` — ${p.cargo}` : "";
  const ubicacion = p.ubicacion ? ` — ${p.ubicacion}` : "";
  console.log(`[${p.sku}] ${p.nombre} ${cargo} (${ubicacion})`);
}
