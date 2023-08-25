import { cores } from './programa.js';

import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe a cor do semaforo: ');
let cor = ler();

let x = cores(cor);

console.log(x);