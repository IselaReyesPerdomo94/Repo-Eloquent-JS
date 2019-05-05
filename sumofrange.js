function range(start, end){
  let numbers = [];
  for(let i= start; i <= end; i++){
      numbers.push(i);
  }
  return numbers;
}


function suma(array){
    let sumar = 0;
  for(let i = 0; i < array.length; i++){
    sumar = sumar + array[i];
  }
  return sumar;
}

function rangeStep(start, end, step){
  let n = [];
  if(step){
    for(let i = start; i<= end; i += step){
      n.push(i);
      }
    }else {
      for(let k = start; k <= end; k++){
        n.push(i);
      }
    }
    return n;
  }
