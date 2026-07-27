// procesador-vuelos.ts — Control de vuelos

type Vuelo = {
  id:       number;
  codigo:   string;
  destino:  string;
  pasajeros: number;
  estado:   "programado" | "embarcando" | "en_vuelo" | "aterrizado" | "cancelado";
};

function procesarVuelos(vuelos: Vuelo[]): void {
  console.log("=== RESUMEN DE VUELOS ===\n");

  let totalPasajeros: number = 0;
  let vuelosProgramados: number = 0;
  let vuelosEnVuelo: number = 0;
  let vuelosCancelados: number = 0;

  for (const vuelo of vuelos) {
    switch (vuelo.estado) {
      case "embarcando":
        totalPasajeros += vuelo.pasajeros;
        vuelosProgramados++;
        console.log(`🟡 #${vuelo.id} ${vuelo.codigo.padEnd(6)} → ${vuelo.destino.padEnd(4)} | ${vuelo.pasajeros} pax | EMBARCANDO`);
        break;
      case "en_vuelo":
        totalPasajeros += vuelo.pasajeros;
        vuelosEnVuelo++;
        console.log(`🟢 #${vuelo.id} ${vuelo.codigo.padEnd(6)} → ${vuelo.destino.padEnd(4)} | ${vuelo.pasajeros} pax | EN VUELO`);
        break;
      case "aterrizado":
        totalPasajeros += vuelo.pasajeros;
        console.log(`🔵 #${vuelo.id} ${vuelo.codigo.padEnd(6)} → ${vuelo.destino.padEnd(4)} | ${vuelo.pasajeros} pax | ATERRIZADO`);
        break;
      case "cancelado":
        vuelosCancelados++;
        console.log(`🔴 #${vuelo.id} ${vuelo.codigo.padEnd(6)} → ${vuelo.destino.padEnd(4)} | CANCELADO`);
        break;
      case "programado":
        vuelosProgramados++;
        console.log(`⚪ #${vuelo.id} ${vuelo.codigo.padEnd(6)} → ${vuelo.destino.padEnd(4)} | ${vuelo.pasajeros} pax | PROGRAMADO`);
        break;
    }
  }

  console.log("\n--- Estadísticas ---");
  console.log(`  En vuelo:     ${vuelosEnVuelo}`);
  console.log(`  Programados:  ${vuelosProgramados}`);
  console.log(`  Cancelados:   ${vuelosCancelados}`);
  console.log(`  Total pasajeros en aire: ${totalPasajeros}`);
  console.log(`  Total vuelos: ${vuelos.length}`);
}

const vuelos: Vuelo[] = [
  { id: 1, codigo: "AM215",  destino: "JFK", pasajeros: 185, estado: "en_vuelo"    },
  { id: 2, codigo: "VY3201", destino: "MAD", pasajeros: 142, estado: "embarcando"  },
  { id: 3, codigo: "DL478",  destino: "LAX", pasajeros: 200, estado: "programado"  },
  { id: 4, codigo: "UA902",  destino: "ORD", pasajeros: 165, estado: "cancelado"   },
  { id: 5, codigo: "IB6250", destino: "MAD", pasajeros: 220, estado: "en_vuelo"    },
  { id: 6, codigo: "VB120",  destino: "CUN", pasajeros: 180, estado: "aterrizado"  },
];

procesarVuelos(vuelos);
