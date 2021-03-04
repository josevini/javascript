/*
    var - declara uma variável
    function - declara uma função
    return - retorna um valor
*/

// Declarando 3 variáveis
var nome = 'Vinicius', sobrenome = 'Silva', idade = 18

// Declarando uma função showInfo com 3 parâmetros
function showInfo (n, s, i) {
    // Exibe valores passados como argumentos
    console.log(`${n} ${s} tem ${i} anos.`)
}

showInfo(nome, sobrenome, idade)

function retornaSoma (n1, n2) {
    /*
        Guarda a soma entre
        dois argumentos
    */
    var soma = n1 + n2
    return soma // retorna a soma
}

var resultado = retornaSoma(3, 4)
console.log(`Resultado: ${resultado}`)
