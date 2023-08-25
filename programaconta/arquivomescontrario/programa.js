export function data(mes){

    let data= '';

    if (mes=='Janeiro')
    {

        data= 1;

    }

    else if (data=='Fevereiro')
    {

        mes=2;

    }

    else if (data=='Março')
    {

        mes=3;

    }

    else if (data=='Abril')
    {

        mes=4;

    }

    else if (data=='Maio')
    {

        mes=5;

    }

    else if (data=='Junho')
    {

        mes=6;

    }

    else if (data== 'Julho')
    {

        mes=7;

    }

    else if (data==8)
    {

        mes='Agosto';

    }

    else if (data==9)
    {

        mes='Setembro';

    }

    else if (data==10)
    {

        mes='Outubro';

    }

    else if (data==11)
    {

        mes='Novembro';

    }

    else if (data==12)
    {

        mes='Dezembro';

    }

    else
    {
        mes='Não há mês correspondente'
    }
    
    return mes;

}