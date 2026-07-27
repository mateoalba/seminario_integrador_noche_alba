// poo-class.ts — Control de vuelos

class Avion {
  matricula: string;
  modelo: string;
  combustible: number;
  enVuelo: boolean;

  constructor(matricula: string, modelo: string, combustible: number) {
    this.matricula = matricula;
    this.modelo = modelo;
    this.combustible = combustible;
    this.enVuelo = false;
  }

  despegar(): string {
    if (this.combustible < 5000) return "Combustible insuficiente para despegar";
    this.enVuelo = true;
    this.combustible -= 5000;
    return `✈ ${this.matricula} (${this.modelo}) despegado — Combustible restante: ${this.combustible}L`;
  }

  aterrizar(): string {
    if (!this.enVuelo) return `${this.matricula} ya está en tierra`;
    this.enVuelo = false;
    return `✈ ${this.matricula} (${this.modelo}) aterrizado exitosamente`;
  }

  repostar(litros: number): void {
    this.combustible += litros;
    console.log(`⛽ ${this.matricula} repostado ${litros}L — Total: ${this.combustible}L`);
  }

  describir(): string {
    const estado = this.enVuelo ? "En vuelo" : "En tierra";
    return `[${this.matricula}] ${this.modelo} | ${this.combustible}L | ${estado}`;
  }
}

const boeing = new Avion("N739AM", "Boeing 737-800", 30000);
const airbus = new Avion("EC-LFS", "Airbus A320", 25000);

console.log(boeing.describir());
console.log(boeing.despegar());
console.log(boeing.describir());
console.log(boeing.aterrizar());

// Clase para管理 la pista
class Pista {
  numero: string;
  longitud: number; // metros
  ocupada: boolean;

  constructor(numero: string, longitud: number) {
    this.numero = numero;
    this.longitud = longitud;
    this.ocupada = false;
  }

  asignar(): boolean {
    if (this.ocupada) return false;
    this.ocupada = true;
    return true;
  }

  liberar(): void {
    this.ocupada = false;
    console.log(`Pista ${this.numero} liberada`);
  }

  describir(): string {
    const estado = this.ocupada ? "OCUPADA" : "LIBRE";
    return `Pista ${this.numero} (${this.longitud}m) — ${estado}`;
  }
}

console.log(`\n${new Pista("09L-27R", 3900).describir()}`);
console.log(new Pista("09R-27L", 4200).describir());
