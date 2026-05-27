print("===== OPERADORES LÓGICOS - CONTROL DE VUELOS =====")

pista_disponible = True
clima_favorable = False
vuelo_cancelado = False

print(
    pista_disponible,
    "and",
    clima_favorable,
    "=",
    pista_disponible and clima_favorable
)

print(
    pista_disponible,
    "or",
    clima_favorable,
    "=",
    pista_disponible or clima_favorable
)

print(
    "not",
    vuelo_cancelado,
    "=",
    not vuelo_cancelado
)