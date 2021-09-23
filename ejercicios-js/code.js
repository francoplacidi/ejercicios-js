//1
let name = prompt('Push your name, please!');
alert("Hello "+name);

let number = 25;
number%=15;
document.write(number);

//2
number1 = 10;
number2 = 5;

result = number1**number2;

alert(result);
//result = number1;

//3
greeting = "Hello Frank";
question = "How are you?";

sentence = greeting.concat(" "+question);
document.write(sentence);

//4
let number1 = 23;
let number2 = "23";

document.write(numero1 !== numero2);

//5
let value1 = true;
let value2 = false;

let result1 = value1 || value2;

document.write(result1);

//6
num1 = 24;
num2 = 12;

affirmation1 = num1 < num2;
affirmation2 = num1 == num2;

document.write(!affirmation1 && !affirmation2);

//7
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

