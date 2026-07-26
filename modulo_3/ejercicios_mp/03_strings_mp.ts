// tipos-string.ts
const nombreEvento:  string = "Conferencia Tech Summit";
const saludo:        string = `Bienvenido a ${nombreEvento}`;
const vacia:         string = "";
const comillas:      string = 'También con comillas simples';

console.log(nombreEvento);
console.log(saludo);
console.log(`La cadena vacía tiene longitud: ${vacia.length}`);

// Métodos de string funcionan igual que en JS
console.log(nombreEvento.toUpperCase());      // CONFERENCIA TECH SUMMIT
console.log(nombreEvento.toLowerCase());      // conferencia tech summit
console.log(nombreEvento.includes("Tech"));   // true
console.log(nombreEvento.split(" "));         // ["Conferencia", "Tech", "Summit"]


