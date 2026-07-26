// tipo-any.ts

let detalleEvento: any = "presencial";
detalleEvento = 42;        // ✅ sin error
detalleEvento = true;      // ✅ sin error
detalleEvento = [1, 2, 3]; // ✅ sin error

// Parece útil pero es trampa: pierdes el autocompletado
// y los errores vuelven a aparecer en tiempo de ejecución
console.log(detalleEvento.metodoQueNoExiste()); // TypeScript no avisa, pero falla al ejecutar
