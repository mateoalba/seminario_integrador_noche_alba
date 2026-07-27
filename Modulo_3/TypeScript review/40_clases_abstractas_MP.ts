// clases-abstractas.ts — Control de vuelos

abstract class Aeronave {
  abstract tipo(): string;
  abstract calcularConsumo(distancia: number): number;
  abstract capacidadPasajeros(): number;

  resumen(distancia: number): string {
    return `[${this.tipo()}] ${this.capacidadPasajeros()} pax | Consumo: ${this.calcularConsumo(distancia).toFixed(0)}L`;
  }
}

class JetPrivado extends Aeronave {
  constructor(private modelo: string) { super(); }

  override tipo(): string { return this.modelo; }
  override calcularConsumo(distancia: number): number { return distancia * 3.5; }
  override capacidadPasajeros(): number { return 8; }
}

class AvionComercial extends Aeronave {
  constructor(private modelo: string, private asientos: number) { super(); }

  override tipo(): string { return this.modelo; }
  override calcularConsumo(distancia: number): number { return distancia * 4.2; }
  override capacidadPasajeros(): number { return this.asientos; }
}

class AvionCarga extends Aeronave {
  constructor(private modelo: string, private capacidadKg: number) { super(); }

  override tipo(): string { return this.modelo; }
  override calcularConsumo(distancia: number): number { return distancia * 5.8; }
  override capacidadPasajeros(): number { return 0; }
}

const hangar: Aeronave[] = [
  new JetPrivado("Cessna Citation X"),
  new AvionComercial("Boeing 737-800", 189),
  new AvionComercial("Airbus A320", 180),
  new AvionCarga("Boeing 747F", 120000),
];

console.log("=== Hangar de aeronaves (distancia: 3000km) ===");
for (const a of hangar) {
  console.log(`  ${a.resumen(3000)}`);
}

// Ejemplo aplicado — método de pago en aerolínea
abstract class MetodoPago {
  constructor(protected titular: string) {}

  abstract procesar(monto: number): string;
  abstract validar(): boolean;

  resumen(monto: number): string {
    if (!this.validar()) return `[${this.titular}] Pago rechazado`;
    return this.procesar(monto);
  }
}

class TarjetaCredito extends MetodoPago {
  constructor(titular: string, private ultimos4: string, private saldo: number) {
    super(titular);
  }

  override validar(): boolean {
    return this.ultimos4.length === 4 && this.saldo > 0;
  }

  override procesar(monto: number): string {
    if (monto > this.saldo) return "Fondos insuficientes";
    this.saldo -= monto;
    return `Tarjeta ****${this.ultimos4}: $${monto} aprobado. Restante: $${this.saldo}`;
  }
}

class PagoMillas extends MetodoPago {
  constructor(titular: string, private millasDisponibles: number) {
    super(titular);
  }

  override validar(): boolean {
    return this.millasDisponibles >= 1000;
  }

  override procesar(monto: number): string {
    const millasNecesarias = monto * 10;
    if (millasNecesarias > this.millasDisponibles) return "Millas insuficientes";
    this.millasDisponibles -= millasNecesarias;
    return `Pago con ${millasNecesarias} millas — Restante: ${this.millasDisponibles} millas`;
  }
}

console.log("\n=== Métodos de pago ===");
const tarjeta = new TarjetaCredito("Carlos", "4321", 15000);
const millas = new PagoMillas("Ana", 50000);

console.log(tarjeta.resumen(8500));
console.log(millas.resumen(3000));
