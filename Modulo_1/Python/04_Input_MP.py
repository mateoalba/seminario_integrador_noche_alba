# Solicitar información del vuelo
codigo_vuelo = input("Ingrese el código del vuelo: ")

print("Vuelo registrado:", codigo_vuelo)
print(f"El vuelo {codigo_vuelo} ha sido registrado en el sistema")
print("Vuelo: " + codigo_vuelo)

# Solicitar número de pasajeros
pasajeros_str = input("Ingrese el número de pasajeros: ")

print(f"El vuelo tiene {pasajeros_str} pasajeros")

# Convertir a entero
pasajeros = int(pasajeros_str)

print(f"Si la capacidad se duplica, habría: {pasajeros * 2} pasajeros")