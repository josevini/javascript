var points = [
    {x: 0, y: 0},
    {x: 1, y: 1}
]

points.dist = function() {
    var p1 = this[0] // p1 = {x: 0, y: 0}
    var p2 = this[1] // p2 = {x: 1, y: 1}
    var a = p2.x - p1.x // a == 1
    var b = p2.y - p1.y // b == 1
    return Math.sqrt(a*a + b*b) // retorna a raiz quadrada
}

console.log(points.dist())