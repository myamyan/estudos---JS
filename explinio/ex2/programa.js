export function temperatura(t){

    let temperatura= '';

    if (t>=23 || t<=30){

        temperatura= 'sim';
    }

    else if (t>30){

        temperatura= 'não';
    }

    else{

        temperatura= 'não';
    }

    return temperatura;
}
