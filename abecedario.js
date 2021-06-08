function solucao(letra, palavras) {
    let crianca = 0;
    
    for (let item of palavras){        
        if (item[0] !== letra){
            crianca++;
        }
    }
    console.log(crianca);
}