// Take the commented ES5 syntax and convert it to ES6 arrow Syntax

let myFunction =  () => {
    console.log("Function was invoked!");
};
myFunction();

/////////

let anotherFunction = param => param;

anotherFunction("Example");

//////////

let add = (param1, param2) => {
  return param1 + param2;
};
add(1,2);

////////////////////

let subtract = (param01, param02) => {
  return param01 - param02;
};
subtract(1,2);


//Stretch

exampleArray = [1,2,3,4];
const triple = exampleArray.map( num => num * 3);

console.log(triple);