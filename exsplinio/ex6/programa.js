export function contas(n1, n2, opcao){

    let contas='';

    if (opcao==a){

        contas=n1+n2;
    }

    else if (opcao==b){

        contas=(n2*n2)*n1;
    }

    else if (opcao==c){

        contas=n1*n1;
    }
        
    else if (opcao==d){

        contas=n1-n2;
    }
        
    else if (opcao==e){

        contas=n1/n2;
    }

    else if (opcao==f){

        contas=n1%n2;
    }

    else{

        contas='Nenhuma opção foi escolhida, então, o programa será encerrado';

    }
        
        
    
    return contas;
}