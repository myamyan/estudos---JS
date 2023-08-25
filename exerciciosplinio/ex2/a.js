import {pediatras} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o número total de médicos ');
let me=Number(ler());

console.log('Olá, informe a porcentagem de mulheres ');
let mu=Number(ler());

console.log('Olá, informe a porcentagem de pediatras ');
let p=Number(ler());

let pmm= pediatras(me, mu, p);

console.log('O número de médicas pediatras foi de  '+ pmm);