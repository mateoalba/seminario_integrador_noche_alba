// funcion-flecha.ts — Control de vuelos

// Declaración tradicional
function calcularMillas(km: number): number {
  return km * 0.539957;
}

// Flecha equivalente
const calcularMillasFlecha = (km: number): number => km * 0.539957;

// Flecha con retorno implícito
const esVueloLargo = (distancia: number): boolean => distancia > 4000;
const formatearHora = (hora: number): string => `${Math.floor(hora)}:${((hora % 1) * 60).toString().padStart(2, "0")}`;

console.log(`Millas náuticas: ${calcularMillas(3360).toFixed(2)}`);
console.log(`¿Es vuelo largo? ${esVueloLargo(3360)}`);
console.log(`Hora de salida: ${formatearHora(8.5)}`);

// Pipeline de transformación — normalizar código de vuelo
const aMayusculas = (s: string): string => s.toUpperCase();
const sinEspacios = (s: string): string => s.replace(/\s+/g, "");
const formatearCodigo = (s: string): string => sinEspacios(aMayusculas(s));

function normalizarVuelo(codigo: string): string {
  return formatearCodigo(codigo);
}

const entradas = ["  am215  ", " vy 3201 ", "DL  478"];
entradas.forEach((e) => console.log(`"${e}" → "${normalizarVuelo(e)}"`));

// Mini-ejercicio — funciones flecha con retorno implícito
const esDespegue = (fase: string): boolean => fase === "despegue";
const duracionFormateada = (min: number): string => `${Math.floor(min / 60)}h ${min % 60}m`;
const millasAKm = (nm: number): number => Number((nm * 1.852).toFixed(1));

console.log(`\nesDespegue("despegue"): ${esDespegue("despegue")}`);
console.log(`Duración: ${duracionFormateada(195)}`);
console.log(`1800 NM en km: ${millasAKm(1800)}`);
