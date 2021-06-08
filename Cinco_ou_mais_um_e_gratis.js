function solucao(precos) {
    let produto = 0;
    let resultadoDesc = 0;
    let resultadoSemDesc = 0;
    let valorFinal = 0;
    //IDENTIFICANDO QUANTOS ITENS TEM NA LISTA
    for(let item of precos){
        produto++
    }
    //valor total dos produtos RESULTADO COM DESCONTO
    if(produto >= 5){
        for(let i = 0;i < precos.length;i++){
            resultadoDesc += precos[i]
        }
        //INSERINDO O VALOR TOTAL DOS PRODUTOS DIMINUINDO PELO DESCONTO;
        var min = Math.min(...precos);
        valorFinal = resultadoDesc - min;
        }else if(produto < 5){
        for(let i = 0;i < precos.length;i++){
            valorFinal += precos[i]
        }
        
    }
    
    
    console.log(valorFinal);
    
}