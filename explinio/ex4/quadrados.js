import {quadrados} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o valor dos lados do primeiro quadrado: ');
let n1=Number(ler());

console.log('Olá, informe o valor dos lados do segundo quadrado: ');
let n2=Number(ler());


let l= quadrados(n1, n2);

console.log(`Os quadrados têm a mesma àrea? ${l}`);