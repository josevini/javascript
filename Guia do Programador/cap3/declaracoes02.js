/*
    if (exp) {bloco} - testa se uma expressão lógica é
    verdadeira se sim, executa o bloco.

    else {bloco} - é executado caso o bloco do if seja falso

    else if - estrutura aninhada
*/

var media = 10

if (media < 5) {
    console.log('Reprovado')
} else if (media < 6) {
    console.log('Recuperação')
} else {
    console.log('Aprovado')
}