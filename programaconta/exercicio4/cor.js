import {cores} from './programa.js';

import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe uma cor');
let c1= ler();

console.log('Informe uma segunda cor');
let c2= ler();

let cp1= cores(c1);

let cp2= cores(c2);

console.log(` Para a informação de que a primeira cor é primária, temos que ela é ${cp1}, já para segunda cor temos ${cp2}`);
