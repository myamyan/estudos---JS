import {compra} from './compra.js';

import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite o valor total da compra:');
let vc= Number(ler());

console.log('Digite o desconto:');
let vd= Number(ler());

let vt= compra(vc, vd);

console.log(vt);