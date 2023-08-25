import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe a quantidade de números a serem armazenados:');
let arm = Number(ler());


let numb = [];


console.log('Informe o(s) número(s) a ser(em) armazenado(s):');

for (let cont = 0; cont < arm; cont++) {

    numb[cont] = Number(ler());

};

console.log('O(s) número(s) armazenado(s) foi(foram):');

for (let item of numb) {


    console.log(item);
    console.log();

};

let x = [];

for (let cont = 0; cont < arm; cont++) {

    x = numb[cont] * 2;

    console.log('O dobro do número ' + numb[cont] + ' é:');
    console.log(x);

};
