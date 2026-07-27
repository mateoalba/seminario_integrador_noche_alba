// mini-ejercicio-temps.ts — Control de vuelos (altitudes)

const altitudes: number[] = [0, 5000, 15000, 25000, 35000, 35000, 25000, 10000, 0];

let maxAltitud = altitudes[0];
let suma = 0;

for (const a of altitudes) {
  if (a > maxAltitud) maxAltitud = a;
  suma += a;
}

const promedio = suma / altitudes.length;
console.log(`Altitud máxima: ${maxAltitud} pies`);
console.log(`Altitud promedio: ${promedio.toFixed(0)} pies`);
console.log(`Puntos de medición: ${altitudes.length}`);

// Temperaturas en distintas altitudes
const temperaturas: number[] = [25, 10, -5, -25, -56, -56, -25, -5, 25];

console.log("\n=== Perfil térmico del vuelo ===");
for (let i = 0; i < altitudes.length; i++) {
  console.log(`  ${altitudes[i].toString().padStart(6)} pies: ${temperaturas[i].toString().padStart(4)}°C`);
}
