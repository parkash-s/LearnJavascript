// Primitive values are immutable. Once created it can't be changed
// although variables that holds these values can be reassigned new
// value.



// Object and Arrays are mutable by default.
// Object.freeze() is a language level method to make an
// object immutable in javascript.


var x = 1;
        var y = x;
        y++;
        console.dir(y,x);

        // variable y value will be 2.
        // variable x value will be 1.
        // Because primitive values can't be changed on their own place.