function solucao(tempo, distancia) {
    let viagem = 0;
    
    if (tempo < 5){
        console.log('600');
    } else if (tempo > 5 && tempo < 60){
        viagem = ((tempo * 100) + (distancia * 50));
        console.log(viagem);
    } else if (distancia < 100){
        viagem = (distancia * 200);
        console.log(viagem);
    } else {
        viagem = (distancia * 150);
        console.log(viagem);
    }
}