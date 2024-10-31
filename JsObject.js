        // object creation:

        // Using Object.create:
        // ===========================

        // 1. It creates an object with null or without prototype.
        let obj = Object.create(null);
        console.dir(obj);

        // 2. It creates an object with a prototype object.
        let proto = {
            person:'any person',
            age:'any age'
        }

        let obj1 = Object.create(proto);
        console.dir(obj1, obj1.person);

        // 3. classical inheritance using Object.create.
        function Shape(x,y){
            this.x = x;
            this.y = y;
        }

        Shape.prototype.move = function(x,y){
            this.x+=x;
            this.y+=y;
        }

        function Rectangle(){
            Shape.call(this);
        }

        Rectangle.prototype =  Object.create(Shape.prototype,{
            Constructor:{
                value: Rectangle,
                enumerable:false,
                writable:true,
                configurable:true

            }
        });

        console.dir(Rectangle.prototype, Shape.prototype);
        
        let rect1 = new Rectangle();
        
        // below both shares same prototype object.
        console.info(rect1 instanceof Shape, rect1 instanceof Rectangle);


        // Object property descripter with Object.create:
        
        let o1 = Object.create(Object.prototype,{
            foo:{
                writable:true,
                configurable:true,
                enumerable:true
            },
            bar:{
                configurable:false,
                get(){
                    return 10;
                },
                set(val){
                    console.info("setting o1.bar to", val);
                }
            }
        });


        // By default object properties are not writable,
        // configurable or enumerable.
        
        // create an object with empty prototype object and 
        // set it's property x is equal to 'something'.

        let o2 = Object.create({}, {
            x:{value:'X KEY VALUE'},
            y:{value:'Y KEY VALUE'}
        });
        console.dir(o2.x,' --  access "x" property from "o2 object".');

        // can't rewrite x property again. It's not writable.
        o2.x = 'X KEY VALUE CHANGED';
        console.dir(o2.x,' -- Can not change "x" key value from "o2 object". Because It is not writable.');

        // can't access x property, it's not enumerable.
        console.info('-- Can not access "x" property using for-in. Because it is not enumerable.');
        for(props in o2){
            console.info(props,' -- Can not access "x" property using for-in. Because it is not enumerable.');
        }

        // 'y' property can not be deleted from 'o3' object because it is not configurable.
        delete o2.y;
        console.info(o2.y, ' -- Can not delete "y" key from "o2 object" because it is not configurable.');


        // make x property enumerable, writable and configurable.
        o2 = Object.create({},{
            x:{
                value:'X KEY VALUE ',
                enumerable:true,
                configurable:true,
                writable:true
            },
            y:{
                value:'Y KEY VALUE',
                configurable:true
            }
    });
        console.info('==================================================================================================================')
        
        // Because x property is now writable. It can be changed.
        o2.x = 'X KEY VALUE CHANGED';
        console.info(o2.x, ' -- Because x property is now writable. It has a new key value.')
        
        // Because x property is now enumerable. It can be accessed by using for-in.
        for(props in o2){
            console.info(o2[props],' -- Because "x" property is now enumerable. It is accessible by using for-in.');
        }

        // Because y property is now configurable. It can be deleted. 
        delete o2.y;
        console.info(o2.y, ' -- Because "y" property is now configurable. It has been deleted.')
