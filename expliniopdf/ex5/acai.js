import {acai} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe a quantidade de açaís pedidos: ');
let p=Number(ler());

let vp= acai(p);

console.log(`O valor final da compra será de ${vp}`);