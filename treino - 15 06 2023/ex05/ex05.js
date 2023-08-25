import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe um número parar ser calculada a tabela:');
let n = Number(ler());

let x = [];

console.log('A tabela do número ' + n + ' será:');
for (let cont = 0; cont <= 10; cont++) {

    x = n * cont;
    console.log(x);
}






