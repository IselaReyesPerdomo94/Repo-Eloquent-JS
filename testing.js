let number = 0;
while(number<=12){
  console.log(number);
  number = number + 2;
}


let result = 1;
let counter = 0;

while(counter < 10){
  result = result * 2;
  counter = counter + 1;
}

console.log(result);

let yourName;
do{
  yourName = prompt("What is your name? ");
}while (!yourName);
console.log(yourName);

//the real exercise of the book starts here
//drawing a triangule with #

let part = "# ";
let finish = 7;

for(let i = 1; i < finish; i++){
  for(let pila = 1; pila <= i; pila++){
      document.write(part);}
    document.write("<br>");
}
