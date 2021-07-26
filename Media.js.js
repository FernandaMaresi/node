
//Programa que calcula média
var readlineSync = require ('readline-sync');
var valor1 = 0;
var valor2 = 0;
var valor3 = 0;
var valor4 = 0;
var valor5 = 0;
var soma = 0;
var media = 0;

//media = ( valor1 + valor2 + valor3 + valor4 + valor5)/5;

console.log('Programa que calcula a média de cinco números');
valor1 = parseFloat(readlineSync.question('Valor 1: '));
valor2 = parseFloat(readlineSync.question('Valor 2: '));
valor3 = parseFloat(readlineSync.question('Valor 3: '));
valor4 = parseFloat(readlineSync.question('VAlor 4: '));
valor5 = parseFloat(readlineSync.question('Valor 5: '));

soma = ( valor1 + valor2 + valor3 + valor4 + valor5);
media = (soma/5);
console.log("A soma "+ soma);
console.log("A média é igual a " + media);

