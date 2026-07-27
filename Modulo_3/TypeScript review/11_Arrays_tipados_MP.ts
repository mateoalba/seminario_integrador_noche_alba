// arrays.ts — Control de vuelos

const codigosVuelo:    string[]  = ["AM215", "VY3201", "DL478", "UA902", "IB6250"];
const horasSalida:     number[]  = [8.5, 10.0, 14.5, 16.0, 22.30];
const enAire:          boolean[] = [true, false, true, false, true];

console.log("=== Vuelos programados ===");
for (let i = 0; i < codigosVuelo.length; i++) {
  const estado = enAire[i] ? "En vuelo" : "En tierra";
  console.log(`${codigosVuelo[i]} — ${horasSalida[i]}h — ${estado}`);
}

// Métodos de array
const vuelosEnAire = codigosVuelo.filter((_, i) => enAire[i]);
console.log(`\nVuelos en aire: ${vuelosEnAire.join(", ")}`);

const horasFormateadas = horasSalida.map(h => `${Math.floor(h)}:${((h % 1) * 60).toString().padStart(2, "0")}`);
console.log(`Horas formateadas: ${horasFormateadas.join(", ")}`);

// TypeScript avisa si añades tipo incorrecto
// codigosVuelo.push(42);  // ❌ Error
