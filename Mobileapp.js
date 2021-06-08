function solucao(tempo, distancia) {
    // VIAGENS CURTAS
    if(tempo < 5){
       console.log(600);
       }
    //VIAGENS MEDIAS
    if(tempo >= 5){
        if(tempo <= 60){
        console.log((tempo * 1 + distancia * 0.50) * 100)
        }
        }
    // VIAGENS LONGAS
    if(tempo > 60){
        if(distancia < 100){
           console.log(distancia * 2 * 100);
           }else if(distancia >= 100){
                    console.log(distancia * 1.50 * 100);
                    }
    }
}