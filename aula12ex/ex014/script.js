function carregar() {
var msg = window.document.getElementById('msg')
var img = window.document.getElementById('imagem')
var data = new Date()
//var hora = data.getHours()
var hora = 22
msg.innerText = `Agora são ${hora} horas.`
if (hora >= 6 && hora < 12) {
 //bom dia
 img.src = 'manha.png'
 document.body.style.background = '#FCDEC4'
 msg.innerText += `Bom dia!`
} 
else if (hora >= 12 && hora <= 18){
 //boa tarde
 img.src = 'tarde.png'
 document.body.style.background = '#FFAC06'
 msg.innerText += `Boa tarde!`   
}
else if (hora > 18 && hora < 23) {
//boa noite
img.src = 'noite.png'
document.body.style.background = '#09606A'
msg.innerText += `Boa noite!`
}
else {
//boa madrugada
img.src = 'noite.png'
document.body.style.background = '#09606A'
msg.innerText += `Boa madrugada!`
}
}
