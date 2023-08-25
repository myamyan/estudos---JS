import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite o primeiro número:');
let n1= Number(ler());

console.log('Digite o segundo número:');
let n2= Number(ler());

console.log('Digite o terceiro número:');
let n3= Number(ler());

let y= media(n1,n2,n3);

console.log(y);

function media ( n1, n2, n3){
    let x= n1+n2+n3;
    let y= x*2;
    return y;
}