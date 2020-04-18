function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora <12) {
        img.src = 'manha.png'
        document.body.style.backgroundColor = '#e2cd9f'
        //Bom dia
    }else if (hora >= 12 && hora <= 18) {
        img.src = 'tarde.png'
        document.body.style.backgroundColor = '#b07d66'
        //Boa tarde
    }else {
        img.src = 'noite.png'
        document.body.style.backgroundColor = '#515154'
        //Boa noite
    }
}
