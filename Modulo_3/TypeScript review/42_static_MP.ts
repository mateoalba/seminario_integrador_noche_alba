// static.ts — Control de vuelos

class ControlVuelos {
  static readonly MAX_VUELOS_SIMULTANEOS: number = 50;
  private static vuelosActivos: number = 0;
  private static contadorId: number = 0;

  readonly id: number;
  readonly codigo: string;
  private estado: string;

  constructor(codigo: string) {
    if (ControlVuelos.vuelosActivos >= ControlVuelos.MAX_VUELOS_SIMULTANEOS) {
      throw new Error(`Límite alcanzado: máximo ${ControlVuelos.MAX_VUELOS_SIMULTANEOS} vuelos simultáneos`);
    }
    ControlVuelos.vuelosActivos++;
    ControlVuelos.contadorId++;
    this.id = ControlVuelos.contadorId;
    this.codigo = codigo;
    this.estado = "activo";
  }

  static cuantosActivos(): number {
    return ControlVuelos.vuelosActivos;
  }

  static generarCodigo(): string {
    ControlVuelos.contadorId++;
    return `VL-${ControlVuelos.contadorId.toString().padStart(4, "0")}`;
  }

  static resetear(): void {
    ControlVuelos.vuelosActivos = 0;
    ControlVuelos.contadorId = 0;
  }

  finalizar(): void {
    if (this.estado === "activo") {
      ControlVuelos.vuelosActivos--;
      this.estado = "finalizado";
      console.log(`Vuelo ${this.codigo} (#${this.id}) finalizado`);
    }
  }
}

const v1 = new ControlVuelos("AM215");
const v2 = new ControlVuelos("DL478");
const v3 = new ControlVuelos("UA902");

console.log(`Activos: ${ControlVuelos.cuantosActivos()}`);
console.log(`Código generado: ${ControlVuelos.generarCodigo()}`);

v2.finalizar();
console.log(`Activos tras finalizar: ${ControlVuelos.cuantosActivos()}`);

// Mini-ejercicio — generador de IDs únicos
class IdVuelo {
  private static ultimo: number = 0;

  static generar(): string {
    IdVuelo.ultimo++;
    return `VL-${IdVuelo.ultimo.toString().padStart(5, "0")}`;
  }
}

console.log(`\n${IdVuelo.generar()}`);
console.log(IdVuelo.generar());
console.log(IdVuelo.generar());
