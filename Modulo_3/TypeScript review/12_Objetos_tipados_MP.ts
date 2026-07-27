// objetos.ts — Control de vuelos

const vuelo: {
  codigo: string;
  origen: string;
  destino: string;
  pasajeros: number;
  enVuelo: boolean;
} = {
  codigo: "AM215",
  origen: "MEX",
  destino: "JFK",
  pasajeros: 185,
  enVuelo: true,
};

console.log(`Vuelo ${vuelo.codigo}: ${vuelo.origen} → ${vuelo.destino}`);
console.log(`Pasajeros: ${vuelo.pasajeros}, En vuelo: ${vuelo.enVuelo}`);

// Propiedad opcional — gate puede no estar asignado
const vuelo2: {
  codigo: string;
  gate?: string;
  retraso?: number;
} = {
  codigo: "VY3201",
};

console.log(`\nVuelo ${vuelo2.codigo}`);
console.log(`Gate: ${vuelo2.gate ?? "No asignado"}`);
console.log(`Retraso: ${vuelo2.retraso ?? 0} min`);

// TypeScript avisa si falta una propiedad
// const vuelo3: { codigo: string; pasajeros: number } = { codigo: "X" }; // ❌ Error
