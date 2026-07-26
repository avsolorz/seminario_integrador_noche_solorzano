class PresupuestoEvento:
    def __init__(self, organizador, presupuesto_inicial=0):
        self.organizador     = organizador
        self.__presupuesto   = presupuesto_inicial
        self.__historial     = []
        self.__activo        = True
        self.__registrar(f"Presupuesto creado con {presupuesto_inicial}")

    @property
    def presupuesto(self):
        return self.__presupuesto

    @property
    def activo(self):
        return self.__activo

    @property
    def historial(self):
        return list(self.__historial)

    def asignar_fondos(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        self.__presupuesto += cantidad
        self.__registrar(f"Fondos asignados: +{cantidad}")
        return self

    def gastar(self, cantidad):
        if cantidad <= 0:
            raise ValueError("La cantidad debe ser positiva")
        if cantidad > self.__presupuesto:
            raise ValueError(f"Presupuesto insuficiente (disponible: {self.__presupuesto})")
        self.__presupuesto -= cantidad
        self.__registrar(f"Gasto: -{cantidad}")
        return self

    def transferir(self, destino, cantidad):
        self.gastar(cantidad)
        destino.asignar_fondos(cantidad)
        self.__registrar(f"Transferencia a {destino.organizador}: -{cantidad}")
        return self

    def __registrar(self, operacion):
        from datetime import datetime
        hora = datetime.now().strftime("%H:%M:%S")
        self.__historial.append(f"[{hora}] {operacion}")

    def __str__(self):
        return f"Presupuesto({self.organizador}: {self.__presupuesto})"

p1 = PresupuestoEvento("Organizador Principal", 10000)
p2 = PresupuestoEvento("Organizador Secundario", 5000)

p1.asignar_fondos(5000).gastar(2000)
p1.transferir(p2, 3000)

print(p1)
print(p2)
print(f"Presupuesto disponible: {p1.presupuesto}")

for entrada in p1.historial:
    print(f"  {entrada}")
