// null-undefined.ts — Control de vuelos

// Puede haber vuelo con código null si no está programado
let codigoVuelo: string | null = null;
console.log(`Código de vuelo: ${codigoVuelo}`); // null

codigoVuelo = "AM215";
console.log(`Código de vuelo: ${codigoVuelo}`); // AM215

// Gate puede ser undefined si aún no se ha asignado
let gateAsignado: string | undefined;
console.log(`Gate: ${gateAsignado}`); // undefined

gateAsignado = "C17";
console.log(`Gate asignado: ${gateAsignado}`); // C17

// Compañía aérea opcional
let compania: string | undefined | null = undefined;
console.log(`Compañía: ${compania}`); // undefined

compania = "Aeroméxico";
console.log(`Compañía: ${compania}`); // Aeroméxico

compania = null;
console.log(`Compañía: ${compania}`); // null
