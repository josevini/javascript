let cpf = "096.122.324-31"
let novo_cpf = ""
for (pos in cpf) {
    if (cpf[pos] >= 0 && cpf[pos] <= 9) {
        novo_cpf += cpf[pos]
    }
}

