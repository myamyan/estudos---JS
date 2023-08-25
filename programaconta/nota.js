import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite a primeira nota:');
let n1= Number(ler());

console.log('Digite a segunda nota:');
let n2= Number(ler());

console.log('Digite a terceira nota:');
let n3= Number(ler());

let y= media(n1,n2,n3);

console.log(y);

function media ( n1, n2, n3){
    let x= n1+n2+n3;
    let y= x/3;
    return y;
}