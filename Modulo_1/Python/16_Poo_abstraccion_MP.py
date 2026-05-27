# abstraccion.py
from abc import ABC, abstractmethod

# Clase abstracta
class TransporteAereo(ABC):

    def __init__(self, codigo):
        self.codigo = codigo

    # Métodos abstractos
    @abstractmethod
    def velocidad(self):
        pass

    @abstractmethod
    def capacidad(self):
        pass

    # Método concreto compartido
    def describir(self):
        return (
            f"{self.__class__.__name__} "
            f"Código: {self.codigo}, "
            f"Velocidad: {self.velocidad()} km/h, "
            f"Capacidad: {self.capacidad()} pasajeros"
        )


# Subclase Avión Comercial
class AvionComercial(TransporteAereo):

    def __init__(self, codigo, pasajeros):
        super().__init__(codigo)
        self.pasajeros = pasajeros

    def velocidad(self):
        return 850

    def capacidad(self):
        return self.pasajeros


# Subclase Avión de Carga
class AvionCarga(TransporteAereo):

    def __init__(self, codigo, carga):
        super().__init__(codigo)
        self.carga = carga

    def velocidad(self):
        return 700

    def capacidad(self):
        return self.carga


# Subclase Helicóptero
class Helicoptero(TransporteAereo):

    def __init__(self, codigo, pasajeros):
        super().__init__(codigo)
        self.pasajeros = pasajeros

    def velocidad(self):
        return 300

    def capacidad(self):
        return self.pasajeros


# Polimorfismo
transportes = [
    AvionComercial("AV203", 180),
    AvionCarga("CG450", 1200),
    Helicoptero("HC300", 6)
]

for transporte in transportes:
    print(transporte.describir())


# Total capacidad
capacidad_total = sum(t.capacidad() for t in transportes)

print(f"\nCapacidad total: {capacidad_total}")