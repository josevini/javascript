function cpf_valido () {
    let form_cpf = window.document.getElementById('form_cpf')
    form_cpf.focus()
    let cpf = form_cpf.value
    let novo_cpf = ""
    for (pos in cpf) {
        if (cpf[pos] >= 0 && cpf[pos] <= 9) {
            novo_cpf += cpf[pos]
        }
    }
    if (novo_cpf.length == 11) {
        let digitos = novo_cpf.slice(0, 9)
        let comparadores = novo_cpf.slice(-2)
        let num = 10
        let soma = 0
        for (pos in digitos) {
            soma += (digitos[pos] * num--)
        }
        let comp1 = (soma * 10) % 11
        if (comp1 == comparadores[0]) {
            digitos += comparadores[0]
            num = 11
            soma = 0
            for (pos in digitos) { 
                soma += (digitos[pos] * num--)
            }
            let comp2 = (soma * 10) % 11
            if (comp2 == comparadores[1]) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    } else {
        return false
    }
}

function msg () {
    let res = window.document.getElementById('res')
    if (cpf_valido()) {
        res.innerHTML = `<p>CPF Válido</p>`
    } else {
        res.innerHTML = `<p>CPF Inválido</p>`
    }
}