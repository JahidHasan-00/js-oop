const Person = require('./Person.js')

class Teacher extends Person {
    constructor(name, email, subject, salary) {
        super(name, email)
        this._subject = subject 
        this._salary = salary
    }

    //Getter and Setter for subject:
    get subject() {        
        this._subject
    }
    set subject(value) {
        this.subject = value
    }

    //Getter and Setter for salary:
    get salary() {        
        this._salary
    }
    set salary(value) {
        this.salary = value
    }

    toString() {
        return `TeacherName: ${this._subject}, Salary: ${this._salary}`
    }

    print() {
        console.log(`Subject: ${this._subject}, Salary: ${this._salary}`)
    }

}

//Exports:
module.exports = Teacher