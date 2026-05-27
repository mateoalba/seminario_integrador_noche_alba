# primera-clase.py

class Vuelo:
    
    # Atributo de clase — compartido por todos los vuelos
    aeropuerto = "Aeropuerto Internacional"

    # Constructor
    def __init__(self, codigo, pasajeros):
        
        # Atributos de instancia
        self.codigo = codigo
        self.pasajeros = pasajeros

    # Método de instancia
    def mostrar_info(self):
        return (
            f"Vuelo {self.codigo} "
            f"con {self.pasajeros} pasajeros."
        )

    def agregar_pasajeros(self, cantidad):
        self.pasajeros += cantidad
        
        print(
            f"Se agregaron {cantidad} pasajeros "
            f"al vuelo {self.codigo}. "
            f"Total actual: {self.pasajeros}"
        )

    # Representación legible
    def __str__(self):
        return f"Vuelo({self.codigo}, {self.pasajeros})"

    # Representación para depuración
    def __repr__(self):
        return (
            f"Vuelo("
            f"codigo={self.codigo!r}, "
            f"pasajeros={self.pasajeros!r})"
        )


# Crear objetos
vuelo1 = Vuelo("AV203", 180)
vuelo2 = Vuelo("IB450", 150)


print(vuelo1.mostrar_info())
print(vuelo2.mostrar_info())

vuelo1.agregar_pasajeros(20)

print(str(vuelo1))
print(repr(vuelo1))

print(Vuelo.aeropuerto)