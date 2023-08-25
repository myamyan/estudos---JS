import prompt from 'prompt-sync';
let ler = prompt();

console.log('Informe a quantidade de nomes a serem armazenados:');
let arm = ler();


let name = [];


console.log('Informe o(s) nome(s) a ser(em) armazenado(s):');

for (let cont = 0; cont < arm; cont++) {

   name[cont] = ler();

};

let x = [];
let y = [];
let filtro1 = [];
let filtro2 = [];
console.log('O(s) nome(s) iniciado(s) por L é(são):');
for (let cont = 0; cont < arm; cont++) {

   x = name[cont].charAt(0);

   filtro1 = x == 'l';
   filtro2 = x == 'h';

   if (filtro1 == true || filtro2 == true) {

      y = name[cont];

   }

   else if (filtro1 != true || filtro2 != true) {

      y = '';

   }

   else {

      y = 'Não há nomes que iniciem com a letra L';

   }

   console.log(y);

};



