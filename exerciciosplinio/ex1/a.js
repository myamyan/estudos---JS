import {corrida} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe a quilometragem da viagem de taxi ');
let k=Number(ler());

let rs= corrida(k);

console.log('O valor da corrida foi de '+ rs);