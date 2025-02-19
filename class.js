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
        this._name = name
        this._email = email
    }

    //getName Method:
    getName() {
        return this._name
    }
    //setName Method:
    setName(name) {
        this._name = name
    }
    
    //getEmail Method:
    getEmail() {
        return this._email
    }
    //setEmail Method:
    setEmail(email) {
        this._email = email        
    }

    //sendMail Method:
    sendMail(msg) {
        console.log('To:', this._email)
        console.log('msg:', this._sanitizeMsg(msg))
    }
    //sanitizeMsg Method:
    _sanitizeMsg(msg) {
        return msg.trim().toLowerCase()
    }

    //Print Method:
    print() {
        console.log(this)
    }

}
const lib1 = new Library('knowledge House', 'knowledgehouse@gmail.com')
const lib2 = new Library('Candle Library', 'candle@gmail.com')

lib1.setName('Future Lib')
lib1.setEmail('future@gmail.com')

console.log(lib1.getName(), lib1.getEmail())

lib1.sendMail('     WOW! It is Working  ')
