import {notas} from './programa.js';

import prompt from "prompt-sync";
let ler = prompt();

console.log('Informe a primeira nota');
let n1= Number(ler()) ;

console.log('Informe a segunda nota');
let n2= Number(ler()) ;

console.log('Informe a terceira nota');
let n3= Number(ler()) ;

let grade= notas(n1, n2, n3);

console.log(`Para a informação de que o aluno foi aprovado temos que: ${grade}`);

