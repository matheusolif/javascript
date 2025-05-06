function carregar () {
    let msg = window.document.getElementById('msg')
    let img = window.document.getElementById('imagem')

    let data = new Date()
    let hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        img.src = 'fotomanha.png'
        document.body.style.background = '#b9a26e'
        
    }else if (hora >= 12 && hora < 18) {
        img.src = 'fototarde.png'
        document.body.style.background = '#ad743c'
    } else {
        document.getElementById('saudacao').innerHTML = `<h3> Boa noite</h3>`
        img.src = 'fotonoite.png'
        document.body.style.background = '#0d181E'
        
    }
}


