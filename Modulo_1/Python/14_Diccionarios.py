print("Diccionarios")
print("Crear un diccionario")
vacio = {}
persona = {"nombre": "Alice", "edad": 30, "ciudad": "Madrid"}
config=dict(host="localhost", port=8080, debug=True)
#ACCWESO
print(persona["nombre"])
#modificar
persona["nombre"] = "Bob"
print(persona["nombre"])
del persona["edad"]
print(persona)
#verificar
print("nombre" in persona)
print("ciudad" in persona)
#metodos esenciales
print(persona.keys())
print(persona.values())
print(persona.items())
#iterar
for clave, valor in persona.items():
    print(f"{clave}: {valor}")