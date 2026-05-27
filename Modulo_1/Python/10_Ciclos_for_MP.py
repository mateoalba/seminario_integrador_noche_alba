print("===== CICLOS FOR - CONTROL DE VUELOS =====")

# For básico
print("For básico")

for i in range(1, 6):
    print("Vuelo número:", i)


# Recorrer lista
vuelos = ["AV203", "LA405", "IB320"]
for vuelo in vuelos:
    print("Código de vuelo:", vuelo)


# Control de interrupción
print("\nControl de interrupción")

for i in range(1, 10):
    if i == 3:
        continue   # omite el vuelo 3

    if i == 7:
        break      # detiene el ciclo en el vuelo 7

    print("Procesando vuelo:", i)

else:
    print("Terminado el ciclo")


# For con step
print("\nFor con range step")

for i in range(1, 10, 2):
    print("Puerta:", i)


# For descendente
print("\nFor con range regresivo")

for i in range(10, 0, -1):
    print("Cuenta regresiva para despegue:", i)


# Enumerate
print("\nFor con enumerate")

pilotos = ["Juan", "Luis", "Pedro", "María"]

for indice, piloto in enumerate(pilotos):
    print(indice, piloto)


# Zip
print("\nFor con zip")

horas_vuelo = [1500, 2300, 800, 3100]

for piloto, horas in zip(pilotos, horas_vuelo):
    print(piloto, "-", horas, "horas")


# For anidados
print("\nFor anidados")

for pista in range(1, 4):
    for vuelo in range(1, 4):
        print("Pista:", pista, "Vuelo:", vuelo)


# Promedio de tiempos de vuelo
cantidad = int(input("\nIngrese cantidad de vuelos: "))

suma = 0

for i in range(1, cantidad + 1):
    tiempo = float(input(f"Tiempo del vuelo {i} (horas): "))
    suma += tiempo

promedio = suma / cantidad

print(f"Tiempo promedio de vuelos: {promedio:.2f} horas")

if promedio >= 5:
    print("Vuelos de larga duración")
else:
    print("Vuelos de corta duración")