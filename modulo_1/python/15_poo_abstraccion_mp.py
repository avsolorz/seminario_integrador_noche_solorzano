class Evento:
    tipo = "Proyecto de Evento"

    def __init__(self, nombre, capacidad):
        self.nombre = nombre
        self.capacidad = capacidad

    def describir(self):
        return f"Evento: {self.nombre} con capacidad para {self.capacidad} participantes."

    def ampliar_capacidad(self):
        self.capacidad += 50
        print(f"Capacidad ampliada para {self.nombre}! Ahora tiene {self.capacidad} lugares.")

    def __str__(self):
        return f"Evento({self.nombre}, {self.capacidad})"

    def __repr__(self):
        return f"Evento(nombre={self.nombre!r}, capacidad={self.capacidad!r})"

conferencia = Evento("Cumbre Tecnologica", 300)
taller = Evento("Taller de Emprendimiento", 50)

print(conferencia.describir())
print(taller.describir())
conferencia.ampliar_capacidad()
print(str(conferencia))
print(repr(conferencia))
print(Evento.tipo)
