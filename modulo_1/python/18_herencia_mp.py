class Proyecto:
    def __init__(self, nombre, responsable, anio):
        self.nombre      = nombre
        self.responsable = responsable
        self.anio        = anio
        self._tareas_completadas = 0

    def completar_tarea(self, cantidad):
        self._tareas_completadas += cantidad
        return self

    def revertir_tarea(self, cantidad):
        self._tareas_completadas = max(0, self._tareas_completadas - cantidad)
        return self

    def __str__(self):
        return f"{self.nombre} ({self.responsable}, {self.anio}) — {self._tareas_completadas} tareas"

class EventoCorporativo(Proyecto):
    def __init__(self, nombre, responsable, anio, asistentes=100):
        super().__init__(nombre, responsable, anio)
        self.asistentes = asistentes

    def enviar_invitaciones(self):
        return f"{self.nombre} ({self.responsable}): Invitaciones enviadas a {self.asistentes} personas!"

    def __str__(self):
        return f"{super().__str__()} ({self.asistentes} asistentes)"

class EventoAcademico(Proyecto):
    def __init__(self, nombre, responsable, anio, creditos):
        super().__init__(nombre, responsable, anio)
        self.creditos = creditos

    def emitir_certificados(self):
        return f"Certificados emitidos por {self.creditos} creditos para {self.nombre}"

    def __str__(self):
        return f"{super().__str__()} ({self.creditos} creditos)"

class EventoHibrido(EventoCorporativo):
    def __init__(self, nombre, responsable, anio, plataforma_virtual):
        super().__init__(nombre, responsable, anio)
        self.__plataforma  = plataforma_virtual
        self.__conexiones  = 0

    def conectar(self, cantidad=100):
        self.__conexiones = min(1000, self.__conexiones + cantidad)
        return self

    @property
    def conexiones_activas(self):
        return self.__conexiones

    def __str__(self):
        return (f"{super().__str__()} | "
                f"Plataforma: {self.__plataforma} | "
                f"Conexiones: {self.conexiones_activas}")

evento_hibrido = EventoHibrido("Cumbre Digital 2025", "Direccion General", 2025, "Zoom")
evento_hibrido.completar_tarea(10)
print(evento_hibrido)

print(isinstance(evento_hibrido, EventoHibrido))
print(isinstance(evento_hibrido, EventoCorporativo))
print(isinstance(evento_hibrido, Proyecto))
print(isinstance(evento_hibrido, EventoAcademico))

print(EventoHibrido.__mro__)
