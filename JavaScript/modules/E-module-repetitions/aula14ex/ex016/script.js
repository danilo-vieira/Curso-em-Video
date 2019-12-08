function count() {
    var begin = document.querySelector('input#begin')
    var end = document.querySelector('input#end')
    var step = document.querySelector('input#step')
    var res = document.querySelector('div#res')
    if(begin.value.length == 0 || end.value.length == 0 || step.value.length == 0) {
        res.innerHTML = 'Impossível contar!'
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: <BR>'
        var i = Number(begin.value)
        var f = Number(end.value)
        var p = Number(step.value)
        window.alert('[ERRO] Passo inválido! Considerando PASSO = 1')
        if(p <= 0){
            p = 1
        }
        if(i < f) {
            // Contagem crescente
            for(let c = i; c <= f; c += p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        } else {
            // Contagem decrescente
            for(let c = i; c >= f; c -= p) {
                res.innerHTML += `\u{1F449} ${c} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}