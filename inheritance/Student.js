
class Student {
    constructor(subjects, tuitionFee) {
        this._subjects = subjects
        this._tuitionFee = tuitionFee
    }

    //Getter Setter for Subject:
    get subjects() {
        return this._subjects
    }
    set subjects(value) {
        this._subjects = value
    }

    //Getter Setter for Tuition Fee:
    get tuitionFee() {
        return this._tuitionFee
    }
    set tuitionFee(value) {
        this._tuitionFee = value
    }

    toString(){
        return `StudentName: ${this._subjects}, TuitionFee: ${this._tuitionFee}`
    }

    print() {
        console.log(this)
    }

    static isValid(age) {
        return age >= 18
    }
    
}

const student = new Student(['Math', 'Physics', 'English', 'DSA'], 400000)
student.print()

module.exports = Student