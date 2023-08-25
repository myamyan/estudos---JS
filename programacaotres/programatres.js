import prompt from 'prompt-sync'
let ler=prompt()

console.log('qual é o seu nome?');
let a=ler();

console.log('boas vindas ' + a)

console.log('ola, informe um numero para calcular o dobro');
let numero= Number(ler());

let dobro= numero*2;

console.log('O dobro de ' +numero+'será ' +dobro);




