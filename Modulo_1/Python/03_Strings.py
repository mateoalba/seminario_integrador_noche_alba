cadena_string = "Hola", "Desde", "La", "UTE"
print(cadena_string)
print("Hola", "Desde", "La", "UTE")
print("Hola", "Desde", "La", "UTE", sep=",")
print("Uno", "Dos", "Tres", "4", sep="-")
print("Uno", "Dos", "Tres", "4", end="")
print("Cinco", "Seis", "Siete", "8", sep="-")
print("Uno", "Dos", "Tres", "4", end=" | ")
print("Uno", "Dos", "Tres", "4", end=" | ")

nombre= "Mateo Alba"
edad= 25
print(nombre, edad)
nombre_edad= f"Nombre: {nombre}, Edad: {edad}"
print(nombre_edad)
print(f"Nombre: {nombre}, Edad: {edad}")
print(f"Doble de: {edad}, es {edad * 2}")
print(f"{'Maria':> 20}") ##alinear a la derecha
print(f"{'Maria':< 20}") ##alinear a la izquierda

pi= 3.1416
print(f"{pi:.2f}") ##redondear a 2 decimales
print(f"{pi:.3f}") ##redondear a 3 decimales
print(f"{1000000000000:,}") ##separar por miles