function solucao(joao, andre) {
    if(joao === "PEDRA"){
        if(andre === "PEDRA"){
            console.log("EMPATE");
        }//EMPATE PEDRA
    }
    if(joao === "TESOURA"){
        if(andre === "TESOURA"){
           console.log("EMPATE");
           }//EMPATE TESOURA
    }
    if(joao === "PAPEL"){
       if(andre === "PAPEL"){
          console.log("EMPATE");
          }
       }//EMPATE PAPEL
    //PEDRA GANHA E PERDE 'JOAO'
    if(joao === "PEDRA"){
       if(andre === "TESOURA"){
           console.log("JOAO");
       }else if(andre === "PAPEL"){
                console.log("ANDRE");
                }
       }
    //PAPEL GANHA E PERDE 'JOAO'
    if(joao === "PAPEL"){
       if(andre === "PEDRA"){
          console.log("JOAO");
          }else if(andre === "TESOURA"){
                   console.log("ANDRE");
                   }
       }
    //TESOURA GANHA E PERDE 'JOAO'
    if(joao === "TESOURA"){
        if(andre === "PAPEL"){
           console.log("JOAO");
           }else if(andre === "PEDRA"){
               console.log("ANDRE");
           }
    }
    
}