// --- Concepto puro: polimorfismo ---

class Forma {
  nombre(): string { return "Forma"; }
  area(): number { return 0; }
}

class Circulo3 extends Forma {
  constructor(private r: number) { super(); }
  override nombre(): string { return "Círculo"; }
  override area(): number { return Math.PI * this.r ** 2; }
}

class Triangulo extends Forma {
  constructor(private base: number, private altura: number) { super(); }
  override nombre(): string { return "Triángulo"; }
  override area(): number { return (this.base * this.altura) / 2; }
}

class Cuadrado extends Forma {
  constructor(private lado: number) { super(); }
  override nombre(): string { return "Cuadrado"; }
  override area(): number { return this.lado ** 2; }
}

const formas: Forma[] = [
  new Circulo3(3),
  new Triangulo(6, 4),
  new Cuadrado(5),
];

for (const f of formas) {
  console.log(`${f.nombre()}: área = ${f.area().toFixed(2)}`);
}

// --- Ejemplo aplicado: sistema de notificaciones polimórfico ---

abstract class Notificacion {
  constructor(protected destinatario: string, protected mensaje: string) {}

  abstract enviar(): string;

  resumen(): string {
    return `[${this.constructor.name}] → ${this.destinatario}`;
  }
}

class NotificacionEmail extends Notificacion {
  constructor(destinatario: string, mensaje: string, private asunto: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return `Email a <${this.destinatario}> | Asunto: "${this.asunto}" | Cuerpo: ${this.mensaje}`;
  }
}

class NotificacionSMS extends Notificacion {
  constructor(destinatario: string, mensaje: string, private telefono: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return `SMS a ${this.telefono} (${this.destinatario}): ${this.mensaje}`;
  }
}

class NotificacionPush extends Notificacion {
  constructor(destinatario: string, mensaje: string, private dispositivoId: string) {
    super(destinatario, mensaje);
  }

  override enviar(): string {
    return `Push → dispositivo ${this.dispositivoId} (${this.destinatario}): ${this.mensaje}`;
  }
}

const notificaciones: Notificacion[] = [
  new NotificacionEmail("ana@mail.com", "Tu pedido llegó.", "Entrega completada"),
  new NotificacionSMS("Luis", "Tu cita es mañana.", "+52-555-0001"),
  new NotificacionPush("Carlos", "¡Oferta especial!", "dev-abc-123"),
];

function despacharTodas(lista: Notificacion[]): void {
  for (const n of lista) {
    console.log(n.resumen());
    console.log("  >", n.enviar());
  }
}

despacharTodas(notificaciones);

// --- Mini-ejercicio: Descuento ---

abstract class Descuento {
  abstract aplicar(precio: number): number;

  etiqueta(precio: number): string {
    const precioFinal = this.aplicar(precio);
    return `$${precio} → $${precioFinal}`;
  }
}

class DescuentoPorcentaje extends Descuento {
  constructor(private porcentaje: number) {
    super();
  }

  override aplicar(precio: number): number {
    return precio - (precio * this.porcentaje) / 100;
  }
}

class DescuentoFijo extends Descuento {
  constructor(private cantidad: number) {
    super();
  }

  override aplicar(precio: number): number {
    const resultado = precio - this.cantidad;
    return resultado < 0 ? 0 : resultado;
  }
}

class SinDescuento extends Descuento {
  override aplicar(precio: number): number {
    return precio;
  }
}

const descuentos: Descuento[] = [
  new DescuentoPorcentaje(10),
  new DescuentoFijo(15),
  new SinDescuento(),
];

for (const d of descuentos) {
  console.log(d.etiqueta(100));
}
