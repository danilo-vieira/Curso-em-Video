function tabuada() {
    var value = document.querySelector('input#value')
    var tab = document.querySelector('select#selTab')
    if(value.value.length == 0){
        window.alert('[ERRO] Por favor, informe um valor!')
    } else {
        var value = Number(value.value)
        tab.innerHTML = ''
        for(var c = 1; c <= 10; c++) {
            var item = document.createElement('option')
            item.text = `${value} * ${c} = ${c * value}`
            item.value = `tab${c}`
            tab.appendChild(item)
        }
    }
}