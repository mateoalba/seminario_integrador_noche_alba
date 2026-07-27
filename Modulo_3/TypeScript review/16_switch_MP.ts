// switch.ts — Control de vuelos

const faseVuelo: number = 2;

switch (faseVuelo) {
  case 1:
    console.log("Embarque — pasajeros subiendo al avión");
    break;
  case 2:
    console.log("Rodaje — avión moviéndose hacia la pista"); // ← este se ejecuta
    break;
  case 3:
    console.log("Despegue — aceleración en pista");
    break;
  case 4:
    console.log("Ascenso — ganando altitud");
    break;
  case 5:
    console.log("Crucero — en ruta a destino");
    break;
  case 6:
    console.log("Descenso — perdiendo altitud");
    break;
  case 7:
    console.log("Aterrizaje — contacto con pista");
    break;
  default:
    console.log("Fase no reconocida");
}

// Switch con string — estado del vuelo
type EstadoVuelo = "programado" | "embarcando" | "en_vuelo" | "aterrizado" | "cancelado";

function mensajeEstado(estado: EstadoVuelo): string {
  switch (estado) {
    case "programado":
      return "El vuelo está programado para salir a tiempo";
    case "embarcando":
      return "Los pasajeros están subiendo al avión";
    case "en_vuelo":
      return "El vuelo está en el aire";
    case "aterrizado":
      return "El vuelo ha aterrizado exitosamente";
    case "cancelado":
      return "El vuelo ha sido cancelado";
  }
}

console.log(mensajeEstado("embarcando"));   // Los pasajeros están subiendo
console.log(mensajeEstado("en_vuelo"));     // El vuelo está en el aire
