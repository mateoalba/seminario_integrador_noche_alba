print("Ciclos for")
print("for basico")

for i in range(1,6):
    print(i)

frutas = ["manzana", "banana", "naranja"]
for fruta in frutas:
    print(fruta)

print("Control de interrupcion")
for i in range(1,10):
    if i ==3: continue
    if i == 7: break
    print(i)
else:
    print("Terminado el ciclo")



# For con range step
print("For con range step")
for i in range(1,10,2):
    print(i)

# For con range descendente
print("For con range regresivo")
for i in range(10,0,-1):
    print(i)



print("For con range enumerate")
nombres = ["juan", "Luis", "Pedro", "Maria"]
for indice, nombre in enumerate(nombres):
    print(indice, nombre)


# For con Zip
print("For con Zip")
edades = [15,11,25,36]
for nombre, edad in zip(nombres, edades):
    print(nombre, edad)



#For anidados
print("For anidados")
for x in range(1,4):
    for x in range(1,4):
        print(1, x)



cantidad = int(input("Ingrese cantidad de notas"))
suma = 0
for 1 in range(1, cantidad+1):
    nota = float(input(f"Nota {i}:"))
    suma += nota
promedio = suma / cantidad
print(f"Promedio:", promedio)
if promedio >= 7:
    print("Aprobado")
else:
    print("Reprobado")
