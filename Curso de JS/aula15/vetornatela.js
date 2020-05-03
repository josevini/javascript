let valores = [2, 4, 6, 8]

/*
console.log(valores)

console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])

for (let pos=0; pos<valores.length; pos++) {
    console.log(`Na posição ${pos}, temos o valor ${valores[pos]}`)
}
*/

for (let pos in valores) {
    console.log(`Na posição ${pos}, temos o valor ${valores[pos]}`)
}