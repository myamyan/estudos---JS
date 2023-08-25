import prompt from "prompt-sync";
let ler = prompt();

console.log('Olá, informe a quantidade de números a serem armazenados:');
let qtd = Number(ler());

let numbers = [];

console.log('Informe os números a serem armazenados:');

for (let cont = 0; cont < qtd; cont++) {
    numbers[cont] = Number(ler());
}

console.log('Os números armazenados foram:\n' + numbers);



console.log();




for(let items of numbers){

    if (items%2 == 0) {
        
        console.log('Os números pares são:' + items);

    }

}

