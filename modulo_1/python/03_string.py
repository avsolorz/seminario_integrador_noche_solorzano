cadena_string = ("Hola", "Desde", "La", "Ute")
print(cadena_string)
print("Hola", "Desde", "La", "Ute", sep=",")
print("Uno", "Dos", "Tres", "4", sep="-")
print("Uno", "Dos", "Tres", "4", sep=" ")
print("Uno", "Dos", "Tres", "4", sep=" - ")
print("Uno", "Dos", "Tres", "4", sep="|")
print("Uno", "Dos", "Tres", "4", sep="|")

nombre= "Maria Ramos"
edad = 29
print(nombre, edad)
nombre_edad = f"nombre: {nombre}, edad: {edad}"
print(nombre_edad)
print(f"Nombre: {nombre}, edad: {edad}")
print(f"Doble de: {edad} es {edad * 2}")
print(f"{{'Maria' :>15}}") #Alineado a la derecha
print(f"{{'Maria' :<15}}") #Alineado a la izquierda
print(f"{{'Maria' :^15}}") #Alineado al centro

pi = 3.14159 
print(f"Valor de pi: {pi:.2f}") #Limitar a 2 decimales
print(f"{1000000000:,}")