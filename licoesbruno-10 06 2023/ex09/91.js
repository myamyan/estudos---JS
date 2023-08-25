import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe a quantidade de notas a serem armazenadas:');
let arm = Number(ler());


let nota = [];

console.log('Informe as notas a serem armazenadas:');

for (let cont = 0; cont < arm; cont++) {

    nota[cont] = Number(ler());

};

console.log('As notas armazenadas foram:');

 for (let item of nota) {

    process.stdout.write(` ${item} -`);

};

console.log();

let x = 0;
let y = '';
for (let cont = 0; cont < arm; cont++) {

    x = nota[cont]+x;
    y = x/arm;

};

console.log('A média entre essas notas é:');
console.log(y);