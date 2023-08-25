import {medicos} from './programa2.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o número total de médicos ');
let med=Number(ler());

console.log('Olá, informe a porcentagem de mulheres ');
let mul=Number(ler());

let medh= medicos(med, mul);

console.log('O número de médicos homens foi de  '+ medh);