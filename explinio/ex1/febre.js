import {temperatura} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe a temepatura: ');
let t=Number(ler());

let f= temperatura(t);

console.log(`Para a afirmação de que o peaciente está com febre, temos: ${f}`);