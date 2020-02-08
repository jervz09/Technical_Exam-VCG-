let arrPer= [], arrLett= [];
function permutation(letters) {
  for (let i = 0; i < letters.length; i++) {
    let lett = letters.splice(i, 1)[0];  //adding one letter
    arrLett.push(lett);
   //if letters is 0 , add or push in aray(arrPer)
    (letters.length == 0)?arrPer.push(arrLett.slice().join('')):false;       
   permutation(letters);
    letters.splice(i, 0, lett);
    arrLett.pop();
  }
  return arrPer
};
console.log(permutation("ABC".split("")).join(','));
 // Used join(‘,’) to simple form
