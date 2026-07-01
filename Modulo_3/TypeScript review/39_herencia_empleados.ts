// --- Ejemplo aplicado: jerarquía de empleados ---

class Empleado {
  constructor(
    public nombre: string,
    protected salarioBase: number
  ) {}

  calcularSalario(): number {
    return this.salarioBase;
  }

  infoLaboral(): string {
    return `${this.nombre} — Salario: $${this.calcularSalario()}`;
  }
}

class Gerente extends Empleado {
  constructor(
    nombre: string,
    salarioBase: number,
    private bonificacion: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.bonificacion;
  }
}

class Vendedor extends Empleado {
  constructor(
    nombre: string,
    salarioBase: number,
    private comision: number,
    private ventasMes: number
  ) {
    super(nombre, salarioBase);
  }

  override calcularSalario(): number {
    return this.salarioBase + this.comision * this.ventasMes;
  }
}

const emp = new Empleado("Carlos", 2000);
const ger = new Gerente("Laura", 3000, 1500);
const vend = new Vendedor("Pedro", 1500, 50, 30);

console.log(emp.infoLaboral());
console.log(ger.infoLaboral());
console.log(vend.infoLaboral());

// --- Mini-ejercicio: Vehículo ---

class Vehiculo {
  constructor(
    public marca: string,
    public velocidadMax: number
  ) {}

  describir(): string {
    return `${this.marca} — Velocidad máxima: ${this.velocidadMax} km/h`;
  }
}

class Automovil extends Vehiculo {
  constructor(
    marca: string,
    velocidadMax: number,
    public numeroPuertas: number
  ) {
    super(marca, velocidadMax);
  }

  override describir(): string {
    return `${this.marca} — ${this.velocidadMax} km/h — ${this.numeroPuertas} puertas`;
  }
}

class Motocicleta extends Vehiculo {
  constructor(
    marca: string,
    velocidadMax: number,
    public tieneSidecar: boolean
  ) {
    super(marca, velocidadMax);
  }

  override describir(): string {
    const sidecar = this.tieneSidecar ? "con sidecar" : "sin sidecar";
    return `${this.marca} — ${this.velocidadMax} km/h — ${sidecar}`;
  }
}

const auto = new Automovil("Toyota", 180, 4);
const moto = new Motocicleta("Harley", 220, true);

console.log(auto.describir());
console.log(moto.describir());
