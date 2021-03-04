/*
    var - declara uma variável
    function - declara uma função
    return - retorna um valor
*/

var nome = 'Vinicius', sobrenome = 'Silva', idade = 18

function showInfo (n, s, i) {
    console.log(`${n} ${s} tem ${i} anos.`)
}

showInfo(nome, sobrenome, idade)

function retornaSoma (n1, n2) {
    var soma = n1 + n2
    return soma
}

var resultado = retornaSoma(3, 4)
console.log(`Resultado: ${resultado}`)
