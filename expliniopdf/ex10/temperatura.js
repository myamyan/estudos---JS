import {temperatura} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe a temepatura em Fahrenheit ');
let t=Number(ler());

let c= temperatura(t);

console.log(`A temperatura ${t} F°, convertendo, ficará ${c} C°`);

