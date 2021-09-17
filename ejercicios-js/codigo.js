let nombre = prompt('Push your name, please!');
alert("Hello "+nombre);

let numero = 25;
numero%=15;
document.write(numero);

numero1 = 10;
numero2 = 5;

resultado = numero1**numero2;

alert(resultado);
//resultado = numero1;

saludo = "Hola Franco";
pregunta = "¿Como estas?";

frase = saludo.concat(" "+pregunta);
document.write(frase);

let numero1 = 23;
let numero2 = "23";

document.write(numero1 !== numero2);

let valor1 = true;
let valor2 = false;

let resultado1 = valor1 || valor2;

document.write(resultado1);

num1 = 24;
num2 = 12;

afirmacion1 = num1 < num2;
afirmacion2 = num1 == num2;

document.write(!afirmacion1 && !afirmacion2);

num1 = 24;
num2 = 12;

document.write(num1 > num2 || num1 == num2);

num1 = 12;
num2 = 24;
num3 = 25;
num4 = 92;
num5 = 91;

op = (num1 < num2 || num2 < num3) && (!(num1 !=num2) && num5 != num3);
document.write(op);

