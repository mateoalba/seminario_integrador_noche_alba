print("Condicional if")


print("if simple")
stock = 3
if stock > 0:
    print("Producto disponible")


print("if else - dos caminos")
saldo = 25
if saldo >= 50:
    print("Compra permitida")
else:
    print("Saldo insuficiente")


print("if multiples condiciones")
temperatura = 32
if temperatura < 10:
    print("Hace frio")
elif temperatura < 25:
    print("Clima templado")
else:
    print("Hace calor")


print("if condiciones anidadas")
conexion = True
token_valido = False

if conexion:
    if token_valido:
        print("Acceso a la api")
    else:
        print("Token inválido")
else:
    print("Sin conexion")



