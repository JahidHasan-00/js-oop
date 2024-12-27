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
        console.log(`Have to draw`);
    }
}

circle.draw();