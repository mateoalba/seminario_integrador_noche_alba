// getters-setters.ts — Control de vuelos

class Radar {
  private _frecuencia: number;
  private _rangoKm: number;

  constructor(frecuencia: number, rangoKm: number) {
    this._frecuencia = frecuencia;
    this._rangoKm = rangoKm;
  }

  get frecuencia(): number {
    return this._frecuencia;
  }

  set frecuencia(valor: number) {
    if (valor <= 0) throw new Error("La frecuencia debe ser positiva");
    this._frecuencia = valor;
  }

  get rangoKm(): number {
    return this._rangoKm;
  }

  set rangoKm(valor: number) {
    if (valor <= 0 || valor > 500) throw new Error("Rango debe estar entre 1 y 500 km");
    this._rangoKm = valor;
  }

  get descripcion(): string {
    return `Radar ${this._frecuencia}MHz — Rango: ${this._rangoKm}km`;
  }
}

const radar = new Radar(1030, 250);
console.log(radar.descripcion);

radar.frecuencia = 1215;
console.log(radar.descripcion);

// radar.rangoKm = 600;  // Error: Rango debe estar entre 1 y 500 km

// Ejemplo aplicado — clase Torre de control
class TorreControl {
  private _nombreTorre: string;
  private _vuelosActivos: number = 0;
  private _maximoVuelos: number;

  constructor(nombre: string, maximo: number) {
    this._nombreTorre = nombre;
    this._maximoVuelos = maximo;
  }

  get nombreTorre(): string {
    return this._nombreTorre;
  }

  get vuelosActivos(): number {
    return this._vuelosActivos;
  }

  get capacidadDisponible(): number {
    return this._maximoVuelos - this._vuelosActivos;
  }

  get estaSaturada(): boolean {
    return this._vuelosActivos >= this._maximoVuelos;
  }

  asignarVuelo(codigo: string): boolean {
    if (this.estaSaturada) {
      console.log(`❌ Torre ${this._nombreTorre} saturada — no puede recibir vuelo ${codigo}`);
      return false;
    }
    this._vuelosActivos++;
    console.log(`✅ Vuelo ${codigo} asignado a Torre ${this._nombreTorre} (${this._vuelosActivos}/${this._maximoVuelos})`);
    return true;
  }

  liberarVuelo(): void {
    if (this._vuelosActivos > 0) this._vuelosActivos--;
  }
}

console.log("\n--- Torre de Control ---");
const torre = new TorreControl("Torre Principal", 3);
torre.asignarVuelo("AM215");
torre.asignarVuelo("VY3201");
console.log(`Capacidad restante: ${torre.capacidadDisponible}`);
torre.asignarVuelo("DL478");
torre.asignarVuelo("UA902"); // falla — saturada
