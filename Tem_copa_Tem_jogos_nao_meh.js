function solucao(ano) {
	const resto =  ano % 4;
    if(resto === 2){
       console.log("COPA")
       }else if(resto === 0){
                console.log("JOGOS")
                }else{
                    console.log("MEH")
                }   
}