// sistema-aeropuerto.ts — Control de vuelos (ejemplo combinado)

interface Operable {
  iniciar(): boolean;
  detener(): void;
  estaActivo(): boolean;
}

abstract class EquipoAeropuerto implements Operable {
  private static totalEquipos: number = 0;
  readonly id: number;
  protected _activo: boolean = false;

  constructor(public nombre: string) {
    EquipoAeropuerto.totalEquipos++;
    this.id = EquipoAeropuerto.totalEquipos;
  }

  static contarEquipos(): number {
    return EquipoAeropuerto.totalEquipos;
  }

  abstract tipo(): string;
  abstract mantenimiento(): string;

  iniciar(): boolean {
    this._activo = true;
    return true;
  }

  detener(): void {
    this._activo = false;
  }

  estaActivo(): boolean {
    return this._activo;
  }

  ficha(): string {
    const estado = this._activo ? "ACTIVO" : "INACTIVO";
    return `[${this.tipo()}] #${this.id} "${this.nombre}" | ${estado}`;
  }
}

class Radar2 extends EquipoAeropuerto {
  constructor(nombre: string, public frecuencia: number) {
    super(nombre);
  }

  override tipo(): string { return "Radar"; }
  override mantenimiento(): string { return `Calibración de radar ${this.frecuencia}MHz completada`; }
}

class TorreLuces extends EquipoAeropuerto {
  constructor(nombre: string, public intensidad: number) {
    super(nombre);
  }

  override tipo(): string { return "Torre de Luces"; }
  override mantenimiento(): string { return `Luces ${this.intensidad}% funcionando`; }
}

class DetectorMetales extends EquipoAeropuerto {
  constructor(nombre: string) { super(nombre); }

  override tipo(): string { return "Detector de Metales"; }
  override mantenimiento(): string { return `Calibración de detector completada`; }
}

const hangar: EquipoAeropuerto[] = [
  new Radar2("Radar Principal", 1030),
  new TorreLuces("Torre Norte", 100),
  new DetectorMetales("Puerta B42"),
  new Radar2("Radar Secundario", 1215),
];

console.log("=== Equipos del Aeropuerto ===");
for (const e of hangar) {
  console.log(`  ${e.ficha()}`);
}

console.log(`\nTotal de equipos: ${EquipoAeropuerto.contarEquipos()}`);

// Activar equipos
hangar[0].iniciar();
hangar[1].iniciar();
hangar[2].iniciar();

console.log("\n=== Estado tras activación ===");
for (const e of hangar) {
  console.log(`  ${e.ficha()}`);
}

const radar = hangar[0] as Radar2;
console.log(`\nMantenimiento: ${radar.mantenimiento()}`);

// Detener un equipo
hangar[1].detener();
console.log(`\nTorre de Luces activa: ${hangar[1].estaActivo()}`);
