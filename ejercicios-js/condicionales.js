dineroC = prompt('¿Cuanto dinero tienes cofla?');
dineroR = prompt('¿Cuanto dinero tienes roberto?');
dineroP = prompt('¿Cuanto dinero tienes pedro?');

if(dineroC >= 0.6 && dineroC < 1){
    alert('Comprate el helado de agua');
}
else if(dineroC >= 1 && dineroC < 1.6){
    alert('Comprate el helado de crema');
}
else if(dineroC >= 1.6 && dineroC < 1.7){
    alert('Comprate el helado de bombom');
}
else if(dineroC >= 1.7 && dineroC < 1.8){
    alert('Comprate el helado de tuca');
}
else if(dineroC >= 1.8 && dineroC < 2.9){
    alert('Comprate el helado de maracuya');
}
else if(dineroC >= 2.9){
    alert('Careta');
}
else{
    alert('Lo siento, pobre de mierda');
}

//Arrays asociativos

let pc = {
    nombre: "Dalto Pc",
    apellido: "Rama"
};

let nombre = pc["nombre"];
let apellido = pc["apellido"];

frase = `
    El nombre de mi pc es: <b>${nombre}</b><br>
    El apellido: <b>${apellido}</b>
`;

document.write(frase);

numero = 0;

while(numero <= 6){
    numero++;
    document.write(numero + "<br>");
}

let numero = 0;

do{
    document.write(numero + "<br>"); 
    numero++;
}while(numero > 6);

let numero = 0;

while(numero < 1000){
    numero++;
    document.write("Numero " + numero + " <br>");
    if(numero == 10){
        break; 
    }
}
document.write("fin");

for(let i = 1; i <= 5; i++){
    if(i == 3){
        continue;
    }
    document.write(i + " <br> ");
}

let animales = ["gato", "perro", "dinosaurio"];

for(animal in animales){
    document.write(animal + "<br>");
}

document.write("<br>");

for(animal of animales){
    document.write(animal + "<br>");
}

array1 = ["maria", "josefa", "roberta"];
array2 = ["pedro", "marcelo", array1, "jaun"];

for(let array in array2){}