print("===== MANIPULACIÓN DE LISTAS - CONTROL DE VUELOS =====")

print("\nCrear una lista")

vacia = []
print(vacia)

numeros_vuelos = [101, 102, 103, 104, 105]
print(numeros_vuelos)

vuelos = ["AV203", "IB450", "LA500"]
print(vuelos)

mixta = ["AV203", 180, 10500.5, True]
print(mixta)

anidada = [
    ["AV203", "Quito"],
    ["IB450", "Madrid"],
    ["LA500", "Guayaquil"]
]
print(anidada)


print("\nAcceso a los elementos de una lista por índice")

print(vuelos[1])      # segundo elemento
print(vuelos[-1])     # último elemento
print(vuelos[1:3])    # desde posición 1 hasta 2
print(vuelos[::-1])   # invertir lista


print("\nCRUD de listas")

vuelos = ["AV203", "IB450", "LA500"]

# Agregar elementos
vuelos.insert(3, "CM300")
vuelos.append("AA700")

print(vuelos)

vuelos.extend(["EM800", "AR900"])

# Modificar
vuelos[0] = "AV204"

print(vuelos)

# Eliminar
vuelos.remove("IB450")

print(vuelos)

eliminado = vuelos.pop(2)

print("Eliminado:", eliminado)
print(vuelos)

del vuelos[0]

print(vuelos)


print("\nBuscar valores en una lista")

print("LA500" in vuelos)

if "LA500" in vuelos:
    print(vuelos.index("LA500"))


print("\nOrdenar una lista")

pasajeros = [180, 120, 250, 90, 200]

print(pasajeros)

pasajeros.sort()
print("Ascendente:", pasajeros)

pasajeros.sort(reverse=True)
print("Descendente:", pasajeros)

ordenada = sorted(pasajeros)

print("Nueva lista ordenada:", ordenada)

print("Lista original:", pasajeros)