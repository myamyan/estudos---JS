import {acai} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe a quantidade de açaís tamanho P: ');
let p=Number(ler());

console.log('Informe a quantidade de açaís tamanho M: ');
let m=Number(ler());

console.log('Informe a quantidade de açaís tamanho G: ');
let g=Number(ler());

console.log('Por fim, informe o valor do cupom de desconto: ');
let d=Number(ler());


let vf= acai(p, m, g, d);

console.log(`O valor final da compra, com o cupom de desconto de ${d}%, será de ${vf}`);