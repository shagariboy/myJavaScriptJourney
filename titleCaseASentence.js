//USING A FOR LOOP

function titleCase(str) {
    str = str.toLowerCase(); //lowercase the string
    const words = str.split(' '); //splits the str into an array of strings
for (let i = 0; i < words.length; i++) { // creates a for loop
        words[i] = words[i][0].toUpperCase() + words[i].slice(1); //uppercase th index 0 character of the current string  and then will extract the index 1 to the end of the str
}
return words.join(' '); // joins the returned str
}
  
  console.log(titleCase("I'm a little tea pot"));



 // USING MAP () METHOD
 function titleCase(str) {
     str = str.toLowerCase();
     str = str.split(' ');
     str = str.map(function(word) { //creates a new array with the results of a function on every element in this array
         return(word.charAt(0).toUpperCase() + word.slice(1));
     });
     return str.join(' ');

 } 
 console.log(titleCase("I'm a little tea pot"));



 //USING MAP () AND REPLACE () METHODS
 function titleCase(str) {
    return str.toLowerCase().split(' ').map(function(word) {
        return word.replace(word[0], word[0].toUpperCase());
    }).join(' ');
 }
 console.log(titleCase("I'm a little tea pot"));