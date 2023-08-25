import { ovo } from './programa.js';
import prompt from "prompt-sync";
let ler = prompt();

console.log('escolha uma opção de 1 a 3');
let opcao=Number(ler()); 

let x = ovo(opcao);

console.log(x);