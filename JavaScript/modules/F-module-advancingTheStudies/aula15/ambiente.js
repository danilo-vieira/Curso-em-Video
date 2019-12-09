let num = [5, 8, 2, 9, 3]
num.push(1)
//num.push(value) método que adiciona 'value' na ultima pos do array
//num.length atributo que retorna a quantidade de elementos contidos no array
//num.sort() método de ordenação (por padrão ordena em ordem crescente)
//num.indexOf(value) retorna a posição de value (-1 se não foi encontrado)
num.sort()
//console.log(`O vetor tem ${num.length} posições`)
//console.log(num)
for(let count = 0; count < num.length; count++) {
    console.log(num[count])
}
