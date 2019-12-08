function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value) > ano) { /*VERIFICA SE O FORM ESTÁ VAZIO
                                                        OU SE O ANO É INVÁLIDO*/
        alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img') //CRIANDO TAG IMG
        img.setAttribute('id', 'foto') //CONFIGURANDO ATRIBUTO ID
        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'images/foto-bebe-m.jpg')
            } else if (idade <21) {
                //JOVEM
                img.setAttribute('src', 'images/foto-jovem-m.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'images/foto-adulto-m.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'images/foto-idoso-m.jpg')
            }
        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'images//foto-bebe-f.jpg')
            } else if (idade <21) {
                //JOVEM
                img.setAttribute('src', 'images//foto-jovem-f.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'images//foto-adulto-f.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'images//foto-idoso-f.jpg')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}