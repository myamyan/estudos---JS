export function semestre(n){

    let semestre= '';

    if (n== Janeiro || n==Fevereiro || n== Março || n== Abril || n==Maio || n==Junho){

        semestre= 'sim';
    }

    else if (n==Julho || n==Setembro || n==Outubro || n==Novembro || n==Dezembro){

        semestre= 'não';
    }

    else{

        semestre= 'não';
    }

    return semestre;
}