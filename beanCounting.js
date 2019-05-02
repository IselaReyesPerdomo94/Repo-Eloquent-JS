function countBs (string){
  let counter = 0;
  for(let i = 0; i < string.length; i++ ){
    if(string[i]==='B'){
      counter++
    }
  }
  console.log(counter)
}
//this function count the number of B in a string.

function countChar(string, letter){
  let counter = 0;
  for(let i = 0; i < string.length; i++){
    if(string[i]=== letter){
      counter++
    }
  }
  console.log(counter)
}
//this function counts the number of letter that user chose in a string
