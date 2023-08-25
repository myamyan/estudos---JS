import {contas} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o primeiro número: ');
let n1=Number(ler());

console.log('Informe o segundo número: ');
let n2=Number(ler());

console.log('Por fim, informe a conta a ser feita: \n
a) Soma;\n
b) O produto do primeiro número pelo quadrado do segundo;\n
c) O quadrado do primeiro número;\n
d) Subtração;\n
e) O Quociente da divisão do primeiro número pelo segundo\n
f) O resto da divisão entre o primeiro e o segundo número.');
let opcao=Number(ler());


let vf= contas(n1, n2, opcao);

console.log(`O resultado é: ${vf}`);