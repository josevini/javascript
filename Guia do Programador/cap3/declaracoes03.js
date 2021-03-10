/*
    for/while/do while/for in - estruturas de repetição
*/

var num = 1, end = 5

// for (num; num <= end; num++) {
//     console.log(num)
// }

// while (num <= end) {
//     console.log(num)
//     num += 1
// }

do {
    console.log(num)
    num += 1
} while (num <= end)

console.log('-----------------')

pessoa = {
    nome: 'Vinicius',
    sobrenome: 'Silva'
}

for (valor in pessoa) {
    console.log(pessoa[valor])
}