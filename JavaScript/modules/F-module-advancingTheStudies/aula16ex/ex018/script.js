function add() {
    let add = document.querySelector('input#add')
    let select = document.querySelector('select#numbers')
    let res = document.querySelector('div#res')
    res.innerHTML = ''
    if(add.value.length == 0){
        window.alert('[ERRO] Informe um valor para adicionar!')
    } else {
        if(validateData(add.value)) {
            let item = document.createElement('option')
            item.text = `Valor ${add.value} adicionado.`
            item.value = add.value
            item.id = `value_${add.value}`
            select.appendChild(item)
        } else {
            window.alert('[ERRO] Valor inválido ou já encontrado na lista')
        }
        add.value = ''
        add.focus()
    }
}

function validateData(value) {
    let select = document.querySelector('select#numbers')
    if(Number(value) < 1 || Number(value) > 100) {
        return false
    } else {
        for(let count = 0; count < select.length; count++) {
            if(select[count].id == `value_${value}`){
                return false
            }
        }
    }
    return true
}

function finish() {
    let select = document.querySelector('select#numbers')
    let res = document.querySelector('div#res')
    if(select.length == 0) {
        window.alert('[ERRO] Por favor, adicione valores antes de finalizar')
    } else {
        let maior = Number(select[0].value), menor = Number(select[0].value), soma = 0
    for(let count = 0; count < select.length; count++) {
        if(Number(select[count].value) > maior) {
            maior = Number(select[count].value)
        }
        else if(Number(select[count].value) < menor) {
            menor = Number(select[count].value)
        }
        soma += Number(select[count].value)
    }
    res.innerHTML = `<p>Temos ao todo ${select.length} números cadastrados.</p>`
    res.innerHTML += `<p>O maior valor informado foi ${maior}.</p>`
    res.innerHTML += `<p>O menor valor informado foi ${menor}.</p>`
    res.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
    res.innerHTML += `<p>A média dos valores digitados é ${soma/select.length}</p>`
    }
}