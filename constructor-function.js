//Constructor function:
// Constructor function is a function that returns an object.
// In JavaScript, a constructor function is used to create objects. The new keyword is used to call the function. The constructor function is used to create multiple objects with the same properties and methods.

function iceBox(name, id){
    this.boxName = name;
    this.boxId = id;
    this.open = function(){
        // console.log(`Open the box ${this.boxId} of ${this.boxName}`);
    } 
}

const obj1 = new iceBox('igloo', 50);
obj1.open();