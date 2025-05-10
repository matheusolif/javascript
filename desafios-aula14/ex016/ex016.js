function contar (){
    let numeroInicial = document.getElementById('idinicio')
    let numeroFinal = document.getElementById('iend')
    let passo  = document.getElementById('ipasso')
    
    if (numeroInicial.value.length == 0 || numeroFinal.value.length == 0 || passo.value.length == 0) {
        alert('Erro!')
    }else {
        alert('Tudo ok')
    }

    // while (numeroFinal<=12 ) {
    //     res.innerHTML= `Contando: ${numeroInicial + passo}`
    // }
}