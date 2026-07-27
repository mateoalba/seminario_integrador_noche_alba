// interface-basica.ts — Control de vuelos

interface Vuelo {
  readonly codigo: string;
  origen: string;
  destino: string;
  horaSalida: number;
  enVuelo?: boolean;
}

const vuelo1: Vuelo = { codigo: "AM215", origen: "MEX", destino: "JFK", horaSalida: 8.5 };
const vuelo2: Vuelo = { codigo: "DL478", origen: "MEX", destino: "LAX", horaSalida: 14.0, enVuelo: true };

// vuelo1.codigo = "XX"; // Error: readonly

function mostrarVuelo(v: Vuelo): void {
  const estado = v.enVuelo ? "En vuelo" : "En tierra";
  console.log(`[${v.codigo}] ${v.origen} → ${v.destino} | ${v.horaSalida}h | ${estado}`);
}

mostrarVuelo(vuelo1);
mostrarVuelo(vuelo2);

// Ejemplo aplicado — interfaz de avión
interface Avion {
  readonly matricula: string;
  modelo: string;
  capacidad: number;
  combustibleActual: number;
  enVuelo?: boolean;
}

function estadoAvion(a: Avion): string {
  const vuelo = a.enVuelo ? "En vuelo" : "En tierra";
  return `[${a.matricula}] ${a.model} | ${a.capacidad} pasajeros | ${a.combustibleActual}L | ${vuelo}`;
}

const boeing: Avion = {
  matricula: "N739AM",
  modelo: "Boeing 737-800",
  capacidad: 189,
  combustibleActual: 28000,
};

console.log(`\n${estadoAvion(boeing)}`);

// Mini-ejercicio — interface Tripulacion
interface Tripulacion {
  nombre: string;
  apellido: string;
  rol: string;
  horasVuelo: number;
}

function resumenTripulacion(t: Tripulacion): string {
  return `${t.nombre} ${t.apellido} — ${t.rol} (${t.horasVuelo}h de vuelo)`;
}

console.log(resumenTripulacion({ nombre: "Roberto", apellido: "Rodríguez", rol: "Capitán", horasVuelo: 12500 }));
console.log(resumenTripulacion({ nombre: "Laura", apellido: "Méndez", rol: "Copiloto", horasVuelo: 6800 }));
