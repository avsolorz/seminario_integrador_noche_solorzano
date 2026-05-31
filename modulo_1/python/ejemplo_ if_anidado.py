print("if condiciones anidadas")
tipoUsuario = input("Ingrese el tipo de usuario (gratis/premium): ")
pago = input("¿Ha realizado el pago? (si/no): ")

if tipoUsuario == "premium":
    if pago == "si":
        print("Acceso completo")
    elif pago == "no":
        print("Debe pagar")
else:
    print("Acceso limitado")