# polimorfismo.py

# POLIMORFISMO POR HERENCIA

class AlertaVuelo:
    """Clase base"""

    def __init__(self, destinatario, mensaje):
        self.destinatario = destinatario
        self.mensaje = mensaje

    def enviar(self):
        raise NotImplementedError(
            "Las subclases deben implementar enviar()"
        )

    def __str__(self):
        return f"{self.__class__.__name__} → {self.destinatario}"


class AlertaPiloto(AlertaVuelo):

    def __init__(self, destinatario, mensaje, vuelo="Sin código"):
        super().__init__(destinatario, mensaje)
        self.vuelo = vuelo

    def enviar(self):
        return (
            f"👨‍✈️ Piloto {self.destinatario}: "
            f"[Vuelo {self.vuelo}] {self.mensaje}"
        )


class AlertaTorreControl(AlertaVuelo):

    def enviar(self):
        return (
            f"🗼 Torre de control: "
            f"{self.mensaje}"
        )


class AlertaPantalla(AlertaVuelo):

    def enviar(self):
        return (
            f"📺 Pantalla aeropuerto: "
            f"{self.mensaje[:50]}..."
        )


class AlertaSMS(AlertaVuelo):

    def enviar(self):
        return (
            f"📱 SMS a {self.destinatario}: "
            f"{self.mensaje}"
        )


# Polimorfismo
def enviar_alertas(alertas):

    for alerta in alertas:
        print(alerta.enviar())


alertas = [

    AlertaPiloto(
        "Carlos",
        "Autorizado para despegar",
        "AV203"
    ),

    AlertaTorreControl(
        "Torre",
        "Vuelo IB450 aproximándose"
    ),

    AlertaPantalla(
        "Pantalla",
        "Vuelo LA500 retrasado por condiciones climáticas"
    ),

    AlertaSMS(
        "0987654321",
        "Su vuelo AV203 iniciará abordaje"
    )
]

print("Enviando alertas:")

enviar_alertas(alertas)


# POLIMORFISMO DUCK TYPING

class Radar:

    def leer(self):
        return "Datos desde radar"

    def escribir(self, datos):
        print(f"Guardando radar: {datos}")


class SensorClima:

    def leer(self):
        return "Datos meteorológicos"

    def escribir(self, datos):
        print(f"Guardando clima: {datos}")


class SistemaGPS:

    def leer(self):
        return "Datos GPS"

    def escribir(self, datos):
        print(f"Guardando GPS: {datos}")


# Funciona con cualquier objeto que tenga leer() y escribir()

def procesar_datos(sistema):

    contenido = sistema.leer()

    print(f"Procesando: {contenido}")

    sistema.escribir(
        f"Resultado_{contenido}"
    )


for sistema in [

    Radar(),
    SensorClima(),
    SistemaGPS()

]:
    procesar_datos(sistema)