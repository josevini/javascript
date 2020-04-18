let num = window.document.querySelector('input#fnum')
let lista = window.document.querySelector('select#flista')
let res = window.document.querySelector('div#res')
let val = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n) {
    let busca = val.indexOf(n)
    if (busca != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isNumero(Number(num.value)) && !inLista(Number(num.value))) {
        val.push(Number(num.value))
        let op = document.createElement('option')
        op.text = `Valor ${num.value} foi adicionado!`
        lista.appendChild(op)
    } else {
        window.alert('Valor é inválido ou já adicionado na lista!')
    }
    res.innerText = ''
    num.value = ''
    num.focus()
}

function finalizar() {
    if (val.length == 0) {
        window.alert('Adicione algum valor para poder finalizar!')
    } else {
        let comp = val.length
        let maior = val[0]
        let menor = val[0]
        let soma = 0

        for (let pos in val) {
            soma += val[pos]
            if (maior < val[pos]) {
                maior = val[pos]
            }
            if (menor > val[pos]) {
                menor = val[pos]
            }
        }

        let media = soma / comp

        res.innerHTML = `<p>Ao todo, temos ${comp} valores.</p>`
        res.innerHTML += `<p>O maior valor encontrado foi ${maior}</p>`
        res.innerHTML += `<p>O menor valor encontrado foi ${menor}</p>`
        res.innerHTML += `<p>A soma de todos os valores é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }
}