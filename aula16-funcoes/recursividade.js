//recursividade, função chama ela mesma

function fatorial (numero){
    if (numero === 1) {
        return 1

    }else {
        return numero * fatorial(numero-1) //chamada dentro da própria função
    }
}

console.log (fatorial(5))