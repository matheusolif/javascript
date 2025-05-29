let num = [8, 6, 9 , 4]
num[3]= 7 //adciona na posição 3
num.push(5) //adiciona no final do array
num.unshift(10) //adiciona no começo
let posicao=num.indexOf(9) //busca a posição, se for um valor inexistente, retorna -1
console.log(num)
console.log(` O comprimento do array é de: ${num.length}`)
console.log(`o valor 8 está na posição ${posicao}`)

let presenca = ['Bianca', 'Pedro', 'Carlos', 'Alexandre', 'Raissa']
let pos =presenca.indexOf('Alexandre')
console.log(`Alexandre está na posição ${pos}`)
