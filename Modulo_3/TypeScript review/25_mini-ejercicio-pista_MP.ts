// mini-ejercicio-dado.ts — Control de vuelos (simulación de pista)

let intentos = 0;
let pistaAsignada = 0;

do {
  pistaAsignada = Math.floor(Math.random() * 4) + 1; // pistas 1-4
  intentos++;
  console.log(`Intento ${intentos}: Probando pista ${pistaAsignada}`);
} while (pistaAsignada !== 3); // buscamos la pista 3

console.log(`Pista asignada: ${pistaAsignada} después de ${intentos} intentos\n`);

// Simular retraso aleatorio
let retraso = 0;
let totalRetraso = 0;
let vuelos = 0;

do {
  retraso = Math.floor(Math.random() * 45); // 0-44 min
  totalRetraso += retraso;
  vuelos++;
  if (retraso > 0) {
    console.log(`Vuelo ${vuelos}: +${retraso} min de retraso`);
  }
} while (totalRetraso < 120 && vuelos < 10);

console.log(`\nTotal: ${vuelos} vuelos procesados, ${totalRetraso} min acumulados`);
