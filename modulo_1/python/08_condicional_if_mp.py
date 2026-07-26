print("Condicional if")
print("if simple")
participantes = 3
if participantes > 0:
    print("Evento con participantes registrados")

print("if-else dos caminos")
presupuesto = 2500
if presupuesto >= 5000:
    print("Evento aprobado")
else:
    print("Presupuesto insuficiente")

print("if multiples condiciones")
dias_faltantes = 32
if dias_faltantes < 10:
    print("Evento proximo a realizarse")
elif dias_faltantes < 25:
    print("Preparacion en progreso")
else:
    print("Tiempo suficiente de planificacion")

print("if condiciones anidadas")
confirmado = True
pago_realizado = False
if confirmado:
    if pago_realizado:
        print("Participante inscrito")
    else:
        print("Pago pendiente")
else:
    print("Evento no confirmado")


print("if con operadores logicos")
documento = True
pago = True
if documento and pago:
    print("Inscripcion exitosa")

es_ponente = False
tiene_invitacion = True
if es_ponente or tiene_invitacion:
    print("Puede ingresar al evento")

cancelado = False
if not cancelado:
    print("Evento habilitado")
