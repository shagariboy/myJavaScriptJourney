function findElement(arr, func) {
    let num = 0;
    for (let i = 0; i < arr.length; i++) { //looks through the array
        num = arr[i];   //num variable is passed into the function, so we set it to each index in our array
        if (func(num)) { //checks each number, if its true, returns that num
            return num;
        }
    }
    return undefined //if none of the numbers in the array pass the functions test,we return undefined 
}

findElement([1,2,3,4], num => num % 2 === 0 )