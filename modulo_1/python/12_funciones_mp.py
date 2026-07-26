print("funciones en python")
print("funcion basica")
def registrar_evento():
    print("Evento registrado en el sistema")
registrar_evento()
print("funcion con parametro")
def saludar_organizador(nombre):
    print(f"Bienvenido: {nombre}, al gestor de eventos!")
saludar_organizador("Carlos")
saludar_organizador("Lucia")

print("funcion que devuelve valor con return")
def calcular_ganancia(ingresos, gastos):
    return ingresos - gastos
print(calcular_ganancia(10000, 4000))

print("funcion por posicion y por nombre")
def registrar_participante(nombre, edad, ciudad):
    print(f"Participante: {nombre}, edad: {edad}, ciudad: {ciudad}")
    registrar_participante("Maria", 26, "Quito")
    registrar_participante("Carla", 29, "Guayaquil")
    registrar_participante(ciudad="Cuenca", nombre="Luis", edad=30)

print("funcion con valores por defecto")
def confirmar_asistencia(nombre, estado="Confirmado", nota="!"):
    print(estado, nombre, nota)
confirmar_asistencia("Pedro", "En espera", "...")
confirmar_asistencia("Juan", nota="...")
confirmar_asistencia("Carlos", "Cancelado")

print("funcion con parametros posicionales")
def calcular_total_presupuestos(*args):
    print(f"Parametros recibidos {args}")
    return sum(args)
print(calcular_total_presupuestos(1000, 2000, 3000))
print(calcular_total_presupuestos(500, 1500, 2500, 4000, 6000, 7000, 8000))
print(calcular_total_presupuestos(10000, 20000, 30000))

print("funcion parametros combinados con posicionales")
def mostrar_info(titulo, *datos):
    print(f"Parametros recibidos {datos}, {titulo}")
    print(titulo)
    for dato in datos:
        print(f"- {dato}")
print(mostrar_info("Tareas del Evento", "Logistica", "Catering", "Decoracion"))

print("funcion parametros clave valor variables")
def crear_perfil_evento(**kwargs):
    print(f"Parametros recibidos {kwargs}")
    for clave, valor in kwargs.items():
        print(f"- {clave} - {valor}")
crear_perfil_evento(nombre="Feria de Emprendimiento", ciudad="Quito", fecha="2025-08-15", presupuesto=25000)

print("funcion parametros combinacion con todos los tipos")
def configurar_evento(nombre, *tareas, activo=False, **opciones):
    print(f"Configuracion")
    print(f"Nombre: {nombre}")
    print(f"Tareas: {tareas}")
    print(f"Opciones: {opciones}")
configurar_evento("Cumbre Tech", "Logistica", "Marketing", "Venue", activo=True, capacidad=500, presupuesto=50000)

print("Devolver multiples valores")
def minmax(numeros):
    return min(numeros), max(numeros)

minimo, maximo = minmax([3000, 23000, 234120, 3000, 2000, 3000, 45000])
print("minimo:", minimo, "maximo:", maximo)
_, maximo = minmax([3000, 4000, 67000, 2000, 3000, 45000])
print("maximo:", maximo)
_, minimo = minmax([3200.34, 2000, 3000, 34000])
print("minimo:", minimo)

print("Devolver diccionario en el caso de muchos valores")
def analizar(numeros):
    total = sum(numeros)
    n = len(numeros)
    return {
        "total": total,
        "media": total / n if n > 0 else 0,
        "minimo": min(numeros),
        "maximo": max(numeros),
        "promedio": sum(numeros) / len(numeros),
        "count": n
    }

presupuestos = [1200, 3400, 5400, 6500, 33440, 3000, 2000, 3000]
stats = analizar(presupuestos)
print(f"Total: {stats['total']}")
print(f"Media: {stats['media']}")
print(f"Minimo: {stats['minimo']}")
print(f"Maximo: {stats['maximo']}")
print(f"Promedio: {stats['promedio']}")
print(f"Count: {stats['count']}")

print("funciones lambda")
def duplicar_capacidad(capacidad):
    return capacidad * 2
duplicar = lambda x: x * 2
print(duplicar_capacidad(150))
print(duplicar(150))
suma_presupuestos = lambda a, b: a + b
print(suma_presupuestos(5000, 3000))
