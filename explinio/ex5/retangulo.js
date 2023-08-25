import {retangulos} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o valor do primeiro lado do primeiro retangulo: ');
let n1l1=Number(ler());

console.log('Olá, informe o valor do segundo lado do primeiro retangulo: ');
let n1l2=Number(ler());

console.log('Olá, informe o valor do primeiro lado do segundo retangulo: ');
let n2l1=Number(ler());

console.log('Olá, informe o valor do segundo lado do segundo retangulo: ');
let n2l2=Number(ler());


let a= retangulos(n1l1, n1l2, n2l1, n2l2);

console.log(`Os retangulos têm a mesma àrea? ${a}`);