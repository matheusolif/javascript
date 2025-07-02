function parimp (n) {
    if (n%2==0){
        return'par'
    }else{
        return'impar'
    }
}

//console.log (parimp(233))

//a não tem valor predefinido, B tem 
function soma (a, b = 0) {
    return a + b
}
//console.log (soma(4,10))

function fatorial (numero){
    let fator = 1
    for (let contador = numero; contador> 1; contador --){
        fator = fator * contador
    }
    return fator
}

console.log (fatorial(8))

