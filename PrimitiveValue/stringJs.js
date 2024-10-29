// This is string primitive.
let str1 = 'this is first string';
let str2 = 'this is second string';

// This is string object.
let str3 = new String('String Object in Javascript.');


// two ways to access character in a string.
// first is charAt().
// second is : treat string as an array-like object.
// when treating string as an array we can only access string.
// treating string as an array we can't delete or add string.
// Example is as follow:

let str4 = 'some text';
let x = str4.charAt(1);
let y = str4[0];
console.dir(x,y);


// Compairing string using comparison operator.
// Comparision operators compare string case-sensitively.

// Compare String using less than and greater than operator.
let a = 'a';
let b = 'b';
if(a<b){
 console.dir('a is smaller than b');
}


// Template literal
// using backtick `
// use template literal: It combine expression result inside string.
// use template literal for multiline string.
let str5 = 'this is string interpolation added from outside';
let str6 = `this is template literal or template string
that provides multiline string and ${str5}.`;

console.dir(str6);