function fatorial(n) {
    let aux = 1
    for(let c = n; c > 1; c--) {
        aux *= c
    }
    return aux
}
console.log(fatorial(5))