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

let x = nota[0];

for (let cont = 0; cont < arm; cont++) {

    if (nota[cont] > x) {
        x = nota[cont]
    }
};

console.log('A maior nota é: ' + x);