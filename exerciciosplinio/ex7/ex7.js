import prompt from 'prompt-sync';
let ler= prompt();

console.log('informe a 1° temperatura em Fahrenheit ');
let fahrenheit1= Number(ler());

console.log('informe a 2°');
let fahrenheit2= Number(ler());

console.log('informe a 3°');
let fahrenheit3= Number(ler());

console.log('informe a 4°');
let fahrenheit4= Number(ler());

console.log('informe a 5°');
let fahrenheit5= Number(ler());

console.log('informe a 6°');
let fahrenheit6= Number(ler());

console.log('informe a 7°');
let fahrenheit7= Number(ler());

console.log('informe a 8°');
let fahrenheit8= Number(ler());

console.log('informe a 9°');
let fahrenheit9= Number(ler());

console.log('informe a 10°');
let fahrenheit10= Number(ler());


let celsius1=(fahrenheit1-32)*(5/9);
let celsius2=(fahrenheit2-32)*(5/9);
let celsius3=(fahrenheit3-32)*(5/9);
let celsius4=(fahrenheit4-32)*(5/9);
let celsius5=(fahrenheit5-32)*(5/9);
let celsius6=(fahrenheit6-32)*(5/9);
let celsius7=(fahrenheit7-32)*(5/9);
let celsius8=(fahrenheit8-32)*(5/9);
let celsius9=(fahrenheit9-32)*(5/9);
let celsius10=(fahrenheit10-32)*(5/9);

console.log(` O valor, em graus Celsius da 1° temperatura ${celsius1} C°, da 2° temperatura ${celsius2} C°, da 3° temperatura ${celsius3} C°, da 4° temperatura ${celsius4} C°, da 5° temperatura ${celsius5} C°, da 6° temperatura ${celsius6} C°, da 7° temperatura ${celsius7} C°, da 8° temperatura ${celsius8} C°, da 9° temperatura ${celsius9} C°, e por fim, da 10° temperatura ${celsius10} C° `);


