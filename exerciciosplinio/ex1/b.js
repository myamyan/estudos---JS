import {quilometragem} from './programa2.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o valor da viagem de taxi ');
let v=Number(ler());

let k= quilometragem(v);

console.log('O valor da corrida foi de '+ k);