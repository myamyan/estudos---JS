export function temperatura(t){

    let temperatura= '';

    if (t<=37){

        temperatura= 'Normal';
    }

    else if (t>37){

        temperatura= 'Febre';
    }

    else{

        temperatura= 'Febre';
    }

    return temperatura;
}
