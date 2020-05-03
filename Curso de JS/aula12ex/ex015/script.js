function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe-homem.png')
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-homem.png')
            }else if(idade < 50) {
                // adulto
                img.setAttribute('src', 'adulto-homem.png')
            }else {
                // idoso
                img.setAttribute('src', 'idoso-homem.png')
            }
        }else {
            genero = 'mulher'
            if (idade >= 0 && idade < 10) {
                // criança
                img.setAttribute('src', 'bebe-mulher.png')
            }else if (idade < 21) {
                // jovem
                img.setAttribute('src', 'jovem-mulher.png')
            }else if(idade < 50) {
                // adulta
                img.setAttribute('src', 'adulta-mulher.png')
            }else {
                // idosa
                img.setAttribute('src', 'idosa-mulher.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}