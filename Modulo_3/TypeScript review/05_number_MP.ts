// numbers.ts — Control de vuelos

const altitud:       number = 35000;      // pies
const velocidad:     number = 850.5;      // km/h
const pasajeros:     number = 185;
const combustible:   number = 42_000;     // litros
const temperatura:   number = -56.5;      // °C en crucero
const distancia:     number = 9_532.8;    // km

console.log(`Altitud: ${altitud} ft`);
console.log(`Velocidad: ${velocidad} km/h`);
console.log(`Combustible: ${combustible}L`);
console.log(`Temperatura exterior: ${temperatura}°C`);
console.log(`Distancia al destino: ${distancia} km`);

// Operaciones
const distanciaMillas: number = distancia * 0.539957;
console.log(`Distancia en millas náuticas: ${distanciaMillas.toFixed(2)} NM`);

const tiempoEstimado: number = distancia / velocidad;
console.log(`Tiempo estimado de vuelo: ${tiempoEstimado.toFixed(1)} horas`);

// Consumo de combustible
const consumoPorHora: number = 2500; // litros/hora
const consumoTotal: number = consumoPorHora * tiempoEstimado;
console.log(`Consumo estimado: ${consumoTotal.toFixed(0)}L`);
