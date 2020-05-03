function personalizar() {
    let fundo = window.document.querySelector('input#fundo')
    let tfonte = window.document.querySelector('input#tfonte')
    let cfonte = window.document.querySelector('input#cfonte')
    let fonte = window.document.querySelector('select#fonte')
    let corpo = window.document.body

    corpo.style.background = fundo.value
    corpo.style.fontSize = `${tfonte.value}px`
    corpo.style.color = cfonte.value
    corpo.style.fontFamily = fonte.value
}