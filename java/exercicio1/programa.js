export function notas (n1, n2, n3){

    let rf = (n1+n2+n3)/3;
    let notas = '';

    let grade = rf;

    if (grade==0){

        notas='Desistente';

    }

    else if (grade<=3){

        notas='Reprovado';

    }

    else if (grade<=3 && rf>6){

        notas='Recuperação';

    }
    
    
    else if (grade>=6 && grade<8){

        notas='Aprovado';

    }
    
    if (grade>=8){

        notas='Aprovado com sucesso';

    }
    
    
    return notas;
 
 }