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
