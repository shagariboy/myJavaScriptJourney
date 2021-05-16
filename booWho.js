function booWho(bool) {
return typeof bool === "boolean"; //the operator typeof checks if the variable is boolean; if it is, returns true; if it is not, returns false
  }
  
  console.log(booWho("true"));


  // All constructor functions, with the exception of the function constructor, will always be typeof 'object'
  let str = new String('String');
  let num = new Number(100);
  typeof str; //it will return 'object'
  typeof num; //it will return 'object'
  let func = new Function();
  typeof func; //It will return 'function'
  