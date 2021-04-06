function gerar() {
var num = parseInt( document.getElementById("numero").value)
var msg = document.getElementById("msg")
for (var cont = 1; cont <= 10; cont++) {
    var resu = num*cont
    msg.innerHTML += `( ${num} x ${cont} = ${resu} )`
}
}