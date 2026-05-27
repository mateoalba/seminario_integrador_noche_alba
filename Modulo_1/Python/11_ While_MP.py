print("===== CICLO WHILE - CONTROL DE VUELOS =====")

# While básico
contador = 1

while contador <= 5:
    print("Vuelo:", contador)
    contador += 1


# While con entrada de datos
accion = ""

while accion != "salir":
    accion = input("Ingrese una acción (despegar/aterrizar/salir): ")
    print("Acción registrada:", accion)


# Registro de duración de vuelos
cantidad = int(input("\n¿Cuántos vuelos desea registrar?: "))

total_horas = 0
contador = 1

while contador <= cantidad:
    horas = float(input(f"Duración del vuelo {contador} (horas): "))
    
    total_horas += horas
    contador += 1

print(f"Tiempo total acumulado de vuelos: {total_horas} horas")

if total_horas <= 100:
    print("Tráfico aéreo moderado")
else:
    print("Tráfico aéreo alto")