/*
    if (exp) {bloco} - testa se uma expressão lógica é
    verdadeira se sim, executa o bloco.

    else {bloco} - é executado caso o bloco do if seja falso

    else if - estrutura aninhada

    switch () {} - testa mútiplos valores
*/

var media = 10

if (media < 5) {
    console.log('Reprovado')
} else if (media < 6) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}

console.log('----------------------')

var op = 0

console.log('1 - login\n2 - logout')
switch (op) {
    case 1:
        console.log('Você fez login')
        break
    case 2:
        console.log('Você fez logout')
        break
    default:
        console.log('ERRO')
}