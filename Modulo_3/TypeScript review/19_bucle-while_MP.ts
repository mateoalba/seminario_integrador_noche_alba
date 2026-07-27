// bucle-while.ts — Control de vuelos

// Simular cuenta regresiva para despegue
let countdown: number = 10;
console.log("=== Cuenta regresiva para despegue ===");
while (countdown > 0) {
  console.log(`${countdown}...`);
  countdown--;
}
console.log("¡DESPEGUE!\n");

// do...while — asignar puerta al azar (al menos una vez)
let intento: number = 0;
let puertaAsignada: string;
do {
  intento++;
  const puertas = ["A01", "A02", "B15", "B42", "C07"];
  puertaAsignada = puertas[Math.floor(Math.random() * puertas.length)];
  console.log(`Intento ${intento}: Probando puerta ${puertaAsignada}`);
} while (puertaAsignada === "B42"); // simula que B42 está ocupada

console.log(`Puerta asignada: ${puertaAsignada}\n`);

// Mientras haya pasajeros en la cola de embarque
function simularEmbarque(): void {
  let pasajerosEnCola: number = 10;
  let embarcados: number = 0;

  while (pasajerosEnCola > 0) {
    pasajerosEnCola--;
    embarcados++;
    if (embarcados % 3 === 0) {
      console.log(`Embarcados: ${embarcados} | Quedan: ${pasajerosEnCola}`);
    }
  }
  console.log(`Embarque completado: ${embarcados} pasajeros\n`);
}

simularEmbarque();
