import {salario} from './programa.js'
import prompt from 'promtpt-sync';
let ler=prompt();

console.log('Olá, informe o número de carros vendidos ');
let c=Number(ler());

console.log('Olá, informe o valor da comissão por cada carro vendido ');
let com=Number(ler());

console.log('Informe o valor total das vendas ');
let v=Number(ler());

console.log('Informe o salário fixo ');
let sf=Number(ler());

let s= salario(c, com, v, sf);

console.log('O valor a receber de salário será de  '+ s);