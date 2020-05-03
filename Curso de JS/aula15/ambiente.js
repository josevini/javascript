let num = [2, 6, 4] // Cria um vetor
num.push(8) // Cria um índice e adiciona um valor automáticamente
num.sort() // Organiza os valores do menor para o maior

console.log(num)
console.log(`O vetor tem ${num.length} posições`)

let n = 6
let pos = num.indexOf(n) // Procura um valor e retorna sua posição

if (pos != -1) {
    console.log(`O valor ${n} está na posição ${pos}`)
} else {
    console.log('Valor não encontrado!')
}