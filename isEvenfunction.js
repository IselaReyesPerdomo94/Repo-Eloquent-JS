//making a function that tells you if the number is Even or not

function isEven(n){
    if(n % 2 ==0){
      return "True";
  }
  else if(n % 2==1){
    return "False"
  }
  }
//not recursive function

//Trying recursive function
function even(i){
  function minus2(){
    if(i===0){
      return true;
    }
    if(i < 2)
    {return false}
    else if(i >= 2){
    i =  i - 2;
    }
    if(i == 0){
      return true;
    }
    else if(i != 0){
      return minus2()
    }
  }
  return minus2()
}
