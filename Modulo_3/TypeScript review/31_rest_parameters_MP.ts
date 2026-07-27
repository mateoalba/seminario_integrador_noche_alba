// rest-parameters.ts — Control de vuelos

// Sumar distancias de múltiples tramos
function sumarDistancias(...tramos: number[]): number {
  return tramos.reduce((acc, t) => acc + t, 0);
}

console.log(`Distancia total: ${sumarDistancias(3360, 1200, 2490)} km`);
console.log(`Solo un tramo: ${sumarDistancias(9012)} km`);

// Construir ruta de vuelo con escalas
function construirRuta(aeropuertoOrigen: string, ...escalas: string[]): string {
  return [aeropuertoOrigen, ...escalas].join(" → ");
}

console.log(`\nRuta: ${construirRuta("MEX", "MIA", "JFK", "LHR")}`);
console.log(`Ruta directa: ${construirRuta("MEX", "LAX")}`);

// Registrar eventos de torre de control
function registrarEvento(tipo: string, ...detalles: string[]): void {
  const timestamp = new Date().toLocaleTimeString();
  const cuerpo = detalles.length > 0 ? ` | ${detalles.join(" · ")}` : "";
  console.log(`[${timestamp}] ${tipo.toUpperCase()}${cuerpo}`);
}

console.log("\n=== Registro de eventos ===");
registrarEvento("autorizacion_despegue");
registrarEvento("cambio_pista", "vuelo: AM215", "pista: 09L-27R", "motivo: viento");
registrarEvento("emergencia", "vuelo: DL478", "tipo: motor", "nivel: 3");

// Mini-ejercicio — vuelos con más pasajeros
function encontrarMaximo(pri: number, ...resto: number[]): number {
  return Math.max(pri, ...resto);
}

function encontrarMinimo(pri: number, ...resto: number[]): number {
  return Math.min(pri, ...resto);
}

const pasajerosVuelos = [185, 120, 250, 90, 310, 175];
console.log(`\nMáximo pasajeros: ${encontrarMaximo(...pasajerosVuelos)}`);
console.log(`Mínimo pasajeros: ${encontrarMinimo(...pasajerosVuelos)}`);
