// booleans.ts — Control de vuelos

const enVuelo:       boolean = true;
const turbulencia:   boolean = false;
const permisoAterrizaje: boolean = true;
const lluvia:        boolean = false;

console.log(`En vuelo: ${enVuelo}`);
console.log(`Turbulencia: ${!turbulencia ? "No reportada" : "Sí reportada"}`);

// Combinaciones
const puedeAterrizar: boolean = permisoAterrizaje && !lluvia;
console.log(`¿Puede aterrizar? ${puedeAterrizar}`);

const alerta: boolean = turbulencia || lluvia;
console.log(`¿Hay alerta? ${alerta}`);

// Comparaciones
const altitudActual: number = 35000;
const altitudSegura: number = 10000;
const enRango: boolean = altitudActual > altitudSegura;
console.log(`Altitud segura: ${enRango}`);
