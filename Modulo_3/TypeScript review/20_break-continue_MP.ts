// break-continue.ts — Control de vuelos

// break — buscar primera pista disponible
console.log("=== Buscando pista disponible ===");
const pistas: string[] = ["09L-27R", "09R-27L", "09C-27C", "14L-32R"];

for (const pista of pistas) {
  const ocupada = pista === "09R-27L";
  if (ocupada) {
    console.log(`  Pista ${pista}: OCUPADA — buscando siguiente...`);
    continue;
  }
  console.log(`  Pista ${pista}: LIBRE ✓`);
}

// continue — solo mostrar vuelos internacionales
console.log("\n=== Solo vuelos internacionales ===");
const todosLosVuelos: Array<{ codigo: string; esInternacional: boolean }> = [
  { codigo: "AM215", esInternacional: true },
  { codigo: "VD301", esInternacional: false },
  { codigo: "DL478", esInternacional: true },
  { codigo: "VB120", esInternacional: false },
  { codigo: "UA902", esInternacional: true },
];

for (const v of todosLosVuelos) {
  if (!v.esInternacional) continue;
  console.log(`  ✈ Vuelo ${v.codigo} — internacional`);
}

// Saltar valores nulos en lista de alturas
console.log("\n=== Alturas de vuelo (sin nulos) ===");
const alturas: Array<number | null> = [35000, null, 28000, null, 41000, 12000];
let sumaAlturas: number = 0;
let count: number = 0;

for (const a of alturas) {
  if (a === null) continue;
  sumaAlturas += a;
  count++;
}
console.log(`Promedio de alturas: ${(sumaAlturas / count).toFixed(0)} pies`);
