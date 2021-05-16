function bouncer(arr) {
    let newArray = []; //creates a new array
    for (let i = 0; i < arr.length; i++) { //use for to iterate all elements of the arr
        if (arr[i]) newArray.push(arr[i]);// use if to check if the current element is truthy or falsy
    }
    return newArray;
}
console.log(bouncer([7, 'ate', '', false, 9]));

console.log(!!'ate'); //to check for truthy

const match = {teamA: 0, teamB: 1}
if (typeof match.teamA === 'number')
console.log('Team A: ' + match.teamA);

//if (!var) { //checks for falsy
//}

//ALTERNATIVE SOLUTION

function bouncer(arr) {
    return arr.filter(Boolean); //.filter expects a function that returns a boolean value which takes a single argument & returns true or false
}