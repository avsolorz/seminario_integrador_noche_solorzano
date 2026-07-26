const asistentesPorEvento = [180, 220, 150, 300, 190, 270];
let max = 0;
for (const asistentes of asistentesPorEvento) {
    if (asistentes>max){
        max=asistentes
    }
}
console.log(max);
