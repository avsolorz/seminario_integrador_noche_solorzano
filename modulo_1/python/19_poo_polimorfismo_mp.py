class NotificacionEvento:
    def __init__(self, destinatario, mensaje):
        self.destinatario = destinatario
        self.mensaje      = mensaje

    def enviar(self):
        raise NotImplementedError("Las subclases deben implementar enviar()")

    def __str__(self):
        return f"{self.__class__.__name__} → {self.destinatario}"

class NotificacionEmail(NotificacionEvento):
    def __init__(self, destinatario, mensaje, asunto="Sin asunto"):
        super().__init__(destinatario, mensaje)
        self.asunto = asunto

    def enviar(self):
        return f"📧 Email a {self.destinatario}: [{self.asunto}] {self.mensaje}"

class NotificacionSMS(NotificacionEvento):
    MAX_CHARS = 160

    def enviar(self):
        msg = self.mensaje[:self.MAX_CHARS]
        return f"📱 SMS a {self.destinatario}: {msg}"

class NotificacionPush(NotificacionEvento):
    def enviar(self):
        return f"🔔 Push a {self.destinatario}: {self.mensaje[:50]}..."

class NotificacionSlack(NotificacionEvento):
    def __init__(self, canal, mensaje):
        super().__init__(canal, mensaje)

    def enviar(self):
        return f"💬 Slack #{self.destinatario}: {self.mensaje}"

def notificar_todos(notificaciones: list):
    for notif in notificaciones:
        print(f"  {notif.enviar()}")

alertas = [
    NotificacionEmail("organizador@evento.com",  "Tu evento fue confirmado", "Evento #2025"),
    NotificacionSMS("600111222",                 "Tu registro al evento esta completo"),
    NotificacionPush("dispositivo-abc",          "Nuevo participante registrado!"),
    NotificacionSlack("eventos",                 "Evento cancelado — notificar participantes"),
]

print("Enviando notificaciones:")
notificar_todos(alertas)

class InformeLocal:
    def leer(self):   return "datos del evento desde disco local"
    def escribir(self, datos): print(f"Guardando informe en disco: {datos[:30]}...")

class InformeNube:
    def leer(self):   return "datos del evento desde la nube"
    def escribir(self, datos): print(f"Subiendo informe a la nube: {datos[:30]}...")

class InformeBD:
    def leer(self):   return "datos del evento desde base de datos"
    def escribir(self, datos): print(f"Insertando informe en BD: {datos[:30]}...")

def procesar_archivo(archivo):
    contenido = archivo.leer()
    print(f"Procesando: {contenido}")
    archivo.escribir(f"resultado_{contenido}")

for archivo in [InformeLocal(), InformeNube(), InformeBD()]:
    procesar_archivo(archivo)
