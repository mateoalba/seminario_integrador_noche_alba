// parametros-avanzados.ts — Control de vuelos

// Opcional: la puerta puede no asignarse
function asignarGate(vuelo: string, terminal?: string): string {
  const t = terminal ?? "A";
  const gate = `${t}${Math.floor(Math.random() * 50) + 1}`;
  return `Vuelo ${vuelo}: Gate ${gate}`;
}

console.log(asignarGate("AM215"));
console.log(asignarGate("VY3201", "C"));

// Por defecto — nivel de servicio
function obtenerServicio(clase: string, idioma: string = "es"): string {
  const servicios: Record<string, string> = {
    economica: "Servicio básico",
    ejecutiva: "Servicio premium",
    primera: "Servicio VIP completo",
  };
  return `${servicios[clase] ?? "Clase desconocida"} (${idioma})`;
}

console.log(`\n${obtenerServicio("ejecutiva")}`);
console.log(obtenerServicio("primera", "en"));

// Ejemplo aplicado — function registrar evento de torre de control
function registrarEvento(
  tipo: string,
  vuelo: string,
  nivel: "info" | "warn" | "error" = "info",
  timestamp?: boolean
): string {
  const prefijos: Record<string, string> = {
    info:  "ℹ️  INFO ",
    warn:  "⚠️  WARN ",
    error: "❌ ERROR",
  };
  const hora = timestamp ? ` [${new Date().toISOString()}]` : "";
  return `${prefijos[nivel]}${hora}: [${vuelo}] ${tipo}`;
}

console.log(`\n${registrarEvento("Despegue autorizado", "AM215")}`);
console.log(registrarEvento("Turbulencia detectada", "DL478", "warn"));
console.log(registrarEvento("Motor fallando", "UA902", "error", true));

// Mini-ejercicio — formatear coordena
function formatearCoordenada(
  lat: number,
  lon: number,
  formato: string = "DD"
): string {
  if (formato === "DMS") {
    return `${Math.abs(lat)}°${lat >= 0 ? "N" : "S"}, ${Math.abs(lon)}°${lon >= 0 ? "E" : "W"}`;
  }
  return `${lat.toFixed(4)}, ${lon.toFixed(4)}`;
}

console.log(`\nCoordenadas MEX: ${formatearCoordenada(19.4363, -99.0721)}`);
console.log(`Coordenadas JFK: ${formatearCoordenada(40.6413, -73.7781, "DMS")}`);
