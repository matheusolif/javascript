function verificar() {
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('iano')
    var res = document.querySelector ('div#res')

    let anoNasc = Number(fano.value) //converte a string para número

    if (anoNasc == 0 || anoNasc > ano){
        alert(`Erro!Verifique os dados e tente novamente`)
    } else {
        let fsex = document.getElementsByName('sexo')
        let idade = ano - anoNasc
        let genero = ''
        let img = document.createElement ('img')
        img.setAttribute('id', 'foto')

        

        if (fsex[0].checked) {
            genero  = 'Homem'
            if (idade>=0 && idade <=12) {
                img.setAttribute('src', 'crianca-m.png')
            } else if (idade > 12 && idade < 24) {
                //jovem
                img.setAttribute('src', 'jovem-m.png')
            } else if (idade < 60 ) {
                //adulto
                img.setAttribute('src', 'adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src', 'idoso.png')
            }

        } else if (fsex[1].checked) {
            genero='Mulher'
            if (idade>=0 && idade <=12) {
                //criança
                img.setAttribute('src', 'crianca-f.png')
            }else if (idade > 12 && idade < 24) {
                //jovem
                img.setAttribute('src', 'jovem-f.png')
            } else if (idade < 60 ) {
                //adulto
                img.setAttribute('src', 'adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src', 'idosa.png')
            }
        }
        img.style.display = 'block'
        res.style.textAlign = 'center'
        img.style.margin = '1rem auto 0 auto'
        res.innerHTML = `Você é um(a) ${genero} de ${idade} anos`
        res.appendChild(img)
        
    }
        
}
