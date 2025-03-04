
class Person {
    constructor(name, email) {
        this._name = name
        this._email = email
    }

    //Getter and Setter for person name:
    get name(){
        return this._name
    }
    set name(value){
        if (Person.name === value) return
        this._name = value
    }

    //Getter and Setter for person email:
    get email() {
        return this._email
    }
    set email(value) {
        this._email = value
    }

    //toString() Method for meaningful output:
    toString() {
        return `Name: ${this._name}, Email: ${this._Email}`
    }

    print() {
        console.log(`Name: ${this._name}, Email: ${this._email}`)
    }
    
    static isValid(age) {
        return age >= 18
    }

    static equal(p1, p2) {
        if (p1.name !== p2.name) return false
        if (p1.email !== p2.email) return false

        return true
    }

}

module.exports = Person