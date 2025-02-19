//OOP: Object Oriented Programming

//Procedural way:
const person = {}

person.name = 'Jahid'
person.email = 'Jahid.hasan@gmail.com'
// console.log(person)


//OOP: Class and Object
class Person {
    
    // inside the constructor function this key word refers to the object of the current instance
    constructor(name, email){
        this.name = name
        this.email = email
    }
}
const p1 = new Person('Jahid', 'jahidhasan@gmail.com')
const p2 = new Person('Hasan', 'hasan@gmail.com')
const p3 = new Person('Junayed', 'junayed@gmail.com')
console.log(p1)
console.log(p2)
console.log(p3)