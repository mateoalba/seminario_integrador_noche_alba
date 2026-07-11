// --- Concepto puro: miembros estáticos ---

class Matematica {
  static readonly PI: number = 3.14159265;

  static circunferencia(radio: number): number {
    return 2 * Matematica.PI * radio;
  }

  static potencia(base: number, exp: number): number {
    return base ** exp;
  }
}

console.log(Matematica.PI);
console.log(Matematica.circunferencia(5));
console.log(Matematica.potencia(2, 10));

// --- Ejemplo aplicado: generador de IDs y contador de instancias ---

class Conexion {
  private static totalConexiones: number = 0;
  private static readonly MAX_CONEXIONES: number = 5;

  public readonly idConexion: number;
  public readonly host: string;

  constructor(host: string) {
    if (Conexion.totalConexiones >= Conexion.MAX_CONEXIONES) {
      throw new Error(`Límite alcanzado: máximo ${Conexion.MAX_CONEXIONES} conexiones.`);
    }
    Conexion.totalConexiones++;
    this.idConexion = Conexion.totalConexiones;
    this.host = host;
  }

  static cuantasActivas(): number {
    return Conexion.totalConexiones;
  }

  static resetear(): void {
    Conexion.totalConexiones = 0;
  }

  cerrar(): void {
    Conexion.totalConexiones--;
    console.log(`Conexión #${this.idConexion} a "${this.host}" cerrada.`);
  }
}

const c1 = new Conexion("db.local");
const c2 = new Conexion("cache.local");
const c3 = new Conexion("api.local");

console.log(`Activas: ${Conexion.cuantasActivas()}`);
c2.cerrar();
console.log(`Activas: ${Conexion.cuantasActivas()}`);

// --- Mini-ejercicio: IdUnico ---

class IdUnico {
  private static ultimo: number = 0;

  static generar(): number {
    IdUnico.ultimo++;
    return IdUnico.ultimo;
  }
}

console.log(IdUnico.generar());
console.log(IdUnico.generar());
console.log(IdUnico.generar());
console.log(IdUnico.generar());
console.log(IdUnico.generar());
