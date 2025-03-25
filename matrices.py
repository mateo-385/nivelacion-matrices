cantidad = int(input('Ingrese la cantidad de personas que desea registrar: '))
personas = []

for i in range(cantidad):
    nombre = input('Ingrese el nombre de la persona: ')
    edad = int(input('Ingrese la edad de la persona: '))
    nota = int(input('Ingrese la nota de la persona: '))
    persona = (nombre, edad, nota)
    personas.append(persona)

print("Lista original:", personas)

por_nota = sorted(personas, key=lambda x: x[2], reverse=True)

print("Lista ordenada por nota:", por_nota)
