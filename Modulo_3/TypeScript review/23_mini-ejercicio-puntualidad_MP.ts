// mini-ejercicio-notas.ts — Control de vuelos (puntualidad)

const puntualidad: Record<string, number> = {
  AM215:  95,
  VY3201: 78,
  DL478:  88,
  UA902:  62,
  IB6250: 91,
};

let aprobados = 0;

for (const vuelo in puntualidad) {
  const score = puntualidad[vuelo as keyof typeof puntualidad];
  const estado = score >= 80 ? "✓" : "✗";
  console.log(`${vuelo}: ${score}% ${estado}`);
  if (score >= 80) aprobados++;
}

console.log(`\nVuelos puntuales (≥80%): ${aprobados}/${Object.keys(puntualidad).length}`);

// Tiempos de espera en puertas
const tiemperaEspera: Record<string, number> = {
  "A01": 5,
  "A02": 12,
  "B15": 3,
  "B42": 25,
  "C07": 8,
};

console.log("\n=== Tiempos de espera ===");
let sumaEspera = 0;
for (const puerta in tiemperaEspera) {
  const tiempo = tiemperaEspera[puerta as keyof typeof tiemperaEspera];
  sumaEspera += tiempo;
  const indicador = tiempo > 15 ? "⚠️" : "✓";
  console.log(`  Puerta ${puerta}: ${tiempo} min ${indicador}`);
}
console.log(`Promedio: ${(sumaEspera / Object.keys(tiemperaEspera).length).toFixed(1)} min`);
