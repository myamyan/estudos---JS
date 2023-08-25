import {votos} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o número total de eleitores ');
let e=Number(ler());

console.log('Informe o número de votos brancos');
let b=Number(ler());

console.log('Informe o número de votos nulos ');
let n=Number(ler());

console.log('Informe o número de votos válidos ');
let v=Number(ler());


let nb= votos(e, b);
let nn= votos(e, n);
let nv= votos(e, v);

console.log(`Para a quantidade de ${e} eleitores, temos ${nb}% de votos brancos, ${nn}% de votos nulos, e ${nv}% de votos válidos `);