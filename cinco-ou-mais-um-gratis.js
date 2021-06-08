function solucao(precos) {
    let ordenado = precos.sort(function(a, b){return a - b});
    let menorValor = ordenado[0];
    
    if (precos.length >= 5){
        console.log(
        ordenado.reduce((a, b) => a + b, 0) - menorValor
        );
    } else {
        console.log(
        ordenado.reduce((a, b) => a + b, 0)
        );
    }
}