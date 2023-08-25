import {reais} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o valor a ser convertido ');
let rs=Number(ler());

let s= reais(rs);

console.log(`Fazendo-se a conversão de ${rs} reais, temos ${s} dólares `);