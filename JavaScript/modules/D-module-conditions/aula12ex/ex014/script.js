function carregar() {
    var msg = document.querySelector('div#msg')
    var img = document.querySelector('img#imagem')
    var data = new Date()
    var hora = data.getHours()
    if(hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(174, 202, 223)'
        msg.innerHTML = `<p>Bom dia</p>`
        msg.innerHTML += `<p>Agora são ${hora} horas.</p>`
    } else if (hora >= 12 && hora <= 18){
        //BOA TARDE
        img.src = 'tarde.jpg'
        document.body.style.background = 'rgb(254, 189, 161)'
        msg.innerHTML = `<p>Boa tarde</p>`
        msg.innerHTML += `<p>Agora são ${hora} horas.</p>`
    } else {
        //BOA NOITE
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(115, 143, 164)'
        msg.innerHTML = `<p>Boa noite</p>`
        msg.innerHTML += `<p>Agora são ${hora} horas.</p>`
    }
}
