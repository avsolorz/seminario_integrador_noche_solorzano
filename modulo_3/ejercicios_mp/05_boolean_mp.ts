// tipos-boolean.ts
const presupuestoAprobado:    boolean = true;
const patrocinadorConfirmado: boolean = false;

console.log(presupuestoAprobado);
console.log(!presupuestoAprobado);                                    // false  (negación)
console.log(presupuestoAprobado && patrocinadorConfirmado);            // false  (ambos deben ser true)
console.log(presupuestoAprobado || patrocinadorConfirmado);            // true   (al menos uno es true)

// Los booleanos suelen venir de comparaciones
const asistentesConfirmados = 20;
const cumpleCapacidadMinima: boolean = asistentesConfirmados >= 18;
console.log(`¿Cumple la capacidad mínima? ${cumpleCapacidadMinima}`); // ¿Cumple la capacidad mínima? true
