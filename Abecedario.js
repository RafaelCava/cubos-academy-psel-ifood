function solucao(letra, palavras) {
    let errados = 0;
    for(let item of palavras){
        if(letra != item[0]){
           errados++
           }
           }
    console.log(errados)    
}