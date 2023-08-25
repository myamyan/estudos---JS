import {acai} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe a quantidade de açaís tamanho P: ');
let p=Number(ler());

console.log('Informe a quantidade de açaís tamanho M: ');
let m=Number(ler());

console.log('Informe a quantidade de açaís tamanho G: ');
let g=Number(ler());


let vf= acai(p, m, g);

console.log(`O valor final da compra será de ${vf}`);