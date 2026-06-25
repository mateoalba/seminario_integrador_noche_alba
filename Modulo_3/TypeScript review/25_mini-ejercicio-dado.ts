let tiradas = 0;
let resultado = 0;

do {
  resultado = Math.floor(Math.random() * 6) + 1;
  tiradas++;
  console.log(`Tirada ${tiradas}: ${resultado}`);
} while (resultado !== 6);

console.log(`Se necesitaron ${tiradas} tiradas para sacar un 6`);
