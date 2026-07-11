// Concepto puro
class Producto {
  nombre: string;
  precio: number;
  enStock: boolean;

  constructor(nombre: string, precio: number, enStock: boolean) {
    this.nombre = nombre;
    this.precio = precio;
    this.enStock = enStock;
  }

  // Método: acción que puede realizar la instancia
  describir(): string {
    const estado = this.enStock ? "disponible" : "agotado";
    return `${this.nombre} — $${this.precio} (${estado})`;
  }
}

const teclado = new Producto("Teclado mecánico", 120, true);
const monitor = new Producto("Monitor 4K", 450, false);

console.log(teclado.describir()); // Teclado mecánico — $120 (disponible)
console.log(monitor.describir()); // Monitor 4K — $450 (agotado)



class Temperatura {
  valorCelsius: number;

  constructor(celsius: number) {
    this.valorCelsius = celsius;
  }

  aFahrenheit(): number {
    return this.valorCelsius * 9 / 5 + 32;
  }

  aKelvin(): number {
    return this.valorCelsius + 273.15;
  }

  describir(): string {
    return (
      `${this.valorCelsius}°C = ` +
      `${this.aFahrenheit()}°F = ` +
      `${this.aKelvin()}K`
    );
  }
}

const hervor = new Temperatura(100);
const congelacion = new Temperatura(0);

console.log(hervor.describir());     // 100°C = 212°F = 373.15K
console.log(congelacion.describir()); // 0°C = 32°F = 273.15K



/*Ejemplo de fahrenheit a celsius*/ 

class emperatura {
  valorFa: number;

  constructor(fahrenheit: number) {
    this.valorFa = fahrenheit;
  }

  aCelsius(): number {
    return (this.valorFa - 32) * 5 / 9;
  }

  aKelvin(): number {
    return this.aCelsius()   + 273.15;
  }

  describir(): string {
    return (
      `${this.valorFa}°F = ` +
      `${this.aCelsius()}°C = ` +
      `${this.aKelvin()}K`
    );
  }
}

const Hervor = new emperatura(212);
const Congelacion = new emperatura(32);

console.log(Hervor.describir());     // 100°C = 212°F = 373.15K
console.log(Congelacion.describir()); // 0°C = 32°F = 273.15K