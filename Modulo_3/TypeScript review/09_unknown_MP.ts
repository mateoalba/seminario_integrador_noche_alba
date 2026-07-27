// tipo-unknown.ts — Control de vuelos

function procesarDatoVuelo(valor: unknown): string {
  if (typeof valor === "string") {
    return `Código de vuelo: ${valor.toUpperCase()}`;
  }

  if (typeof valor === "number") {
    return `Altitud: ${valor} pies`;
  }

  if (typeof valor === "boolean") {
    return valor ? "Vuelo en curso" : "Vuelo en tierra";
  }

  return "Dato de vuelo no reconocido";
}

console.log(procesarDatoVuelo("am215"));      // Código de vuelo: AM215
console.log(procesarDatoVuelo(35000));         // Altitud: 35000 pies
console.log(procesarDatoVuelo(true));          // Vuelo en curso
console.log(procesarDatoVuelo(null));          // Dato de vuelo no reconocido
console.log(procesarDatoVuelo({ id: "V01" })); // Dato de vuelo no reconocido
