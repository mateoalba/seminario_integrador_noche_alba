// for-of.ts — Control de vuelos

const vuelosPendientes: string[] = ["AM215", "VY3201", "DL478", "UA902"];
const distancias: number[] = [9532, 1200, 8700, 3200, 5600]; // km

console.log("=== Vuelos pendientes ===");
for (const vuelo of vuelosPendientes) {
  console.log(`Preparando vuelo ${vuelo}...`);
}

// Calcular distancia total
let distanciaTotal: number = 0;
for (const d of distancias) {
  distanciaTotal += d;
}
console.log(`\nDistancia total de rutas: ${distanciaTotal} km`);

// Con índice usando entries()
console.log("\n=== Vuelos con orden ===");
for (const [indice, vuelo] of vuelosPendientes.entries()) {
  console.log(`${indice + 1}. Vuelo ${vuelo}`);
}
