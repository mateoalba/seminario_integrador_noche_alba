// mini-ejercicio-break-continue.ts — Control de vuelos

const codigos: string[] = ["AM215", "VY3201", "DL478", "UA902", "IB6250", "VB120"];

console.log("=== Vuelos cancelados (saltar) ===");
const cancelados = ["VY3201", "UA902"];
for (const c of codigos) {
  if (cancelados.includes(c)) continue;
  console.log(`  ✈ ${c}`);
}

console.log("\n=== Detener al primer vuelo internacional a Europa ===");
const destinos = ["JFK", "MAD", "LAX", "CDG", "ORD"];
for (const d of destinos) {
  if (d === "MAD") {
    console.log(`  Encontrado destino europeo: ${d}`);
    break;
  }
  console.log(`  ${d} — no es Europa`);
}

// Velocidades de múltiples vuelos
console.log("\n=== Vuelos con velocidad > 800 km/h ===");
const velocidades: Array<number | null> = [850, 780, null, 920, null, 810, 650];
for (const v of velocidades) {
  if (v === null) continue;
  if (v <= 800) continue;
  console.log(`  ✈ ${v} km/h`);
}
