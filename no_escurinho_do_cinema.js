function solucao(obj){
    // acessos negados
    if(obj.temIngresso === false){
        console.log("ACESSO NEGADO");
    }
    if(obj.temIngresso === true){
    if(obj.idade < obj.censura){
       if(obj.estaComPais === false){
          console.log("ACESSO NEGADO")
          }
       }
    }
    // ACESSO AUTORIZADO MEIA OU INTEIRA 'caso seja menor que a censura e esta com os pais'.
    
    if(obj.temIngresso === true){
        if(obj.idade < obj.censura){
           if(obj.estaComPais === true){
               
               if(obj.temCarteirinha === true){
                  console.log("MEIA");
                  }else if(obj.temCarteirinha === false){
                      if(obj.idade < 18){
                         console.log("MEIA");
                         }else if(obj.idade >= 18){
                                  console.log("INTEIRA");
                                  }
                  }
           }
           }
    }
    
    // ACESSO AUTORIZADO MEIA OU INTEIRA 'caso seja maior que a censura'.
    
    if(obj.temIngresso === true){
        if(obj.idade >= obj.censura){
           if(obj.temCarteirinha === true){
              console.log("MEIA");
              }else if(obj.temCarteirinha === false){
                  if(obj.idade < 18){
                     console.log("MEIA");
                     }else if(obj.idade >= 18){
                              console.log("INTEIRA");
                              }
              }
           }
    }
    
}