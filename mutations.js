function mutation(arr) { 
  let test = arr[1].toLowerCase(); // makes the string in the array lower case
  let target = arr[0].toLowerCase(); // makes the string in the array lower case
  for (let i = 0; i < test.length; i++) { // loops through the test characters
      if (target.indexOf(test[i]) < 0) return false; // if none is found returns false
  }
  return true; // if all test xters are found returns true
}
console.log(mutation(["hello", "Hello"]));


function mutation(arr) { //
    return arr[1]
    .toLowerCase()
    .split("")
    .every(function(letter) { //every gives you letter by letter to compare ,
        return arr[0].toLowerCase().indexOf(letter) != -1; // which we do using indexOf on the first string
    });
}