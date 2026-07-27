// interfaces-implements.ts — Control de vuelos

interface Serializable {
  serializar(): string;
}

interface Validable {
  esValido(): boolean;
}

class VueloReserva implements Serializable, Validable {
  constructor(
    public id: string,
    public pasajero: string,
    public vuelo: string,
    public precio: number
  ) {}

  serializar(): string {
    return JSON.stringify({
      id: this.id,
      pasajero: this.pasajero,
      vuelo: this.vuelo,
      precio: this.precio,
    });
  }

  esValido(): boolean {
    return this.pasajero.length > 0 && this.vuelo.length > 0 && this.precio > 0;
  }
}

const reserva = new VueloReserva("R-001", "Carlos Méndez", "AM215", 8500);
console.log(reserva.esValido());
console.log(reserva.serializar());

// Ejemplo aplicado — repositorio de vuelos
interface RepositorioLectura<T> {
  buscarPorId(id: string): T | undefined;
  listarTodos(): T[];
}

interface RepositorioEscritura<T> {
  guardar(entidad: T): void;
  eliminar(id: string): boolean;
}

interface Repositorio<T> extends RepositorioLectura<T>, RepositorioEscritura<T> {}

interface VueloEntidad {
  id: string;
  codigo: string;
  destino: string;
}

class RepositorioVuelos implements Repositorio<VueloEntidad> {
  private datos: VueloEntidad[] = [];

  guardar(v: VueloEntidad): void {
    this.datos.push(v);
  }

  eliminar(id: string): boolean {
    const idx = this.datos.findIndex((v) => v.id === id);
    if (idx === -1) return false;
    this.datos.splice(idx, 1);
    return true;
  }

  buscarPorId(id: string): VueloEntidad | undefined {
    return this.datos.find((v) => v.id === id);
  }

  listarTodos(): VueloEntidad[] {
    return [...this.datos];
  }
}

const repo = new RepositorioVuelos();
repo.guardar({ id: "1", codigo: "AM215", destino: "JFK" });
repo.guardar({ id: "2", codigo: "DL478", destino: "LAX" });
console.log(repo.buscarPorId("1"));
console.log(`Total: ${repo.listarTodos().length}`);
repo.eliminar("1");
console.log(`Tras eliminar: ${repo.listarTodos().length}`);

// Mini-ejercicio — Imprimible
interface Imprimible {
  imprimir(): void;
}

class BoardingPass implements Imprimible {
  constructor(
    private vuelo: string,
    private pasajero: string,
    private asiento: string,
    private gate: string
  ) {}

  imprimir(): void {
    console.log(`BOARDING PASS | ${this.vuelo} | ${this.pasajero} | Asiento: ${this.asiento} | Gate: ${this.gate}`);
  }
}

const bp = new BoardingPass("AM215", "Carlos Méndez", "14A", "B42");
bp.imprimir();
