// void-vs-never.ts — Control de vuelos

// void — no hay retorno significativo
function registrarDespegue(codigo: string): void {
  console.log(`✈ Vuelo ${codigo} despegando`);
}

function registrarAterrizaje(codigo: string): void {
  console.log(`✈ Vuelo ${codigo} aterrizado`);
}

registrarDespegue("AM215");
registrarAterrizaje("VY3201");

// never — la función nunca retorna
function abortarMision(codigo: string, motivo: string): never {
  throw new Error(`🚨 ABORTADO — Vuelo ${codigo}: ${motivo}`);
}

// function monitoreoInfinito(): never {
//   while (true) {
//     // monitoreo eterno de radar
//   }
// }

function calcularVelocidad(distancia: number, tiempo: number): number {
  if (tiempo === 0) abortarMision("GLOBAL", "Tiempo de vuelo es cero");
  return distancia / tiempo;
}

console.log(`\nVelocidad: ${calcularVelocidad(3360, 4)} km/h`);

// Ejemplo aplicado — manejador de códigos HTTP de aerolínea
type CodigoRespuesta = 200 | 400 | 401 | 404 | 500;

function manejarRespuesta(codigo: CodigoRespuesta, datos?: string): void {
  if (codigo === 200) {
    console.log(`Éxito: ${datos ?? "sin datos"}`);
    return;
  }
  procesarError(codigo);
}

function procesarError(codigo: CodigoRespuesta): never {
  const mensajes: Partial<Record<CodigoRespuesta, string>> = {
    400: "Solicitud inválida",
    401: "No autenticado",
    404: "Vuelo no encontrado",
    500: "Error del servidor",
  };
  throw new Error(`HTTP ${codigo}: ${mensajes[codigo] ?? "error desconocido"}`);
}

manejarRespuesta(200, "Vuelo AM215 encontrado");

// Mini-ejercicio — función asegurar con never
function fallar(mensaje: string): never {
  throw new Error(mensaje);
}

function asegurar(condicion: boolean, mensaje: string): void {
  if (!condicion) fallar(mensaje);
}

asegurar(2 + 2 === 4, "Cálculo de ruta corrupto");
console.log("Ruta calculada correctamente");

try {
  asegurar(1 === 2, "Altitud negativa detectada");
} catch (e) {
  console.log(`Error: ${(e as Error).message}`);
}
