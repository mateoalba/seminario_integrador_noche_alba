// forEach.ts — Control de vuelos

const numerosVuelo: number[] = [215, 3201, 478, 902, 6250];

// forEach: mostrar cada vuelo
numerosVuelo.forEach((n) => console.log(`Vuelo VL-${n}`));

// map: crear lista de códigos formateados
const codigosFormateados: string[] = numerosVuelo.map((n) => `AM${n}`);
console.log(codigosFormateados);

/*Ejemplo aplicado — calcular tarifas con impuestos*/
const tarifasBase: number[] = [4500, 8200, 12500, 3100, 6700]; // MXN
const tarifasConImpuesto: number[] = tarifasBase.map((t) => Number((t * 1.16).toFixed(2)));

console.log("\n=== Tarifas con IVA (16%) ===");
tarifasConImpuesto.forEach((t, i) => {
  console.log(`Vuelo ${i + 1}: $${t.toLocaleString("es-MX")} MXN`);
});
