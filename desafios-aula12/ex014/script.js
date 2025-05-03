function carregar () {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
    }else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
    } else {
        img.src = 'fotonoite.png'
    }
}


