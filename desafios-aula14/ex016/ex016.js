function contar (){
    let numeroInicial = document.getElementById('idinicio')
    let numeroFinal = document.getElementById('iend')
    let passo  = document.getElementById('ipasso')
    let res = document.getElementById('res')
    
    if (numeroInicial.value.length == 0 || numeroFinal.value.length == 0 || passo.value.length == 0) {
        alert('Erro!')
    }else {
        res.innerHTML = 'Contando... <br>'
        let i =Number(numeroInicial.value)
        let f =Number(numeroFinal.value)
        let p =Number(passo.value)

        if (p <=0){
            alert(`Número do Passo inválido! Cosiderando PASSO 1`)
            p=1
        }

        if ( i < f) {
            //contagem crescente
            // for (let contador=i; contador<=f; contador+= p) {
            // res.innerHTML += `${contador} \u{1F449}`
            // }
            let contador = i
            while (contador <= f) {
                res.innerHTML += `${contador} \u{1F449}`
                contador+=p
                
            }
        }else {
            //contagem regressiva

            for (let contador = i; contador >= f; contador -=p) {
                res.innerHTML += `${contador} \u{1F449}`
            }
        }
        
    }

}