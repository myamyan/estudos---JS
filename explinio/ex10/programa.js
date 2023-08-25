export function bissexto(d){

    let bissexto= '';

    if (d==29){

        bissexto= 'é verdadeira';
    }

    else if (d !=29){

        bissexto= 'é falsa';
    }

    else{

        bissexto= 'não';
    }

    return bissexto;
}