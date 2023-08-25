import {corprimaria} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe uma cor para verficarmos se ela é primária: ');
let c=Number(ler());

let r= corprimaria(c);

console.log(`Para a informação de que a cor é primária temos: ${r}`);