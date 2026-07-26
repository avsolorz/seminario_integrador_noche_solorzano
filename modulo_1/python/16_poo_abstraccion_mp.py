from abc import ABC, abstractmethod

class ComponenteEvento(ABC):
    def __init__(self, nombre="general"):
        self.nombre = nombre

    @abstractmethod
    def costo(self) -> float:
        pass

    @abstractmethod
    def duracion(self) -> float:
        pass

    def describir(self) -> str:
        return (f"{self.__class__.__name__} {self.nombre}: "
                f"costo={self.costo():.2f}, duracion={self.duracion():.2f}h")

class Conferencia(ComponenteEvento):
    def __init__(self, ponentes, tarifa_ponente, nombre="general"):
        super().__init__(nombre)
        self.ponentes = ponentes
        self.tarifa_ponente = tarifa_ponente

    def costo(self):
        return self.ponentes * self.tarifa_ponente

    def duracion(self):
        return self.ponentes * 1.5

class Taller(ComponenteEvento):
    def __init__(self, participantes, costo_material, nombre="general"):
        super().__init__(nombre)
        self.participantes = participantes
        self.costo_material = costo_material

    def costo(self):
        return self.participantes * self.costo_material

    def duracion(self):
        return 3.0

class Gala(ComponenteEvento):
    def __init__(self, invitados, costo_por_persona, horas, nombre="general"):
        super().__init__(nombre)
        self.invitados = invitados
        self.costo_por_persona = costo_por_persona
        self.horas = horas

    def duracion(self):
        return self.horas

    def costo(self):
        return self.invitados * self.costo_por_persona

componentes = [Conferencia(5, 200, "rojo"), Taller(40, 15, "azul"), Gala(100, 80, 5, "verde")]

for componente in componentes:
    print(componente.describir())

costo_total = sum(c.costo() for c in componentes)
print(f"Costo total: {costo_total:.2f}")
