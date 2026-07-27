// type — Control de vuelos

type CodigoVuelo = string;
type Altitud = number;

type EstadoVuelo = "programado" | "embarcando" | "despegando" | "en_vuelo" | "aterrizando" | "aterrizado" | "cancelado";
type Clase = "economica" | "ejecutiva" | "primera";

type Vuelo = {
  codigo: CodigoVuelo;
  origen: string;
  destino: string;
  altitud: Altitud;
  estado: EstadoVuelo;
};

type Pasajero = {
  nombre: string;
  asiento: number;
  clase: Clase;
};

function describirVuelo(v: Vuelo): string {
  return `[${v.codigo}] ${v.origen} → ${v.destino} | ${v.altitud}ft | ${v.estado}`;
}

function describirPasajero(p: Pasajero): string {
  return `${p.nombre} — Asiento ${p.asiento} (${p.clase})`;
}

const vuelo1: Vuelo = {
  codigo: "AM215",
  origen: "MEX",
  destino: "JFK",
  altitud: 35000,
  estado: "en_vuelo",
};

const pasajero1: Pasajero = {
  nombre: "Carlos Méndez",
  asiento: 14,
  clase: "ejecutiva",
};

console.log(describirVuelo(vuelo1));
console.log(describirPasajero(pasajero1));

// Mini-ejercicio — Vuelo con ID mixto
type VueloID = string | number;

const v1: VueloID = "AM215";
const v2: VueloID = 3201;
console.log(`\nVuelo ID string: ${v1}`);
console.log(`Vuelo ID number: ${v2}`);
