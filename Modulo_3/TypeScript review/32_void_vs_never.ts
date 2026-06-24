// Concepto puro

// void — no hay valor de retorno significativo
function imprimirLinea(texto: string): void {
  console.log(texto);
  // No hay return, o hay un "return;" vacío
}

// never — la función nunca retorna
function lanzarError(mensaje: string): never {
  throw new Error(mensaje);
  // TypeScript sabe que el código tras throw es inalcanzable
}

function bucleInfinito(): never {
  while (true) {
    // proceso eterno de un worker, por ejemplo
  }
}

// Inferencia — TypeScript deduce "number"
function multiplicar(a: number, b: number) {
  return a * b; // tipo inferido: number
}

// Pero el retorno explícito actúa de contrato:
function dividir(a: number, b: number): number {
  if (b === 0) lanzarError("División por cero"); // never encaja en cualquier tipo
  return a / b;
}


/*Ejemplo aplicado — manejador de errores de API*/

type CodigoHTTP = 200 | 400 | 401 | 403 | 404 | 500;

function manejarRespuesta(codigo: CodigoHTTP, datos?: string): void {
  if (codigo === 200) {
    console.log(`Éxito: ${datos ?? "sin datos"}`);
    return; // return vacío en void
  }
  procesarError(codigo); // never — el flujo no sigue
}

function procesarError(codigo: CodigoHTTP): never {
  const mensajes: Partial<Record<CodigoHTTP, string>> = {
    400: "Solicitud inválida",
    401: "No autenticado",
    403: "Sin permisos",
    404: "Recurso no encontrado",
    500: "Error interno del servidor",
  };
  throw new Error(`HTTP ${codigo}: ${mensajes[codigo] ?? "error desconocido"}`);
}

manejarRespuesta(200, "usuario cargado");  // Éxito: usuario cargado
// manejarRespuesta(404);                 // Lanza Error: HTTP 404: Recurso no encontrado



// Mini-ejercicio — función asegurar con never
function fallar(mensaje: string): never {
  throw new Error(mensaje);
}

function asegurar(condicion: boolean, mensaje: string): void {
  if (!condicion) fallar(mensaje);
}

asegurar(2 + 2 === 4, "Matematicas rotas");
console.log("asegurar(2+2===4): no lanzó");

try {
  asegurar(1 === 2, "Uno no es dos");
} catch (e) {
  console.log(`asegurar(1===2): lanzó → ${(e as Error).message}`);
}