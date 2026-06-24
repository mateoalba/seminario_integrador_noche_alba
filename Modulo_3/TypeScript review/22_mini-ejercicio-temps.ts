const temps = [18, 22, 25, 30, 19, 27];

let max = temps[0];
let suma = 0;

for (const t of temps) {
  if (t > max) max = t;
  suma += t;
}

const promedio = suma / temps.length;
console.log(`Máxima: ${max}`);
console.log(`Promedio: ${promedio}`);
