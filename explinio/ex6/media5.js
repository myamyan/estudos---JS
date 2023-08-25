import {media5} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe 5 notas para verificarmos se você passou de ano ou não: ');

console.log('Primeira nota')
let n1=Number(ler());

console.log('Segunda nota')
let n2=Number(ler());

console.log('Terceira nota')
let n3=Number(ler());

console.log('Quarta nota')
let n4=Number(ler());

console.log('Quinta nota')
let n5=Number(ler());

let r= media5(n1, n2, n3, n4, n5);

console.log(`Para a afirmação de que foi aprovado temos: ${r}`);