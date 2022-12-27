function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var hora = 15
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        img.src =  'imagens/fotomanha.png'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        img.scr = 'imagens/fototarde.png'
        document.body.style.background = '#b9846f'
    } else {
        img.scr = 'imagens/fotonoite.png'
        document.body.style.background = '#515154'
    }
}