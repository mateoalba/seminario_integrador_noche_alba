// condicionales.ts — Control de vuelos

// Verificar condición meteorológica
const visibilidad: number = 8; // km

if (visibilidad > 5) {
  console.log("Visibilidad óptima — operaciones normales");
} else if (visibilidad > 2) {
  console.log("Visibilidad reducida — precaución");
} else {
  console.log("Visibilidad crítica — operaciones suspendidas");
}

// Estado del vuelo
const enVuelo: boolean = true;
if (enVuelo) {
  console.log("Vuelo en curso — mantener ruta");
} else {
  console.log("Vuelo en tierra — esperando autorización");
}

// Nivel de alerta por pista
const pista: string = "principal";
if (pista === "principal") {
  console.log("Usando pista principal — prioridad máxima");
} else if (pista === "secundaria") {
  console.log("Usando pista secundaria");
} else {
  console.log("Pista de emergencia activada");
}

// Nivel de combustible
const combustible: number = 12000; // litros
if (combustible > 15000) {
  console.log("Combustible: OK");
} else if (combustible > 5000) {
  console.log("Combustible: BAJO — considerar aterrizaje");
} else {
  console.log("Combustible: CRÍTICO — emergencia inminente");
}
