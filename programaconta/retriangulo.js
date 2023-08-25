import prompt from "prompt-sync";
let ler= prompt();

console.log('Digite o valor da altura');
let altura = Number(ler());

console.log('Digite o valor da largura');
let  largura= Number(ler());

let a1=areaRetangulo(base, altura);
let a2=areaTriangulo(base, altura);,

console.log(`O resultado do retangulo de ${a} e ${l} é ${x}`);
console.log(`O resultado do triângulo de ${a} e ${l} é ${y}`);

function retangulo (a, l){
    let x= a*l;
    return x;
}

function triangulo (a, l){
    
    let y= (a*l)/2;
    return y;
}

