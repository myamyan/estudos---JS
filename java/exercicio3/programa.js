export function divida (v1, v2){

    let rdivida =v1-v2;
    let divida = '';
    let valor = rdivida;

    if (rdivida>v1){

        divida='Você está fora do orçamento! Não gaste mais!';

    }

    else if (valor<v1){

        divida='Você está dentro do orçamento!';

    }
    
    if (valor=0){

        divida='Você está dentro do orçamento!';

    }
    
    
    return divida;
 
 }