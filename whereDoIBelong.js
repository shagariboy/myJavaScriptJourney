function getIndexToIns(arr, num) {
   arr.sort(function(a, b) { //.sort function sorts the array by lowest to highest, from left to right.
       return a - b;
   });
   for (var a = 0; a < arr.length; a++) { //when an item on the array > the num we comparing against, 
       if (arr[a] >= num) return a;       //then we return the index as an integer
   }
   return arr.length;
}

console.log(getIndexToIns([40, 60], 50));

//SOLUTION 2
function getIndexToIns(arr, num) {
    let len = arr.length;
    let smallerCount = 0;
    for (let i = 0; i < len; i++) {//a for loop counting whenever the num input is bigger than an arr input number
        if (num > arr[i]) {
            smallerCount++; //counts how many array numbers are smaller than num
        }
    }
    return smallerCount; // this equals num's position in a sorted array
}
console.log(getIndexToIns([40, 60, 45, 51], 50));


//SOLUTION 3
function getIndexToIns(arr, num) {
    arr.sort(function(a, b) { // sorts existing array
        return a - b;
    });
    let i = 0;
    while (num > arr[i]) { // iterate through the array while checking if num is bigger
        i++; //the loop will stop when num isn't bigger than i and return the last element checked
    }
    return i;
}
console.log(getIndexToIns([40, 60, 45, 51], 50));