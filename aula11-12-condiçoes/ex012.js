const agora = new Date()
let hora= agora.getHours ()
console.log (`Agora são ${hora} horas`)


if (hora > 0 && hora < 6) {
    console.log('Boa Madrugada')
}else if (hora <12) {
    console.log ('Bom dia')
} else if (hora <=18) {
    console.log ('Boa tarde')
} else {
    console.log('Boa noite :)')
}