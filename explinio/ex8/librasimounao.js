import {librasimounao} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o dia em que a pessoa nasceu para verficarmos se ela é de libra: ');
let d=Number(ler());

console.log('Agora, informe o mês em que a pessoa nasceu: ');
let m=Number(ler());

let r= librasimounao(d, m);

console.log(`Para a informação de que a pessoa é do signo de libra temos: ${r}`);