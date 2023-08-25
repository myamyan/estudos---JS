import {par} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe um número para verificarmos se ele é par ou não: ');
let n=Number(ler());

let p= par(n);

console.log(`O número é par? ${p}`);