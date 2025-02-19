/**Technically in Object Oriented Programming properties and methods are different. Because properties are data(takes whole values) and methods are functions defines some logic.
 *Object Literals is a simple way to declare a object 
**/
/**Object Literals */
const circle = {
    radius: 1, //property
    location: { //property
        x: 1,
        y: 1
    },
    draw: function() { //method inside an object
        // console.log(`Have to draw`);
    }
}

circle.draw();

/**Factory Function:
 * Factory function is a function that returns an object.
 * In JavaScript, a factory function is a function that returns an object. It's called a factory function because it creates and returns a new object each time it's called, just like a factory creates and produces new products.
**/
function createCircle(radius){
    return {
        radius, //property
        draw: function() {
            // console.log('draw');
        }
    }
}
const circle1 = createCircle(1);
circle1.draw();

/**Constructor Function:
 * Constructor function is a function that returns an object.
 * In JavaScript, a constructor function is used to create objects. The new keyword is used to call the function. The constructor function is used to create multiple objects with the same properties and methods.
 * The constructor function is used to create multiple objects with the same properties and methods.
 * By default 'this', points to the global object which is window object in the browser.
**/
function Circle(radius){
    console.log('this', this); //By default this points to the global object. but if we use 'new' keyword then it points to the object that is created by the constructor function. 
    this.radius = radius; //property
    this.draw = function() {
        // console.log('draw');
    }
}
const circleObj = new Circle(1);

/** */

let x = {};
//let x = new Object();
new String(); // '', "", ``
new Boolean(); // true, false
new Number(); // 1, 2, 3, 4, 5


/**Value vs Reference types:
 * Value types are copied by their value.
 * Reference types are copied by their reference.
 */

//Value types:
let number = 10;

function increase(number){
    number++;
}
increase(number);
console.log(number); //10

//Reference types:
let obj = {value: 10};

function increase(obj){
    obj.value++;
}
increase(obj);
console.log(obj); //11


/**Adding and Removing Properties:
 * We can add and remove properties from an object.
 */

function VisitCountry(country){
    this.name = country;
    this.visited = false;

}
const country = new VisitCountry('Bangladesh');
country.numberOfCities = 64;
const nearestCountry = 'country-name';
country['nearest-Country'] = 'Pakistan';
console.log(country);
