export function quadrados(n1, n2){

    let quadrados= '';
    let c1= n1*n1;
    let c2=n2*n2;
    let a=c1;
    let b=c2;

    if (a==b){

        quadrados= 'sim';
    }

    else if (a!=b){

        quadrados= 'não';
    }

    else{

        quadrados= 'não';
    }

    return quadrados;
}
