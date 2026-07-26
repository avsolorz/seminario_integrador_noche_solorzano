print("if condiciones anidadas")
tipoParticipante = input("Ingrese el tipo de participante (ponente/asistente): ")
pago = input("Ha realizado el pago? (si/no): ")

if tipoParticipante == "ponente":
    if pago == "si":
        print("Acceso completo al evento")
    elif pago == "no":
        print("Debe completar el pago")
else:
    print("Acceso como asistente general")
