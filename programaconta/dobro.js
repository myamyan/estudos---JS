import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite o primeiro número:');
let n1= Number(ler());

console.log('Digite o segundo número:');
let n2= Number(ler());

console.log('Digite o terceiro número:');
let n3= Number(ler());

    let d1= dobro(n1);
    let d2= dobro(n2);
    let d3= dobro(n3);

console.log(`o dobro de ${n1} é ${d1}`);
console.log(`o dobro de ${n2} é ${d2}`);
console.log(`o dobro de ${n3} é ${d3}`);

function dobro ( num){
    let d= num*2;
    return d;
}