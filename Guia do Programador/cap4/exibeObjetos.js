/*
    Exibindo objetos com for in
*/

pessoa = {
    'nome': 'Vinicius',
    'sobrenome': 'Silva',
    'idade': 18
}

for (campo in pessoa) {
    console.log(pessoa[campo])
}