print("===== DICCIONARIOS - CONTROL DE VUELOS =====")

print("\nCrear un diccionario")

vacio = {}

vuelo = {
    "codigo": "AV203",
    "pasajeros": 180,
    "destino": "Madrid"
}

configuracion = dict(
    aeropuerto="Mariscal Sucre",
    pistas=3,
    radar=True
)

print(vuelo)
print(configuracion)


# Acceso
print("\nAcceso a datos")

print(vuelo["codigo"])


# Modificar
print("\nModificar datos")

vuelo["codigo"] = "AV204"

print(vuelo["codigo"])


# Eliminar
print("\nEliminar datos")

del vuelo["pasajeros"]

print(vuelo)


# Verificar existencia
print("\nVerificar claves")

print("codigo" in vuelo)
print("destino" in vuelo)


# Métodos esenciales
print("\nMétodos")

print(vuelo.keys())
print(vuelo.values())
print(vuelo.items())


# Iterar
print("\nRecorrer diccionario")

for clave, valor in vuelo.items():
    print(f"{clave}: {valor}")