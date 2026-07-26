console.log("------------------------");
const calificacionesProveedores = { catering: 85, sonido: 70,decoracion: 95, seguridad: 60 }
let contador =0;
for (const valor in calificacionesProveedores){
    const valores = calificacionesProveedores[valor as keyof typeof calificacionesProveedores];
    if (valores >= 70){
        console.log( `Aprobados: ${valor}` );
        contador ++;
    }
}
console.log(contador);
