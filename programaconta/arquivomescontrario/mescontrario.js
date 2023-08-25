import {mes} from './programa.js';
import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite o nome do mês para dizermos o número dele')
let data= Number(ler());

let x = mes(data);

console.log(x);
