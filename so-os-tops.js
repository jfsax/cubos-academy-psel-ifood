function solucao(produtos) {
    let valorTop = 0;
    let valorComum = 0;
    let valorTotal;
    
    for (let item of produtos){ 
        const preco = item.preco;
        
        if (preco > 10000){
            valorTop += preco;
        } else {
            valorComum += preco;
        }
        
        valorTotal = valorTop + valorComum;
    }
    
    const resposta = {
        totalTop: valorTop,
        percentual: parseFloat(valorTop / valorTotal)
    }
    
    console.log(resposta);
}