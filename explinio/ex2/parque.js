import {temperatura} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe a temepatura para verificarmos se deve ir ao parque ou não: ');
let t=Number(ler());

let f= temperatura(t);

console.log(`Devo ir ao parque? ${f}`);