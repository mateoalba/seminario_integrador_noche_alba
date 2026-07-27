// herencia-empleados.ts — Control de vuelos (personal del aeropuerto)

class PersonalAeropuerto {
  constructor(
    public nombre: string,
    protected salarioBase: number
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return `${this.nombre} — Salario: $${this.calcularSalario().toLocaleString()}`;
  }
}

class Piloto extends PersonalAeropuerto {
  constructor(
    nombre: string,
    salarioBase: number,
    private horasVuelo: number,
    private bonoCapitan: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + (this.horasVuelo * 50) + this.bonoCapitan;
  }

  override infoLaboral(): string {
    return `${this.nombre} — Piloto | ${this.horasVuelo}h vuelo | Salario: $${this.calcularSalario().toLocaleString()}`;
  }
}

class ControladorAire extends PersonalAeropuerto {
  constructor(
    nombre: string,
    salarioBase: number,
    private turnoNocturno: boolean
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + (this.turnoNocturno ? 3000 : 0);
  }
}

class Azafata extends PersonalAeropuerto {
  constructor(
    nombre: string,
    salarioBase: number,
    private idiomas: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + (this.idiomas * 500);
  }
}

const piloto = new Piloto("Cap. Rodríguez", 25000, 12500, 8000);
const controlador = new ControladorAire("Ana Torres", 22000, true);
const azafata = new Azafata("María López", 12000, 3);

console.log(piloto.infoLaboral());
console.log(controlador.infoLaboral());
console.log(azafata.infoLaboral());

// Mini-ejercicio: Aeronave
class Aeronave {
  constructor(public marca: string, public velocidadMax: number) {}

  describir(): string {
    return `${this.marca} — Máx: ${this.velocidadMax} km/h`;
  }
}

class Helicoptero extends Aeronave {
  constructor(marca: string, velocidadMax: number, public tipoRotor: string) {
    super(marca, velocidadMax);
  }

  override describir(): string {
    return `${this.marca} — Máx: ${this.velocidadMax} km/h — Rotor: ${this.tipoRotor}`;
  }
}

console.log(`\n${new Helicoptero("Bell 412", 240, "Doble").describir()}`);
