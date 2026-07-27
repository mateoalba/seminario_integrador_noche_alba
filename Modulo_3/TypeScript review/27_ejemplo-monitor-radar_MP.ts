// monitor-radar.ts — Control de vuelos

type EstadoRadar = "operativo" | "degradado" | "fuera_de_servicio";

interface EquipoRadar {
  nombre: string;
  estado: EstadoRadar;
  alcanceKm: number;
}

const equipos: EquipoRadar[] = [
  { nombre: "Radar Primario Norte", estado: "operativo",       alcanceKm: 250 },
  { nombre: "Radar Secundario Sur", estado: "degradado",      alcanceKm: 120 },
  { nombre: "Radar Terciario Este", estado: "fuera_de_servicio", alcanceKm: 0 },
  { nombre: "Radar Primario Oeste", estado: "operativo",      alcanceKm: 300 },
];

console.log("=== Diagnóstico de Radares ===");
let fueraServicio = 0;

for (const e of equipos) {
  if (e.estado === "fuera_de_servicio") fueraServicio++;

  let icono: string;
  switch (e.estado) {
    case "operativo":        icono = "🟢"; break;
    case "degradado":        icono = "🟡"; break;
    case "fuera_de_servicio": icono = "🔴"; break;
    default:                 icono = "⚪";
  }

  let diagnostico: string;
  if (e.estado === "operativo") {
    if (e.alcanceKm >= 200) {
      diagnostico = `${icono} ${e.nombre}: óptimo (${e.alcanceKm}km)`;
    } else {
      diagnostico = `${icono} ${e.nombre}: aceptable (${e.alcanceKm}km)`;
    }
  } else {
    diagnostico = `${icono} ${e.nombre}: requiere atención (${e.estado})`;
  }

  console.log(diagnostico);
}

let alerta = fueraServicio;
while (alerta > 0) {
  console.log(`🚨 Quedan ${alerta} radar(es) fuera de servicio — notificando mantención...`);
  alerta--;
}

console.log(`\nResumen: ${fueraServicio}/${equipos.length} fuera de servicio`);
