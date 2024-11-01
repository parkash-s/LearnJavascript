// Previously we learned to create Js Object using Object.create. 
// We learned different techniques about Object.create.

// Now we look at some other concepts of Object creation in JS.

// If we missed in perivious section: Js Objects doesn't have any delete method to 
// delete any object property. To do so we use 'delete' operator. On successful deletion
// 'delete' operator provides true otherwise false.
// Syntax: 'delete anyObject.key'

// Constructor pattern
let Person = function (name,address){
    this.name = name;
    this.address = address;
}

let objA = new Person('anyPerson','anyAddress');
console.info(objA);

// language literal pattern

let itemA = {
    shape: 'triangle',
    perimeter:300
}

//By default Object doesn't follow iterator protocol.
//But for-in loop can be used to iterate Object Enumerable properties. 
for(element in itemA){
    console.info(itemA[element])
};

for(element in objA){
    console.info(objA[element]);
}


// We can also use for-of loop by converting Object to Array.
// We used Object.entries(), Object.keys(), Object.values() methods for conversion.

let itemB = {
    shape: 'triangle',
    perimeter:300
}

// it provides indexed Array: ['shape', 'perimeter'];
let objToArray = Object.keys(itemB);
console.info(objToArray,'Object to Array by using object keys');

// it provides indexed Array: ['triangle',300].
let objToArray1 = Object.values(itemB);
console.info(objToArray1,'Object to Array by using object values');

// it provides indexed Array : [['shape','triangle'],['perimeter',300]].
let objToArray2 = Object.entries(itemB);
console.dir(objToArray2,'Object to Array by using object key, value pairs');

// Converting Object to Array and back to Object.

let anyObj = {
    itm:'footbal',
    clr:'any Clr',
    plyer:'any n plyer'
};

// Converted to Array.
let anyObj1 = Object.entries(anyObj);
console.info(anyObj1,' -- anyObj1 Converted to Array.');

// Converted to Object.
let anyArry = Object.fromEntries(anyObj1);
console.info(anyArry, ' -- anyObj1 Converted back to Object');





// Object immutability:
// We have options to achieve Object immutability such as : 
// Using Object.create() method and setting Object keys enumerability, configurability, writability.
// Using Object.freez();

// Example 1:

let ObjB = {
    x:'this is x',
    n: 24,
    y:true
};

let ObjB1 = Object.freeze(ObjB);
// Object.freez, Provides enumerable property object.
// therefore for-in loop can be used on it.
// But property can't be deleted.
// Also Property can not be edited.
delete ObjB1.x;

ObjB1.x = 'again this is x';


for (props in ObjB1){
    console.info(ObjB1[props]);
}

// Check if Object is frozen by using Object.isFrozen.
let isfrzn = Object.isFrozen(ObjB1);
console.info(isfrzn, ' -- Object isfrzn check.');



// Example 2:
// Object.seal();
// Object properties are enumerable so for-in loop
// can be used. Properties are editable in comparison
// with 'Object.create()'. Properties can not be deleted. 
let ObjC = {
    a: 'this is A.',
    place: 1,
    b:true
}

let ObjC1 = Object.seal(ObjC);

delete ObjC1.a;

for(props in ObjC1){
    console.info(ObjC1[props]);
}

ObjC1.a = 'again this is A';


for(props in ObjC1){
    console.info(ObjC1[props]);
}


// Check if Object is frozen by using Object.isFrozen.
let isSled = Object.isSealed(ObjC1);
console.info(isSled, ' -- Object isSled check.');