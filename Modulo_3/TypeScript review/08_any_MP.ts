// tipo-any.ts — Control de vuelos

// any permite cualquier tipo — peligroso en sistemas de control
let datoVuelo: any = "AM215";
datoVuelo = 35000;       // sin error — debería ser string
datoVuelo = true;        // sin error — inconsistente
datoVuelo = { gate: "B42" };

// En un sistema real esto causaría problemas críticos
console.log(datoVuelo);
// datoVuelo.toUpperCase(); // falla en runtime, TS no avisa

// Ejemplo de por qué any es peligroso en aviación
let altitud: any = "35000 pies";
// Podrías pensar que siempre es un número...
// altitud.toFixed(2); // 💥 Error en runtime
