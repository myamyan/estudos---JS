import prompt from 'prompt-sync';
let ler = prompt();


console.log('Informe o número a ser calculado a tabela:');
let nt = Number(ler());

for(let cont= 1; cont <= 10; cont ++){

    let x = nt * cont;
    console.log(x);

}