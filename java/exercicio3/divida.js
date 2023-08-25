import {divida} from './programa.js';

import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe a renda familiar');
let v1= Number(ler()) ;

console.log('Informe os gastos');
let v2= Number(ler()) ;

let valor= divida(v1, v2);

console.log(`Para a informação de que você está no orçamento está: ${valor}`);