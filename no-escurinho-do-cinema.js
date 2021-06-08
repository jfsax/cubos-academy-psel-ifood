function solucao(obj) {
    if (!obj.temIngresso || obj.idade < obj.censura && !obj.estaComPais) {
        console.log('ACESSO NEGADO');
    } else if (obj.temCarteirinha || obj.idade < 18) {
        console.log('MEIA');
    } else {
        console.log('INTEIRA');
    }
}