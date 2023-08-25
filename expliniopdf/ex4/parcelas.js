import {parcelas} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o valor total da compra ');
let v=Number(ler());

console.log('Olá, informe a quantidade de parcelas ');
let p=Number(ler());


let vp= parcelas(v, p);

console.log(`O valor parcelado será de ${vp}`);