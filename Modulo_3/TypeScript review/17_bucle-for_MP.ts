// bucle-for.ts — Control de vuelos

// Tabla de vuelos del día
console.log("=== Vuelos del día ===");
for (let i = 1; i <= 5; i++) {
  console.log(`Vuelo #${i}: ${["AM215", "VY3201", "DL478", "UA902", "IB6250"][i - 1]}`);
}

// Recorrer puertas de embarque
const puertas: string[] = ["A01", "A02", "B15", "B42", "C07", "C12"];
for (let i = 0; i < puertas.length; i++) {
  const estado = i < 4 ? "Ocupada" : "Libre";
  console.log(`Puerta ${puertas[i]}: ${estado}`);
}

// For hacia atrás — despegues en orden inverso
console.log("\nDespegues pendientes (orden inverso):");
for (let i = puertas.length - 1; i >= 0; i--) {
  console.log(`  Puerta ${puertas[i]}`);
}

// Función tipada — tabla de altitudes
function mostrarAltitudesFase(fase: string, altitudes: number[]): void {
  console.log(`\n--- Fase: ${fase} ---`);
  for (let i = 0; i < altitudes.length; i++) {
    console.log(`  Punto ${i + 1}: ${altitudes[i]} pies`);
  }
}

mostrarAltitudesFase("Ascenso", [5000, 15000, 25000, 35000]);
mostrarAltitudesFase("Descenso", [35000, 20000, 10000, 3000]);
