var Agora = new Date()
var hora = Agora.getHours()
var min = Agora.getMinutes()
console.log(`Agora são exatamente ${hora} horas e ${min} minutos.`)
if (hora < 12 && hora >= 6 )
{console.log(`Bom dia!!!`)}
else if (hora > 12 && hora < 18)
{console.log(`Boa tarde!!!`)}
else if (hora >= 18)
{console.log(`Boa noite!!!`)}
else if (hora > 0 && hora < 6)
{console.log(`Boa madrugada!!!`)}