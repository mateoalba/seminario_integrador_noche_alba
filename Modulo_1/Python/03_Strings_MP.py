# Información del aeropuerto y vuelos
cadena_vuelos = "Vuelo", "AV203", "Quito", "Guayaquil"
print(cadena_vuelos)

print("Vuelo", "AV203", "Quito", "Guayaquil")
print("Vuelo", "AV203", "Quito", "Guayaquil", sep=" | ")

print("Puerta", "A1", "Terminal", "Norte", sep="-")

print("Vuelo", "AV203", "Estado", "Abordando", end=" ")
print("Hora", "08:30", "Salida", "AM", sep="-")

print("Pista", "03", "Disponible", "Sí", end=" | ")
print("Control", "Activo", "Torre", "Online", end=" | ")

# Datos del vuelo
codigo_vuelo = "AV203"
pasajeros = 180

print(codigo_vuelo, pasajeros)

datos_vuelo = f"Vuelo: {codigo_vuelo}, Pasajeros: {pasajeros}"
print(datos_vuelo)

print(f"Vuelo: {codigo_vuelo}, Pasajeros: {pasajeros}")

print(f"Capacidad doble de pasajeros: {pasajeros}, es {pasajeros * 2}")

# Alineación de texto
print(f"{'Vuelo AV203':>20}")  # derecha
print(f"{'Vuelo AV203':<20}")  # izquierda

# Formato numérico
altitud = 10500.5678

print(f"{altitud:.2f}")   # 2 decimales
print(f"{altitud:.3f}")   # 3 decimales

total_pasajeros_mes = 1000000
print(f"{total_pasajeros_mes:,}")  # separar miles