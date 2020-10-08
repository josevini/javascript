let cpf = "096.122.324-31"
let novo_cpf = ""
for (pos in cpf) {
    if (cpf[pos] >= 0 && cpf[pos] <= 9) {
        novo_cpf += cpf[pos]
    }
}

let fatia = novo_cpf.slice(-2)
console.log(fatia[0])