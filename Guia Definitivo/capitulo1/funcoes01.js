function plus(x) {
    return x+1
} // mostra o sucessor do valor passado por parâmetro 

var square = function(x) {
    return x*x
} // multiplica o valor informado por ele mesmo

console.log(square(plus(9))) // a function square() recebe plus() como parâmetro