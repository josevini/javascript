function validar () {
    let form_cpf = window.document.getElementById('form_cpf')
    form_cpf.focus()
    let cpf = form_cpf.value
    let novo_cpf = ""
    for (pos in cpf) {
        if (cpf[pos] >= 0 && cpf[pos] <= 9) {
            novo_cpf += cpf[pos]
        } else {
            return false
        }
    }
    alert(novo_cpf.length)
}