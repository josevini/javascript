function tabuada() {
    let num = window.document.querySelector('input#txtn')
    let seltab = window.document.querySelector('select#seltab')

    if (num.value.length == 0) {
        window.alert('Insira um número para ver sua tabuada!')
    } else {
        let n = Number(num.value)
        let c = 1
        seltab.innerText = ''

        while (c <= 10) {
            let op = document.createElement('option')
            op.text = `${n} x ${c} = ${n*c}`
            seltab.appendChild(op)
            c++
        }
    }
}