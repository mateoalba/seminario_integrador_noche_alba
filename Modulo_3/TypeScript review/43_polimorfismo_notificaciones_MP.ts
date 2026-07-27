// polimorfismo-notificaciones.ts — Control de vuelos

abstract class AlertaVuelo {
  constructor(protected vuelo: string, protected mensaje: string) {}

  abstract enviar(): string;

  resumen(): string {
    return `[${this.constructor.name}] → Vuelo ${this.vuelo}`;
  }
}

class AlertaEmail extends AlertaVuelo {
  constructor(vuelo: string, mensaje: string, private destinatario: string) {
    super(vuelo, mensaje);
  }

  override enviar(): string {
    return `Email a <${this.destinatario}> | Vuelo ${this.vuelo}: ${this.mensaje}`;
  }
}

class AlertaSMS extends AlertaVuelo {
  constructor(vuelo: string, mensaje: string, private telefono: string) {
    super(vuelo, mensaje);
  }

  override enviar(): string {
    return `SMS a ${this.telefono} | Vuelo ${this.vuelo}: ${this.mensaje}`;
  }
}

class AlertaPantalla extends AlertaVuelo {
  constructor(vuelo: string, mensaje: string, private terminal: string) {
    super(vuelo, mensaje);
  }

  override enviar(): string {
    return `Pantalla Terminal ${this.terminal} | Vuelo ${this.vuelo}: ${this.mensaje}`;
  }
}

class AlertaSirena extends AlertaVuelo {
  constructor(vuelo: string, mensaje: string, private zona: string) {
    super(vuelo, mensaje);
  }

  override enviar(): string {
    return `🚨 SIRENA Zona ${this.zona} | Vuelo ${this.vuelo}: ${this.mensaje}`;
  }
}

const alertas: AlertaVuelo[] = [
  new AlertaEmail("AM215", "Retraso de 30 min", "ops@aeropuerto.mx"),
  new AlertaSMS("DL478", "Cambio de gate a C17", "+52-55-1234-5678"),
  new AlertaPantalla("UA902", "Abordaje inminente", "B"),
  new AlertaSirena("FX5021", "Emergencia en pista", "Norte"),
];

console.log("=== Despacho de alertas ===");
for (const a of alertas) {
  console.log(a.resumen());
  console.log(`  > ${a.enviar()}\n`);
}

// Mini-ejercicio — Tipo de alerta
abstract class NivelAlerta {
  abstract aplicar(): string;
}

class AlertaVerde extends NivelAlerta {
  aplicar(): string { return "🟢 Operación normal"; }
}

class AlertaAmarilla extends NivelAlerta {
  aplicar(): string { return "🟡 Precaución — monitorear"; }
}

class AlertaRoja extends NivelAlerta {
  aplicar(): string { return "🔴 Emergencia — acción inmediata"; }
}

console.log("=== Niveles de alerta ===");
for (const nivel of [new AlertaVerde(), new AlertaAmarilla(), new AlertaRoja()]) {
  console.log(`  ${nivel.aplicar()}`);
}
