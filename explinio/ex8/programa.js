export function librasimounao(d, m){

    let librasimounao= '';

    if (d<=23 && m==9 || m==10){

        librasimounao= 'sim';
    }

    else if (d>23 && m!=9 || m!=10){

        librasimounao= 'não';
    }

    else{

        librasimounao= 'não';
    }

    return librasimounao;
}