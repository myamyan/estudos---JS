import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite num 1:')
let a= Number(ler());

console.log('Digite num 2:')
let b= Number(ler());

let x= dividir(a,b);

console.log(x)

function dividir ( a, b){
    let x= a / b;
    return x;
}