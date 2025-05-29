let valores = [3, 8, 5, 2, 7]
valores.sort() // coloca valores em ordem
console.log(valores)
/* O sort() em JavaScript, por padrão, ordena os elementos como strings, não como números. Ou seja, ele compara valores como texto.Se quiser que os números sejam ordenados corretamente como números, passe uma função de comparação -> valores.sort((a, b) => a - b);*/ 


//saída sem colchetes e informando a posição(indíce)
/*for (let pos = 0; pos<valores.length; pos++) {
    console.log(`A posição ${pos} tem valor ${valores[pos]}`)
}
*/

//versão mais enxuta de for que funciona somente para array/objetos 
for(let pos in valores) {
    console.log(`A posição de ${pos} tem valor ${valores[pos]}`)
}