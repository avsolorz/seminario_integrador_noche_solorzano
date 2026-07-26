const precioEntradas: number[] = [100, 250, 80, 500];

const preciosIva: number[] = precioEntradas.map((p) =>
    Number((p * 1.19).toFixed(2))
);

console.log(precioEntradas);

preciosIva.forEach((precio) =>
    console.log(`Precio con IVA: ${precio}`)
);
