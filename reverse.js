let numbers = [1, 2, 3, 4, 5, 6];


function reverseArray(array){
  let newArray = [];
  for(let i = array.length - 1; i >= 0; i--){
    newArray.push(array[i]);
  }
  return newArray;
}


  console.log(reverseArray(numbers));

function reverseArrayInPlace(array){
  for (let i = 0; i < Math.floor(array.length /2); i++) {
    let copy = array[array.length-1-i]
    array[array.length-1-i] = array[i]
    array[i] = copy
  }
  return array
}

console.log(reverseArrayInPlace(numbers));
