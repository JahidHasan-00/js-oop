/****
 * Getter and Setter Methods:
 * 
 */

class Person {
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

}

const p1 = new Person('Jahid','jahid.hasan@gmail.com')

p1.email = 'jahid@gmail.com'
console.log(p1.email)
p1.print()
