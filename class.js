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


//Library Object:
class Library {

    //constructor function:
    constructor(name, email) {
        this.name = name
        this.email = email
    }

    //changeName Method:
    changeName(name) {
        this.name = name
    }

    //send email Method:
    sendEmail(msg) {
        console.log('To', this.email)
        console.log('Sending Email')
        console.log('msg', msg)
    }

    //Print Method:
    print() {
        console.log(this)
    }

}
const lib1 = new Library('knowledge House', 'knowledgehouse@gmail.com')
const lib2 = new Library('Candle Library', 'candle@gmail.com')

lib1.print()
lib2.print()

//change name of lib1
lib1.changeName('Future knowledge House')
lib1.print()