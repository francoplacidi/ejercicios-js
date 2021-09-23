//1
moneyC = prompt('How much money do you have Cofla?');

if(moneyC >= 0.6 && moneyC < 1){
    alert('Buy a water ice cream');
}
else if(moneyC >= 1 && moneyC < 1.6){
    alert('Buy a cream ice cream');
}
else if(moneyC >= 1.6 && moneyC < 1.7){
    alert('Buy a chocolate ice cream');
}
else if(moneyC >= 1.7 && moneyC < 1.8){
    alert('Buy a raspberry ice cream');
}
else if(moneyC >= 1.8 && moneyC < 2.9){
    alert('Buy a passion fruit ice cream');
}
else if(dineroC >= 2.9){
    alert('How much money!');
}
else{
    alert('I`m sorry, you can`t afford any ice cream');
}


//2-Array associative

let pc = {
    name: "Dalto Pc",
    surname: "Rama"
};

let name = pc["name"];
let surname = pc["surname"];

sentence = `
    The name of my pc is: <b>${name}</b><br>
    The surname: <b>${surname}</b>
`;

document.write(sentence);

//3
number = 0;

while(number <= 6){
    number++;
    document.write(number + "<br>");
}

//4
let number = 0;

do{
    document.write(number + "<br>"); 
    number++;
}while(number > 6);

//5
let number = 0;

while(number < 1000){
    number++;
    document.write("Number " + number + " <br>");
    if(number == 10){
        break; 
    }
}
document.write("end");

//6
for(let i = 1; i <= 5; i++){
    if(i == 3){
        continue;
    }
    document.write(i + " <br> ");
}

//7
let animals = ["cat", "dog", "dinosaur"];

for(animal in animals){
    document.write(animal + "<br>");
}

document.write("<br>");

for(animal of animals){
    document.write(animal + "<br>");
}

//8
array1 = ["MaRY", "Josephine", "Roberta"];
array2 = ["Pedro", "Peter", array1, "John"];

for(let array in array2){}
