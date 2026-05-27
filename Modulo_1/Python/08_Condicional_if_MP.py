print("===== CONDICIONALES IF - CONTROL DE VUELOS =====")


print("if simple")
asientos_disponibles = 15

if asientos_disponibles > 0:
    print("Hay asientos disponibles para el vuelo")


print("\nif else - dos caminos")
combustible = 40

if combustible >= 50:
    print("El avión tiene suficiente combustible para despegar")
else:
    print("Combustible insuficiente")


print("\nif múltiples condiciones")
velocidad_viento = 35

if velocidad_viento < 20:
    print("Condiciones climáticas estables")
elif velocidad_viento < 50:
    print("Viento moderado")
else:
    print("Viento fuerte: posible retraso del vuelo")


print("\nif condiciones anidadas")
pista_disponible = True
permiso_torre = False

if pista_disponible:
    if permiso_torre:
        print("Autorizado para despegar")
    else:
        print("Esperando autorización de la torre")
else:
    print("Pista no disponible")