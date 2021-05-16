function frankenSplice(arr1, arr2, n) {
    let newArray = arr2.slice(); //creates a new array assigned to newArray; 
  for (let i = 0; i < arr1.length; i++) { //iterates through every item in the first array.
    newArray.splice(n, 0, arr1[i]); n++; //for each item in arr1 use splice() to insert the item into index n of newArray
                                        //incrementing the index n by one, we ensure that every item from 
                                        //arr1 is inserted into newArray in the proper index position
  }
  return newArray;
}
console.log(frankenSplice([1,2,3], [4,5,6], 1));