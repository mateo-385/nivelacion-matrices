const prompt = require('prompt-sync')()

let cantidad = prompt('Ingrese la cantidad de personas que desea registrar: ')
let personas = []
for (let i = 0; i < cantidad; i++) {
  let nombre = prompt('Ingrese el nombre de la persona: ')
  let edad = prompt('Ingrese la edad de la persona: ')
  let nota = prompt('Ingrese la nota de la persona: ')
  let persona = [nombre, edad, nota]
  personas.push(persona)
}

console.log('Lista original: ', personas)
console.log(
  'Lista ordenada por nota',
  personas.sort((a, b) => b[2] - a[2])
)
