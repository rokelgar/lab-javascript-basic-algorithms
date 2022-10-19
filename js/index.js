//initial test

console.log("I´m ready!");

//interaction 1

let hacker1 = "Roberta";
console.log("The driver´s name is", hacker1);

let hacker2 = "Clodoaldo";
console.log("The navigator´s name is", hacker2);

//interaction 2

quant1 = hacker1.length;
quant2 = hacker2.length;

//console.log(quant1);
//console.log(quant2);

if (quant1>quant2){

    console.log("The driver has the longest name, it has",quant1, "characters.");

}else{

    console.log("It seems that the navigator has the longest name, it has", quant2, "characters.");
}


//interaction 3


let i;
//let array = [];
let letter;
let capName = [];

let capital = hacker1.toUpperCase(); 
//console.log(capital);

for (i = 0; i<quant1; i++){

  letter = capital.slice(i,i+1);
  console.log(letter, "");
  //capName(i) = letter + "";
    
}


//   console.log(letter);
    


