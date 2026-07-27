// declaracion-con-parametros.ts — Control de vuelos

function calcularTiempoVuelo(distancia: number, velocidad: number): number {
  return Number((distancia / velocidad).toFixed(1));
}

function calcularCombustible(distancia: number, consumoPorKm: number): number {
  return Number((distancia * consumoPorKm).toFixed(0));
}

function resumenVuelo(codigo: string, origen: string, destino: string, distancia: number): string {
  const tiempo = calcularTiempoVuelo(distancia, 850);
  const combustible = calcularCombustible(distancia, 4.5);
  return `Vuelo ${codigo}: ${origen} → ${destino} | ${distancia}km | ${tiempo}h | ${combustible}L`;
}

console.log(resumenVuelo("AM215", "MEX", "JFK", 3360));
console.log(resumenVuelo("DL478", "MEX", "LAX", 2490));
console.log(resumenVuelo("IB6250", "MEX", "MAD", 9012));

// Función para verificar altitud segura
function verificarAltitud(altitud: number, minima: number, maxima: number): boolean {
  return altitud >= minima && altitud <= maxima;
}

console.log(`\n¿Altitud 35000 en rango seguro? ${verificarAltitud(35000, 28000, 41000)}`);
console.log(`¿Altitud 5000 en rango seguro? ${verificarAltitud(5000, 28000, 41000)}`);
