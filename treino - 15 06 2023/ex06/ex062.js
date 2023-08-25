import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe a quantidade de números a ser calculado o dobro:');
let qtd = Number(ler());

let numbers = [];

console.log('Informe os números a ser calculado o dobro:');
for (let cont = 0; cont < qtd; cont++) {
     numbers[cont] = Number(ler());
    
}


let x = [];

for (let cont = 0; cont < qtd; cont++) {

    x = numbers[cont] * 2;

    console.log('O dobro de ' + numbers[cont] + ' é igual à: ' + x);

}

