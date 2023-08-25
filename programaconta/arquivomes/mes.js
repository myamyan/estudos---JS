import {mes} from './programa.js';
import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite o número do mês para dizermos o nome dele')
let data= Number(ler());

let x = mes(data);

console.log(x);
