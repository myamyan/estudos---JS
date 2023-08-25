import {montante} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o capital: ');
let c=Number(ler());

console.log('Informe a taxa: ');
let t=Number(ler());

console.log('Por fim, informe o tempo em meses: ');
let m=Number(ler());


let vf= montante(c, t, m);

console.log(`O valor final a ser pago será de ${vf}`);