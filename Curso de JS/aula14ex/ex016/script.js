function contar() {
    let i = window.document.querySelector('input#txti')
    let f = window.document.querySelector('input#txtf')
    let p = window.document.querySelector('input#txtp')
    let res = window.document.querySelector('div#res')

    if (i.value.length == 0 || f.value.length == 0 || p.value.length == 0) {
        res.innerText = 'Impossível contar!'
    } else {
        res.innerHTML = '<p>Contando: </p>'

        i = Number(i.value)
        f = Number(f.value)
        p = Number(p.value)

        switch (p) {
            case 0:
                p = 1
                window.alert('Passo inválido! Considerando PASSO 1')
        }

        if (i < f) {
            for (var c=i; c<=f; c+=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            for (var c=i; c>=f; c-=p) {
                res.innerHTML += ` ${c} \u{1F449}`
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}