import {kilos} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o valor em quilogramas ');
let k=Number(ler());

let g= kilos(k);

console.log('O valor em gramas será de '+ g);