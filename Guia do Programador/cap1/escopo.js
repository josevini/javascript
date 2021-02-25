/*
    Conceitos relativos ao EcmaScript 5

    O uso palavra-chave var cria uma variável de escopo local
    A omissão da palavra-chave var cria uma variável de escopo global
*/

returnMsg1 = function () {
    msg = 'Hello, World!'
    console.log(msg)
}

returnMsg2 = function () {
    var msg = 'Hello, JavaScript!'
    console.log(msg)
}

returnMsg1()
returnMsg2()
console.log(msg)