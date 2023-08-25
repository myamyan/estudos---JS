import {semestre} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe um mês para verificarmos se ele faz parte do primeiro semestre: ');
let n=Number(ler());

let r= semestre(n);

console.log(`Para a informção de que o mês informado faz parte do primeiro semestre temos: ${r}`);