print("Ciclo while")
contador=1
while contador <=5:
    print(contador)
    contador+=1

dato=""
while dato!="salir":
    dato=input("Escribe algo (o 'salir' para terminar): ")
    print("Escribiste:", dato)

cantidad=int(input("Cuantos productos compro?"))
total=0
contador=0
while contador <= cantidad:
    precio = float(input(f"Precio del producto {contador}:"))
    total += precio
    contador+=1
print("Total a pagar:", total)
if total >=100:
    print("Aplica descuento")
else: 
    print("No aplica descuento")