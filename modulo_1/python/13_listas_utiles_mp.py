print("Manipulacion de listas")
print("Crear listas")
vacia = []
print(vacia)
capacidades = [100, 200, 300, 400, 500, 600]
print(capacidades)
organizadores = ["Ana", "Pedro", "Carmen", "Sofia"]
print(organizadores)
mixta = [1, 3, "Conferencia", True, "Evento", None, 3.14]
print(mixta)
anidada = [1, 2, [3, 4], 5, 5, [4, 4, [1, 2, 3]]]
print(anidada)

print("Acceso a los elementos de una lista")
print(organizadores[1])
print(organizadores[-1])
print(organizadores[1:3])
print(organizadores[::-1])

print("CRUD de una lista")
tareas = ["logistica", "catering", "decoracion", "invitaciones"]
print(tareas)
tareas.insert(1, "venue")
print(tareas)
tareas.append("fotografia")
print(tareas)
tareas.extend(["seguridad", "sonido"])
tareas[0] = "coordinacion_general"
print(tareas)
tareas.remove("coordinacion_general")
print(tareas)
eliminado = tareas.pop()
print(eliminado)
eliminado = tareas.pop(2)
print(eliminado)
print(tareas)
del tareas[0]
print(tareas)

print("Buscar valores en los elementos de una Lista")
print("seguridad" in tareas)
print(tareas.index("seguridad"))
print(tareas.count("seguridad"))

print("Ordenar una lista")
presupuestos_desordenados = [3000, 2000, 9000, 5000, 4000, 1000]
print(presupuestos_desordenados)

presupuestos_desordenados.sort()
print(presupuestos_desordenados)

presupuestos_desordenados.sort(reverse=True)
print(presupuestos_desordenados)

ordenada = sorted(presupuestos_desordenados)
print(ordenada)
print(presupuestos_desordenados)

print("Diccionarios")
print("Crear diccionarios")
vacio = {}
evento = {"nombre": "Tech Summit", "capacidad": 300, "ciudad": "Quito"}
config = dict(host="localhost", puerto=5432)

print(evento["nombre"])
evento["nombre"] = "Feria de Innovacion"
print(evento)
del evento["capacidad"]
print(evento)
print("nombre" in evento)
print("ciudad" in evento)
print(evento.keys())
print(evento.values())
print(evento.items())
for clave, valor in evento.items():
    print(f"clave: {clave}, valor: {valor}")
