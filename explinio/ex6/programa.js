export function media5(n1, n2, n3, n4, n5){

    let media5= '';
    let c=(n1+n2+n3+n4+n5)/5;
    let a=c;

    if (a>=6){

        media5= 'sim';
    }

    else if (a<6){

        media5= 'não';
    }

    else{

        media5= 'não';
    }

    return media5;
}