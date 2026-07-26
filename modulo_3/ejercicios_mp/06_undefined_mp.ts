// null-undefined.ts

// En JS esto no da error, en TS sí (modo estricto)
// let organizador: string = null;    // ❌ Error

// Para permitir null hay que declararlo explícitamente
let organizador: string | null = null;   // ✅ puede ser string o null

organizador = "Ana García";
console.log(organizador);  // "Ana García"
organizador = null;
console.log(organizador);  // null

// undefined — variable declarada pero sin valor
let lugar: string | undefined;
console.log(lugar);  // undefined

lugar = "Auditorio Central";
console.log(lugar);  // "Auditorio Central"
