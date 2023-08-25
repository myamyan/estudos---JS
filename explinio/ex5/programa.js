export function retangulos(n1l1, n1l2, n2l1, n2l2){

    let retangulos= '';
    let c1= n1l1*n1l2;
    let c2=n2l1*n2l2;
    let a=c1;
    let b=c2;

    if (a==b){

        retangulos= 'sim';
    }

    else if (a!=b){

        retangulos= 'não';
    }

    else{

        retangulos= 'não';
    }

    return retangulos;
}
