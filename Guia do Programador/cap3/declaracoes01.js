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