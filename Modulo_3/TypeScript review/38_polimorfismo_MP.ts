// polimorfismo.ts — Control de vuelos

class VueloBase {
  constructor(public codigo: string, public destino: string) {}

  describir(): string {
    return `${this.codigo} → ${this.destino}`;
  }

  calcularTiempo(distancia: number): number {
    return Number((distancia / 850).toFixed(1)); // velocidad promedio
  }
}

class VueloComercial extends VueloBase {
  constructor(
    codigo: string,
    destino: string,
    public pasajeros: number,
    public clase: string
  ) {
    super(codigo, destino);
  }

  override describir(): string {
    return `${this.codigo} → ${this.destino} | ${this.pasajeros} pasajeros (${this.clase})`;
  }

  override calcularTiempo(distancia: number): number {
    return Number((distancia / 850).toFixed(1));
  }
}

class VueloCarga extends VueloBase {
  constructor(
    codigo: string,
    destino: string,
    public pesoKg: number
  ) {
    super(codigo, destino);
  }

  override describir(): string {
    return `${this.codigo} → ${this.destino} | Carga: ${this.pesoKg}kg`;
  }

  override calcularTiempo(distancia: number): number {
    return Number((distancia / 780).toFixed(1)); // más lento por la carga
  }
}

class VueloPrivado extends VueloBase {
  constructor(
    codigo: string,
    destino: string,
    public propietario: string
  ) {
    super(codigo, destino);
  }

  override describir(): string {
    return `${this.codigo} → ${this.destino} | Privado de ${this.propietario}`;
  }
}

const vuelos: VueloBase[] = [
  new VueloComercial("AM215", "JFK", 185, "economica"),
  new VueloCarga("FX5021", "LAX", 45000),
  new VueloPrivado("N123AB", "Miami", "Carlos Slim"),
  new VueloComercial("DL478", "LAX", 142, "ejecutiva"),
];

console.log("=== Todos los vuelos ===");
for (const v of vuelos) {
  console.log(`  ${v.describir()}`);
}

// Mini-ejercicio — Descuento polimórfico
abstract class Tarifa {
  abstract calcular(precio: number): number;
}

class TarifaNormal extends Tarifa {
  override calcular(precio: number): number { return precio; }
}

class TarifaDescuento extends Tarifa {
  constructor(private porcentaje: number) { super(); }
  override calcular(precio: number): number {
    return Number((precio - (precio * this.porcentaje) / 100).toFixed(0));
  }
}

console.log("\n=== Tarifas ===");
const tarifas: Tarifa[] = [new TarifaNormal(), new TarifaDescuento(10), new TarifaDescuento(20)];
for (const t of tarifas) {
  console.log(`$${t.calcular(5000)} MXN`);
}
