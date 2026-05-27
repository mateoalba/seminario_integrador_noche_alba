print("===== FUNCIONES EN PYTHON - CONTROL DE VUELOS =====")

print("\nFunción básica")

def iniciar_sistema():
    print("¡Sistema de control de vuelos iniciado!")

iniciar_sistema()


print("\nFunción con parámetros")

def registrar_vuelo(codigo):
    print(f"Vuelo {codigo} registrado correctamente")

registrar_vuelo("AV203")
registrar_vuelo("IB450")


print("\nFunción con retorno")

def sumar_pasajeros(vuelo1, vuelo2):
    return vuelo1 + vuelo2

print("Total pasajeros:", sumar_pasajeros(120, 80))


print("\nFunción por posición y por nombre")

def presentar_vuelo(codigo, pasajeros, destino):
    print(
        f"Vuelo {codigo}, "
        f"Pasajeros: {pasajeros}, "
        f"Destino: {destino}"
    )

presentar_vuelo("AV203", 180, "Quito")
presentar_vuelo("IB450", 150, "Madrid")
presentar_vuelo(destino="Guayaquil", pasajeros=200, codigo="LA500")


print("\nFunción con valores por defecto")

def estado_vuelo(codigo, estado="En horario", terminal="A"):
    print(f"Vuelo: {codigo} | Estado: {estado} | Terminal: {terminal}")

estado_vuelo("AV203", "Retrasado", "B")
estado_vuelo("IB450", terminal="C")
estado_vuelo("LA500", "Abordando")


print("\nFunción con parámetros posicionales (*args)")

def total_pasajeros(*args):
    print(f"Pasajeros recibidos: {args}")
    return sum(args)

print(total_pasajeros(120, 80, 150))
print(total_pasajeros(200, 100))
print(total_pasajeros(50, 60, 70, 80))


print("\nFunción con parámetros combinados")

def mostrar_vuelos(titulo, *vuelos):
    print(f"Título: {titulo}")

    for vuelo in vuelos:
        print(f"- {vuelo}")

mostrar_vuelos(
    "Vuelos programados",
    "AV203",
    "IB450",
    "LA500"
)


print("\nFunción con clave-valor variables (**kwargs)")

def crear_vuelo(**kwargs):
    print("Datos del vuelo:")

    for clave, valor in kwargs.items():
        print(f"{clave}: {valor}")

crear_vuelo(
    codigo="AV203",
    destino="Madrid",
    pasajeros=180,
    terminal="A"
)


print("\nFunción combinando todos los tipos")

def configurar_torre(aeropuerto, *pistas, activo=False, **opciones):
    print("Configuración del sistema")
    print("Aeropuerto:", aeropuerto)
    print("Pistas:", pistas)
    print("Opciones:", opciones)
    print("Activo:", activo)

configurar_torre(
    "Aeropuerto Internacional",
    1, 2, 3,
    activo=True,
    radar=True,
    clima=True
)


print("\nFunción con múltiples valores")

def minmax_altitud(altitudes):
    return min(altitudes), max(altitudes)

minimo, maximo = minmax_altitud([10500, 8000, 12000, 9500])

print(f"Altitud mínima: {minimo}")
print(f"Altitud máxima: {maximo}")


print("\nDevolver diccionario")

def analizar_vuelos(pasajeros):
    total = sum(pasajeros)
    n = len(pasajeros)

    return {
        "total": total,
        "promedio": total/n if n > 0 else 0,
        "minimo": min(pasajeros) if pasajeros else None,
        "maximo": max(pasajeros) if pasajeros else None,
        "cantidad": n
    }

datos = [180, 150, 200, 120]

stats = analizar_vuelos(datos)

print(f"Total pasajeros: {stats['total']}")
print(f"Promedio: {stats['promedio']}")
print(f"Rango: {stats['minimo']} - {stats['maximo']}")
print(f"Cantidad de vuelos: {stats['cantidad']}")


print("\nFunciones lambda")

def duplicar_pasajeros(numero):
    return numero * 2

duplicar = lambda x: x * 2

print(duplicar_pasajeros(180))
print(duplicar(180))