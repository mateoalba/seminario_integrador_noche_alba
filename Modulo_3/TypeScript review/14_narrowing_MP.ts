// narrowing.ts — Control de vuelos

function describirDatoVuelo(dato: string | number | boolean): string {
  if (typeof dato === "string") {
    return `Código: ${dato.toUpperCase()}`;
  }

  if (typeof dato === "number") {
    return `Altitud: ${dato} pies`;
  }

  return dato ? "Vuelo activo" : "Vuelo en tierra";
}

console.log(describirDatoVuelo("am215"));
console.log(describirDatoVuelo(35000));
console.log(describirDatoVuelo(true));

// Narrowing con null
function obtenerCompania(codigo: string | null): string {
  if (codigo === null) {
    return "Sin compañía asignada";
  }
  // Aquí TypeScript sabe que codigo es string
  const companias: Record<string, string> = {
    "AM215": "Aeroméxico",
    "VY3201": "Vueling",
    "DL478": "Delta",
  };
  return companias[codigo] ?? "Desconocida";
}

console.log(obtenerCompania("AM215"));  // Aeroméxico
console.log(obtenerCompania(null));      // Sin compañía asignada
console.log(obtenerCompania("XX999"));   // Desconocida
