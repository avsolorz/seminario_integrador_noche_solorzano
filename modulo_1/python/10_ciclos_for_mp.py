print("Ciclos for")
print("for basico")
for i in range(1, 6):
    print(i)

tareas = ["planificacion", "logistica", "catering"]
for tarea in tareas:
    print(tarea)

print("control de interrupcion")
for i in range(1, 10):
    if i == 3: continue
    if i == 7: break
    print(i)
else:
    print("termino el ciclo ")

print("for con range step")
for i in range(1, 10, 2):
    print(i)

print("for con range regresivo")
for i in range(10, 0, -1):
    print(i)

print("for con enumerate")
organizadores = ["Ana", "Pedro", "Carmen", "Jorge"]
for indice, organizador in enumerate(organizadores):
    print(indice, organizador)

print("for con zip")
presupuestos = [5000, 3000, 8000, 1500]
for organizador, presupuesto in zip(organizadores, presupuestos):
    print(organizador, presupuesto)

print("for anidados")
for i in range(1, 4):
    for x in range(1, 4):
        print(i, x)

cantidad = int(input(f"Ingrese la cantidad de eventos:"))
suma = 0
for i in range(1, cantidad + 1):
    presupuesto = float(input(f"Presupuesto evento {i}:"))
    suma += presupuesto
promedio = suma / cantidad
print("Presupuesto promedio:", promedio)
if promedio >= 5000:
    print("Presupuesto promedio suficiente")
else:
    print("Presupuesto promedio insuficiente")
