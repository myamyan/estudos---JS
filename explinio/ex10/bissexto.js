import {bissexto} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe quantos dias tem o mês de fevereiro para verificarmos se o ano é bissexto: ');
let d=Number(ler());

let r= bissexto(d);

console.log(`Para a afirmação de que o ano é bissexto temos: ${r}`);