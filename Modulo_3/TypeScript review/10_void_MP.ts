// tipo-void.ts — Control de vuelos

function registrarDespegue(codigo: string, puerta: string): void {
  console.log(`✈ Vuelo ${codigo} despegando desde puerta ${puerta}`);
  // No retorna nada — solo registra el evento
}

function registrarAterrizaje(codigo: string, pista: number): void {
  console.log(`✈ Vuelo ${codigo} aterrizando en pista ${pista}`);
}

registrarDespegue("AM215", "B42");
registrarAterrizaje("VY3201", 3);

// Comparación: esta función SÍ retorna un valor
function calcularTiempoVuelo(distancia: number, velocidad: number): number {
  return Number((distancia / velocidad).toFixed(1));
}

const horas = calcularTiempoVuelo(9532, 850);
console.log(`Tiempo estimado: ${horas} horas`);
