const input = 'Artemis is a goof';

const vowels = ['a', 'e', 'i', 'o', 'u'];

let resultArray = [];

for(let i = 0; i < input.length; i++ ) {
  //console.log('i is ' + i);
  if(input[i] === 'e') {
    resultArray.push(input[i]);
  }
  if(input[i] === 'u') {
    resultArray.push(input[i]);
  }
  for(let j = 0; j < vowels.length; j++) {
    //console.log('j is ' + j);
    if(input[i] === vowels[j]) {
      resultArray.push(input[i]);
    }
  }
}
//console.log(resultArray);
let resultString = resultArray.join('').toUpperCase();
console.log(resultString);
