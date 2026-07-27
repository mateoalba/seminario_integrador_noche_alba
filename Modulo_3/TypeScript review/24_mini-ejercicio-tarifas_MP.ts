// mini-ejercicio-iva.ts — Control de vuelos (tarifas con impuestos)

const tarifasBase: number[] = [4500, 8200, 12500, 3100, 6700];
const iva: number = 1.16;

const tarifasConImpuesto = tarifasBase.map((t) => Number((t * iva).toFixed(2)));

console.log("=== Tarifas con IVA (16%) ===");
tarifasConImpuesto.forEach((t, i) => {
  const ahorro = tarifasBase[i] * 0.1;
  console.log(`Vuelo ${i + 1}: $${t.toLocaleString("es-MX")} MXN (IVA incluido)`);
});

// Calcular total de una reservación
const reserva: number[] = [8500, 1200, 350]; // vuelo + equipaje + seguro
const totalReserva = reserva.reduce((acc, item) => acc + item, 0);
const totalConImpuesto = Number((totalReserva * iva).toFixed(2));

console.log(`\n=== Resumen de reservación ===`);
console.log(`  Vuelo:      $${reserva[0].toLocaleString()}`);
console.log(`  Equipaje:   $${reserva[1].toLocaleString()}`);
console.log(`  Seguro:     $${reserva[2].toLocaleString()}`);
console.log(`  Subtotal:   $${totalReserva.toLocaleString()}`);
console.log(`  IVA (16%):  $${(totalConImpuesto - totalReserva).toFixed(2)}`);
console.log(`  Total:      $${totalConImpuesto.toLocaleString()}`);
