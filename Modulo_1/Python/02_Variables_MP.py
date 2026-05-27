from types import NoneType

MAX_VUELOS = 100

# Variables del sistema de control de vuelos
codigo_vuelo = "AV203"
numero_pasajeros = 180
altura_vuelo = 10500.5   # metros
vuelo_activo = True
puerta_embarque = None

print("codigo_vuelo:", codigo_vuelo, "Tipo:", type(codigo_vuelo))
print("numero_pasajeros:", numero_pasajeros, "Tipo:", type(numero_pasajeros))
print("altura_vuelo:", altura_vuelo, "Tipo:", type(altura_vuelo))
print("vuelo_activo:", vuelo_activo, "Tipo:", type(vuelo_activo))
print("puerta_embarque:", puerta_embarque, "Tipo:", type(puerta_embarque))


# Variables con anotaciones de tipo
codigo_vuelo_control: str = "AV203"
pasajeros_registrados: int = 180
altitud_actual: float = 10500.5
estado_vuelo: bool = True
puerta_asignada: NoneType = None

print("codigo_vuelo_control:", codigo_vuelo_control, "Tipo:", type(codigo_vuelo_control))
print("pasajeros_registrados:", pasajeros_registrados, "Tipo:", type(pasajeros_registrados))
print("altitud_actual:", altitud_actual, "Tipo:", type(altitud_actual))
print("estado_vuelo:", estado_vuelo, "Tipo:", type(estado_vuelo))
print("puerta_asignada:", puerta_asignada, "Tipo:", type(puerta_asignada))