// --- Ejemplo combinado: Sistema de biblioteca ---

interface Prestable {
  prestar(usuario: string): boolean;
  devolver(): void;
  estaDisponible(): boolean;
}

abstract class RecursoBiblioteca implements Prestable {
  private static totalRecursos: number = 0;
  readonly id: number;
  protected _usuarioActual: string | null = null;

  constructor(public titulo: string, public autor: string) {
    RecursoBiblioteca.totalRecursos++;
    this.id = RecursoBiblioteca.totalRecursos;
  }

  static contarRecursos(): number {
    return RecursoBiblioteca.totalRecursos;
  }

  abstract tipo(): string;

  prestar(usuario: string): boolean {
    if (!this.estaDisponible()) return false;
    this._usuarioActual = usuario;
    return true;
  }

  devolver(): void {
    this._usuarioActual = null;
  }

  estaDisponible(): boolean {
    return this._usuarioActual === null;
  }

  ficha(): string {
    const estado = this.estaDisponible()
      ? "Disponible"
      : `Prestado a: ${this._usuarioActual}`;
    return `[${this.tipo()}] #${this.id} "${this.titulo}" — ${this.autor} | ${estado}`;
  }
}

class Libro2 extends RecursoBiblioteca {
  constructor(
    titulo: string,
    autor: string,
    public readonly paginas: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Libro"; }
}

class Revista extends RecursoBiblioteca {
  constructor(
    titulo: string,
    autor: string,
    public readonly edicion: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Revista"; }
}

class AudioLibro extends RecursoBiblioteca {
  constructor(
    titulo: string,
    autor: string,
    public readonly duracionMin: number
  ) {
    super(titulo, autor);
  }

  override tipo(): string { return "Audiolibro"; }

  duracionFormateada(): string {
    const h = Math.floor(this.duracionMin / 60);
    const m = this.duracionMin % 60;
    return `${h}h ${m}m`;
  }
}

const catalogo: RecursoBiblioteca[] = [
  new Libro2("El señor de los anillos", "Tolkien", 1178),
  new Revista("National Geographic", "Varios", 312),
  new AudioLibro("Sapiens", "Harari", 683),
  new Libro2("Clean Code", "Martin", 431),
];

console.log("=== Catálogo de la Biblioteca ===");
for (const recurso of catalogo) {
  console.log(recurso.ficha());
}

console.log(`\nTotal de recursos registrados: ${RecursoBiblioteca.contarRecursos()}`);

catalogo[0].prestar("Ana");
catalogo[2].prestar("Luis");

console.log("\n=== Estado tras préstamos ===");
for (const recurso of catalogo) {
  console.log(recurso.ficha());
}

const audio = catalogo[2] as AudioLibro;
console.log(`\nDuración de "${audio.titulo}": ${audio.duracionFormateada()}`);

catalogo[0].devolver();
console.log(`\n"${catalogo[0].titulo}" disponible: ${catalogo[0].estaDisponible()}`);
