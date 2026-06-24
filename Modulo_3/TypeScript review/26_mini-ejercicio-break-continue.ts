const numeros = [3, 7, 2, 9, 11, 4, 6];

console.log("=== solo pares (continue) ===");
for (const n of numeros) {
  if (n % 2 !== 0) continue;
  console.log(n);
}

console.log("=== detener al > 8 (break) ===");
for (const n of numeros) {
  if (n > 8) break;
  console.log(n);
}
