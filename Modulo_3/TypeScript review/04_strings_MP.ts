// strings.ts — Control de vuelos

const codigoVuelo:   string = "VY-3201";
const aeropuerto:    string = `Aeropuerto Internacional de Ciudad de México`;
const gate:          string = "B42";
const vacia:         string = "";

console.log(codigoVuelo);
console.log(aeropuerto);
console.log(`Gate: ${gate}`);
console.log(`Código en mayúsculas: ${codigoVuelo.toUpperCase()}`);
console.log(`¿Contiene "VY"? ${codigoVuelo.includes("VY")}`);
console.log(`Partes del código: ${codigoVuelo.split("-")}`);

// Tripas del vuelo
const tripulacion: string[] = ["Capitán Rodríguez", "Copiloto Méndez", "Azafata López"];
console.log(`Tripulación: ${tripulacion.join(" | ")}`);
