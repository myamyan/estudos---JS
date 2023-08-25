import {temperature} from './temperature.js';

import prompt from "prompt-sync";
let ler = prompt();

console.log('Digite a temperatura do paciente:');
let t= Number(ler());

let vt= temperature(t);

console.log(` Para a informação de que o paciente está doente, temos que ela é ${vt}`);