print("Ciclo while")
contador = 1
while contador <= 5:
    print(contador)
    contador += 1

tarea = ""
while tarea != "salir":
    tarea = input("Escribe una tarea (o 'salir' para terminar): ")
    print("Tarea registrada:", tarea)

cantidad = int(input("Cuantas tareas tiene el evento?"))
total = 0
contador = 0
while contador <= cantidad:
    costo = float(input(f"Costo de la tarea {contador}:"))
    total += costo
    contador += 1
print("Presupuesto total:", total)
if total >= 100:
    print("Aplica descuento")
else:
    print("No aplica descuento")
