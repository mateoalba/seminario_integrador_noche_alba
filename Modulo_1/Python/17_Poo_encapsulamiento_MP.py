# encapsulamiento.py

class Vuelo:

    def __init__(self, codigo, pasajeros_iniciales=0):
        self.codigo = codigo
        self.__pasajeros = pasajeros_iniciales
        self.__historial = []
        self.__activo = True

        self.__registrar(
            f"Vuelo creado con {pasajeros_iniciales} pasajeros"
        )

    # Getter
    @property
    def pasajeros(self):
        return self.__pasajeros

    @property
    def activo(self):
        return self.__activo

    @property
    def historial(self):
        return list(self.__historial)


    # Métodos públicos
    def agregar_pasajeros(self, cantidad):

        if cantidad <= 0:
            raise ValueError(
                "La cantidad debe ser positiva"
            )

        self.__pasajeros += cantidad

        self.__registrar(
            f"Se agregaron {cantidad} pasajeros"
        )

        return self


    def retirar_pasajeros(self, cantidad):

        if cantidad <= 0:
            raise ValueError(
                "La cantidad debe ser positiva"
            )

        if cantidad > self.__pasajeros:
            raise ValueError(
                f"No hay suficientes pasajeros ({self.__pasajeros})"
            )

        self.__pasajeros -= cantidad

        self.__registrar(
            f"Se retiraron {cantidad} pasajeros"
        )

        return self


    def transferir_pasajeros(self, destino, cantidad):

        self.retirar_pasajeros(cantidad)

        destino.agregar_pasajeros(cantidad)

        self.__registrar(
            f"Transferidos {cantidad} pasajeros al vuelo {destino.codigo}"
        )

        return self


    # Método privado
    def __registrar(self, operacion):

        from datetime import datetime

        hora = datetime.now().strftime("%H:%M:%S")

        self.__historial.append(
            f"[{hora}] {operacion}"
        )


    def __str__(self):
        return (
            f"Vuelo({self.codigo}: "
            f"{self.__pasajeros} pasajeros)"
        )


# Uso

v1 = Vuelo("AV203", 180)
v2 = Vuelo("IB450", 120)

v1.agregar_pasajeros(20).retirar_pasajeros(10)

v1.transferir_pasajeros(v2, 30)

print(v1)
print(v2)

print(f"Pasajeros vuelo AV203: {v1.pasajeros}")

# v1.__pasajeros = 999
# v1.pasajeros = 999


print("\nHistorial:")

for entrada in v1.historial:
    print(entrada)