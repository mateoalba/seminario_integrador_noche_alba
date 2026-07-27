// encapsulamiento.ts — Control de vuelos (cuenta de aerolínea)

class CuentaAerolinea {
  readonly id: string;
  public titular: string;
  private millas: number;
  protected categoria: string;

  constructor(id: string, titular: string, millasIniciales: number) {
    this.id = id;
    this.titular = titular;
    this.millas = millasIniciales;
    this.categoria = "Plata";
  }

  obtenerMillas(): number {
    return this.millas;
  }

  acumularMillas(km: number): void {
    const millasGanadas = Math.floor(km * 0.8);
    this.millas += millasGanadas;
    console.log(`+${millasGanadas} millas para ${this.titular} — Total: ${this.millas}`);

    // Actualizar categoría automáticamente
    if (this.millas >= 100000) {
      this.categoria = "Diamante";
    } else if (this.millas >= 50000) {
      this.categoria = "Oro";
    } else if (this.millas >= 20000) {
      this.categoria = "Plata";
    } else {
      this.categoria = "Bronce";
    }
  }

  canjearMillas(costo: number): boolean {
    if (this.millas < costo) {
      console.log(`❌ Millas insuficientes para ${this.titular}`);
      return false;
    }
    this.millas -= costo;
    console.log(`✅ Canje exitoso para ${this.titular} — Millas restantes: ${this.millas}`);
    return true;
  }

  resumen(): string {
    return `[${this.id}] ${this.titular} — ${this.millas} millas — ${this.categoria}`;
  }
}

const cuenta = new CuentaAerolinea("FF-001", "Carlos Méndez", 15000);
console.log(cuenta.resumen());

cuenta.acumularMillas(3360); // MEX → JFK
cuenta.acumularMillas(9012); // MEX → MAD
console.log(cuenta.resumen());

cuenta.canjearMillas(20000); // intento fallido
cuenta.canjearMillas(5000);  // canje exitoso
console.log(cuenta.resumen());

// cuenta.millas = 999999;  // Error: 'millas' is private
// cuenta.id = "otro";      // Error: 'id' is readonly
