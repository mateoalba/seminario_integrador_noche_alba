print("===== MATCH - CASE CONTROL DE VUELOS =====")

accion = input("Acción (despegar/aterrizar/retrasar): ")

match accion:
    case "despegar":
        print("El vuelo iniciará el proceso de despegue...")
        
    case "aterrizar":
        print("El vuelo iniciará el proceso de aterrizaje...")
        
    case "retrasar":
        print("El vuelo ha sido marcado como retrasado...")
        
    case _:
        print(f"La acción '{accion}' no fue reconocida")


print("\n===== MATCH CON CONDICIONES =====")

pasajeros = int(input("Ingrese el número de pasajeros: "))

match pasajeros:
    
    case n if n < 0:
        print(f"{n} no es una cantidad válida de pasajeros")
        
    case 0:
        print("No existen pasajeros registrados")
        
    case n if n % 2 == 0:
        print(f"El vuelo tiene {n} pasajeros y la cantidad es par")
        
    case n:
        print(f"El vuelo tiene {n} pasajeros y la cantidad es impar")