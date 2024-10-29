        // Map Object
        // it is a key, value paired object.
        // Any value can be added to Map object whether it's primitive, function or object.
        // It remembers order of the keys.
        // Map is like as normal Object.

        // Declare Map Object and setting it's properties.
        let x = function(){}

        let xMap = new Map();
        xMap.set('a',1);
        xMap.set('b',2);
        xMap.set(true, '01');
        xMap.set(x, '002');

        // getting total numbers of Map Object items using 'size' property.
        let totalItemOfMap = xMap.size;
        console.dir(totalItemOfMap);

        // getting any key value inside Map Object.
        console.dir(xMap.get(true));

        // Difference between Map Object and Object.
        
        // Map Object doesn't have it's own properties by default.
        // An Object might have prototype proterties as well. 
        // So Object own properties could collide with it's prototype property. 
        
        // But a developer can also set an Object prototype to null by using "Object.create(null)".


        // Map Object is more secure than Object because it doesn't have
        // prototype property by default. An Object prototype can be overriden
        // by an attacker.


        // Map Object is more performant in adding and removing keys than Object.

        // Map Object key, value pairs order is simple and straightforward. 
        // It can be iterated using Entry, Key and Value in the order of
        // entry insertion.

        // Object keys order is complex. It does not have a single mechanisum to get
        // key and values of Object. Different mechanisum get different keys, values
        // properties of an Object.

        // A Map Object is an Iterable. So it is directly Iterated.
        // An Object doesn't follow iterable protocole. It can't be iterated by using
        // 'for..of' by default.
        // To use iterable protocole on Object use 'Object.keys' or 'Object.entries'.
        // for..in statement is used to iterate 'enumerable-property' of an object. 


        // Counting number of items in a Map Object is simple by using 'size' property.
        // Counting number of items in a Object is not straightforward. It can be done
        // by using 'length' property of Array by Converting Object into Array with
        // the help of Object.keys.

        // Map Object doesn't have a default parsing mechanisum.
        // Object has default parsing mechanisum. JSON.parse() to convert Json to Object and 
        // JSON.stringyfy() to convert Object to Json.

