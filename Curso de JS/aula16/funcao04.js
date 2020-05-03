function fatorial(n) {
    fat = 1
    for (var i = n; i >= 1; i--) {
        fat *= i
    }
    return fat
}

var f = fatorial(3)
console.log(f)
// 3 x 2 x 1 = 6