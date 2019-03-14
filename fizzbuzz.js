//fizzbuzz exercise



for(let n = 1; n <= 100; n++){//para obtener los numeros del 1 al 100
  if(n % 3 ==0 && n % 5 ==0){console.log("fizzbuzz");}//para escribir fizzbuzz si el numero puede ser dividido tanto como 3 como por 5
  else if(n % 3 ==0 || n % 5 ==0){console.log(n % 3 == 0 ? "fizz":"buzz")}//viendo si es posible poner esta cosa aqui
  else{console.log(n);}//si no se cumplen ninguna de estas situaciones escribe el numero
}

for(let n = 1; n <= 100; n++){
  if(n % 3 == 0 && n % 5 == 0){console.log("fizzbuzz")}
  else if(n % 3 == 0){console.log("fizz")}
  else if(n % 5 == 0){console.log("buzz")}
    else {console.log(n)}
    }
