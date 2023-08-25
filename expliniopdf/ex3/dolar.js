import {dolar} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o valor a ser convertido ');
let s=Number(ler());

let rs= dolar(s);

console.log(`Fazendo-se a conversão de ${s} dolares, temos ${rs} reais `);