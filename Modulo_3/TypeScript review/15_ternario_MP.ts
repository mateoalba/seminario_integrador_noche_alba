// ternario.ts — Control de vuelos

const altitud: number = 35000;

// Forma larga
let fase: string;
if (altitud > 30000) {
  fase = "Crucero";
} else if (altitud > 10000) {
  fase = "Ascenso";
} else {
  fase = "Aproximación";
}

// Forma corta con ternario
const faseCorta: string = altitud > 30000 ? "Crucero" : altitud > 10000 ? "Ascenso" : "Aproximación";
console.log(`Fase del vuelo: ${faseCorta}`);

// Estado del pasajero
const tieneTicket: boolean = true;
const estado = tieneTicket ? "Embarcado" : "Esperando";
console.log(`Estado: ${estado}`);

// Peso del equipaje
const pesoEquipaje: number = 23;
const sobrepeso = pesoEquipaje > 23 ? "Sobrepeso — cargo extra" : "Dentro del límite";
console.log(`Equipaje: ${pesoEquipaje}kg — ${sobrepeso}`);
