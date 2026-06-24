
/*const config = {
  host: "localhost",
  port: 8080,
  debug: true,
  maxConexiones: 100,
};

console.log("=== Configuración activa ===");
for (const clave in config) {
  const valor = config[clave as keyof typeof config];
  console.log(`${clave.padEnd(15)}: ${valor}`);
}*/ 


const notas = { mate: 85, fisica: 70, quimica: 95, historia: 60 };

let aprobadas = 0;

for (const materia in notas) {
  const nota = notas[materia as keyof typeof notas];
  console.log(`${materia}: ${nota}`);
  if (nota >= 70) aprobadas++;
}

console.log(`Aprobadas: ${aprobadas}`);
