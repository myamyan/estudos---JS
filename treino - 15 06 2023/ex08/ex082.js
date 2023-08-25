import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe a quantidade de nomes a serem armazenados: ');
let qtd = Number(ler());


let names = [];


console.log('Informe os nomes a serem armazenados:');
for(let cont= 0; cont<qtd; cont++ ){

    names[cont]= ler();

}

let x = [];

console.log('Os nomes após o filtro serão: ');

for(let items of names){

   x = items.charAt(0);

    if(x== 'l' || x == 'h'){

        console.log (items);

    }

  

}

