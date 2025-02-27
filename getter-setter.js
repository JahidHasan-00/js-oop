/****
 * Getter and Setter Methods:
 * 
 */

class Person {
    //Static Values:
    static className = 'PERSON';
    static PI = 3.1416;

    constructor(name, email) {
        this._name = name
        this._email = email
    }

    //getter method
    get email() {
        return this._email
    }

    //setter method
    set email(value) {
        if (value.toLowerCase() === 'hasan@gmail.com') return;
        this._email = value
    }
   
    print() {
        console.log('New Person ' + this + ' ')
    }

    //toString method
    toString(){
        return `Name: ${this._name}, Email: ${this._email}`
    }

    //Static Methods:
    static isValid(age) {
        return age >= 18
    }

    static equal(p1, p2) {
        if(p1.name !== p2.name) return false
        if(p1.email !== p2.email) return false

        return true

    }

}

const p1 = new Person('Jahid','jahid.hasan@gmail.com')
const p2 = new Person('Abdullah', 'abdullah@gmail.com')
const p3 = new Person('Mr. Abadal', 'abdl@gmail.com')
const p6 = new Person('Mr. Abadal', 'abdl@gmail.com')

const p4 = {_name:'Lasith', _email: 'las@gmail.com'}

console.log(p1 instanceof Person) //true : p1 is an instance of (Person) class
console.log(p4 instanceof Person) //false : p4 is not an instance

p1.print()

console.log(Person.name)
console.log(Person.PI)

const testUser = {
    name: 'test',
    email: 'test@gmail.com',
    age: 18
}

let p5 = null;
if(Person.isValid(testUser.age)){
    p5 = new Person(testUser.name, testUser.email)
}
console.log(p5)

console.log(Person.equal(p3, p6))



