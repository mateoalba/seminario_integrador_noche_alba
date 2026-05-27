# herencia.py

class TransporteAereo:

    def __init__(self, codigo, destino, año):
        self.codigo = codigo
        self.destino = destino
        self.año = año
        self._altitud = 0      # protegido

    def despegar(self, incremento):
        self._altitud += incremento
        return self

    def aterrizar(self, decremento):
        self._altitud = max(0, self._altitud - decremento)
        return self

    def __str__(self):
        return (
            f"Vuelo {self.codigo} "
            f"Destino: {self.destino} "
            f"({self.año}) - "
            f"Altitud: {self._altitud} metros"
        )


class AvionComercial(TransporteAereo):

    def __init__(self, codigo, destino, año, pasajeros=180):
        super().__init__(codigo, destino, año)

        self.pasajeros = pasajeros

    def anunciar(self):
        return (
            f"Vuelo {self.codigo}: "
            f"Se solicita a los pasajeros abordar."
        )

    def __str__(self):
        return (
            f"{super().__str__()} "
            f"({self.pasajeros} pasajeros)"
        )


class Helicoptero(TransporteAereo):

    def __init__(self, codigo, destino, año, capacidad):
        super().__init__(codigo, destino, año)

        self.capacidad = capacidad

    def rescate(self):
        return f"Helicóptero {self.codigo} en misión de rescate"

    def __str__(self):
        return (
            f"{super().__str__()} "
            f"({self.capacidad} personas)"
        )


class AvionCarga(AvionComercial):

    def __init__(self, codigo, destino, año, carga):
        super().__init__(codigo, destino, año)

        self.__carga = carga
        self.__combustible = 100

    def recargar_combustible(self, porcentaje=100):
        self.__combustible = min(
            100,
            self.__combustible + porcentaje
        )

        return self

    @property
    def combustible_restante(self):
        return self.__combustible

    def __str__(self):
        return (
            f"{super().__str__()} | "
            f"Carga: {self.__carga} kg | "
            f"Combustible: {self.__combustible}%"
        )


# Uso

carga = AvionCarga(
    "CG450",
    "Madrid",
    2026,
    5000
)

carga.despegar(12000)

print(carga)

print(isinstance(carga, AvionCarga))
print(isinstance(carga, AvionComercial))
print(isinstance(carga, TransporteAereo))
print(isinstance(carga, Helicoptero))


# MRO
print(AvionCarga.__mro__)