print("Match -case")
estado = input("Estado del evento iniciar/pausar/cancelar: ")
match estado:
    case "iniciar":
        print("Evento iniciado...")
    case "pausar":
        print("Evento pausado...")
    case "cancelar":
        print("Evento cancelado...")
    case _:
        print(f"Estado {estado} no reconocido")

print("Match - con condiciones")
participantes = int(input("Incluye numero de participantes: "))
match participantes:
    case n if n == 0:
        print(f"{n} es negativo")
    case 0:
        print("Sin participantes")
    case n if n % 2 == 0:
        print(f"El numero {n} de participantes es positivo y par")
    case n:
        print(f"El numero {n} de participantes es positivo e impar")
