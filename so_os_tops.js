function solucao(produtos) {
    let valorTotal = 0;
    let valorTop = 0;
    //VALOR VENDA DE TODOS OS ITENS
    for(let item of produtos){
        valorTotal += item.preco;
        }
    //VALOR VENDA DE TODOS OS ITENS TOPS
    for(let item of produtos){
        if(item.preco >= 10000){
            valorTop += item.preco;
        }
    }
    let resultado = {
        totalTop: valorTop,
        percentual: valorTop / valorTotal
    }
    console.log(resultado)

}